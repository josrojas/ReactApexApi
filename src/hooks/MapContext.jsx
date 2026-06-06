import { createContext, useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';

export const MapContext = createContext();

const CACHE_DURATION = 5 * 60 * 1000;
const CACHE_KEY = 'apexMapData';
const CACHE_TIMESTAMP_KEY = 'apexMapData_timestamp';

const parseTimer = (str) => {
  if (!str) return 0;
  const parts = str.split(':').map(Number);
  if (parts.length === 2) {
    const [m, s] = parts;
    return m * 60 + s;
  } else if (parts.length === 3) {
    const [h, m, s] = parts;
    return h * 3600 + m * 60 + s;
  }
  return 0;
};

const formatTimer = (seconds) => {
  if (seconds == null || seconds < 0) return 'N/A';
  if (seconds === 0) return 'Expired';
  return new Date(seconds * 1000).toISOString().slice(11, 19);
};

const calculateTotalSeconds = (currentRotation) => {
  if (!currentRotation) return 7200;
  return currentRotation.DurationInSecs || 7200;
};

export const MapProvider = ({ apiKey, children }) => {
  const [mapData, setMapData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [timerBR, setTimerBR] = useState(null);
  const [timerRk, setTimerRk] = useState(null);
  const [timerLtm, setTimerLtm] = useState(null);
  const [timerWC, setTimerWC] = useState(null);

  const intervalRef = useRef(null);
  const hasFetchedRef = useRef(false);

  const fetchData = useCallback(async (forceRefresh = false) => {
    if (!apiKey) {
      setError('API key is required');
      setIsLoading(false);
      return;
    }

    if (hasFetchedRef.current && !forceRefresh) return;

    try {
      const cachedData = localStorage.getItem(CACHE_KEY);
      const cachedTimestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);
      const now = Date.now();
      const cacheAge = cachedTimestamp ? now - parseInt(cachedTimestamp) : Infinity;

      if (cachedData && cacheAge < CACHE_DURATION && !forceRefresh) {
        const data = JSON.parse(cachedData);

        // Si faltan datos de alguna categoría, descartar cache y fetch fresco
        if (!data.battle_royale || !data.ranked || !data.ltm || !data.wildcard) {
          console.log('Incomplete cached data, fetching fresh');
          localStorage.removeItem(CACHE_KEY);
          localStorage.removeItem(CACHE_TIMESTAMP_KEY);
          hasFetchedRef.current = false;
          fetchData(true);
          return;
        }

        console.log('Using cached data');
        const elapsedSinceCache = Math.floor(cacheAge / 1000);

        if (data.battle_royale?.current) {
          data.battle_royale.current.remainingSecs = Math.max(0, data.battle_royale.current.remainingSecs - elapsedSinceCache);
          data.battle_royale.current.remainingTimer = new Date(data.battle_royale.current.remainingSecs * 1000).toISOString().slice(11, 19);
        }
        if (data.ranked?.current) {
          data.ranked.current.remainingSecs = Math.max(0, data.ranked.current.remainingSecs - elapsedSinceCache);
          data.ranked.current.remainingTimer = new Date(data.ranked.current.remainingSecs * 1000).toISOString().slice(11, 19);
        }
        if (data.ltm?.current) {
          data.ltm.current.remainingSecs = Math.max(0, data.ltm.current.remainingSecs - elapsedSinceCache);
          data.ltm.current.remainingTimer = new Date(data.ltm.current.remainingSecs * 1000).toISOString().slice(11, 19);
        }
        if (data.wildcard?.current) {
          data.wildcard.current.remainingSecs = Math.max(0, data.wildcard.current.remainingSecs - elapsedSinceCache);
          data.wildcard.current.remainingTimer = new Date(data.wildcard.current.remainingSecs * 1000).toISOString().slice(11, 19);
        }

        setMapData(data);
        setError(null);
        setIsLoading(false);
        hasFetchedRef.current = true;
        return;
      }

      console.log('Fetching fresh data from API');
      setIsLoading(true);
      setError(null);
      hasFetchedRef.current = true;

      const res = await fetch(`https://api.mozambiquehe.re/maprotation?auth=${apiKey}&version=2`);
      if (!res.ok) throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);

      const data = await res.json();
      localStorage.setItem(CACHE_KEY, JSON.stringify(data));
      localStorage.setItem(CACHE_TIMESTAMP_KEY, now.toString());
      setMapData(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching map data:', err);
      setError(err.message);
      const cachedData = localStorage.getItem(CACHE_KEY);
      if (cachedData) {
        console.log('Using stale cached data due to error');
        setMapData(JSON.parse(cachedData));
      }
      hasFetchedRef.current = false;
    } finally {
      setIsLoading(false);
    }
  }, [apiKey]);

  const handleRefetch = useCallback(() => {
    hasFetchedRef.current = false;
    fetchData(true);
  }, [fetchData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (!mapData) return;

    clearInterval(intervalRef.current);

    setTimerBR(mapData?.battle_royale?.current?.remainingTimer ? parseTimer(mapData.battle_royale.current.remainingTimer) : null);
    setTimerRk(mapData?.ranked?.current?.remainingTimer ? parseTimer(mapData.ranked.current.remainingTimer) : null);
    setTimerLtm(mapData?.ltm?.current?.remainingTimer ? parseTimer(mapData.ltm.current.remainingTimer) : null);
    setTimerWC(mapData?.wildcard?.current?.remainingTimer ? parseTimer(mapData.wildcard.current.remainingTimer) : null);

    intervalRef.current = setInterval(() => {
      setTimerBR(prev => {
        if (prev === 1) handleRefetch();
        return prev !== null && prev > 0 ? prev - 1 : prev;
      });
      setTimerRk(prev => {
        if (prev === 1) handleRefetch();
        return prev !== null && prev > 0 ? prev - 1 : prev;
      });
      setTimerLtm(prev => {
        if (prev === 1) handleRefetch();
        return prev !== null && prev > 0 ? prev - 1 : prev;
      });
      setTimerWC(prev => {
        if (prev === 1) handleRefetch();
        return prev !== null && prev > 0 ? prev - 1 : prev;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [mapData, handleRefetch]);

  const contextValue = {
    ...mapData,
    timerBR: formatTimer(timerBR),
    timerRk: formatTimer(timerRk),
    timerLtm: formatTimer(timerLtm),
    timerWC: formatTimer(timerWC),
    timerBRSeconds: Math.floor(timerBR ?? 0),
    timerRkSeconds: Math.floor(timerRk ?? 0),
    timerLtmSeconds: Math.floor(timerLtm ?? 0),
    timerWCSeconds: Math.floor(timerWC ?? 0),
    totalBRSeconds: mapData ? calculateTotalSeconds(mapData.battle_royale?.current) : 7200,
    totalRkSeconds: mapData ? calculateTotalSeconds(mapData.ranked?.current) : 7200,
    totalLtmSeconds: mapData ? calculateTotalSeconds(mapData.ltm?.current) : 7200,
    totalWcSeconds: mapData ? calculateTotalSeconds(mapData.wildcard?.current) : 7200,
    error,
    isLoading,
    refetch: handleRefetch,
  };

  return (
    <MapContext.Provider value={contextValue}>
      {children}
    </MapContext.Provider>
  );
};

MapProvider.propTypes = {
  apiKey: PropTypes.string.isRequired,
  children: PropTypes.node,
};