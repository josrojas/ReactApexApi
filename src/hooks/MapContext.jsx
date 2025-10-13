import { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';

const MapContext = createContext();

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutos
const CACHE_KEY = 'apexMapData';
const CACHE_TIMESTAMP_KEY = 'apexMapData_timestamp';

const parseTimer = (str) => {
  if (!str) return 0;
  const [h, m, s] = str.split(':').map(Number);
  return h * 3600 + m * 60 + s;
};

const formatTimer = (seconds) => {
  if (seconds == null || seconds < 0) return 'N/A';
  if (seconds === 0) return 'Expired';
  return new Date(seconds * 1000).toISOString().slice(11, 19);
};

export const MapProvider = ({ apiKey, children }) => {
  const [mapData, setMapData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [timerBR, setTimerBR] = useState(null);
  const [timerRk, setTimerRk] = useState(null);
  const [timerLtm, setTimerLtm] = useState(null);

  const intervalRef = useRef(null);
  const hasFetchedRef = useRef(false); // Previene múltiples fetches

  const fetchData = useCallback(async (forceRefresh = false) => {
    if (!apiKey) {
      setError('API key is required');
      setIsLoading(false);
      return;
    }

    // Prevenir múltiples llamadas simultáneas
    if (hasFetchedRef.current && !forceRefresh) {
      return;
    }

    try {
      // Verificar cache primero
      const cachedData = localStorage.getItem(CACHE_KEY);
      const cachedTimestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);
      
      const now = Date.now();
      const cacheAge = cachedTimestamp ? now - parseInt(cachedTimestamp) : Infinity;

      // Si el cache es válido y no es un refresh forzado, usar cache
      if (cachedData && cacheAge < CACHE_DURATION && !forceRefresh) {
        console.log('Using cached data');
        setMapData(JSON.parse(cachedData));
        setError(null);
        setIsLoading(false);
        hasFetchedRef.current = true;
        return;
      }

      // Solo hacer fetch si es necesario
      console.log('Fetching fresh data from API');
      setIsLoading(true);
      setError(null);
      hasFetchedRef.current = true;

      const res = await fetch(
        `https://api.mozambiquehe.re/maprotation?auth=${apiKey}&version=2`
      );
      
      if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
      }
      
      const data = await res.json();
      
      // Guardar en localStorage
      localStorage.setItem(CACHE_KEY, JSON.stringify(data));
      localStorage.setItem(CACHE_TIMESTAMP_KEY, now.toString());
      
      setMapData(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching map data:', err);
      setError(err.message);
      
      // Si hay datos en cache, usarlos aunque sean viejos
      const cachedData = localStorage.getItem(CACHE_KEY);
      if (cachedData) {
        console.log('Using stale cached data due to error');
        setMapData(JSON.parse(cachedData));
      }
      
      hasFetchedRef.current = false; // Permitir retry
    } finally {
      setIsLoading(false);
    }
  }, [apiKey]);

  // Initial fetch - solo una vez
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Timer management
  useEffect(() => {
    if (!mapData) return;

    clearInterval(intervalRef.current);

    const brTime = mapData?.battle_royale?.current?.remainingTimer;
    const rkTime = mapData?.ranked?.current?.remainingTimer;
    const ltmTime = mapData?.ltm?.current?.remainingTimer;

    setTimerBR(brTime ? parseTimer(brTime) : null);
    setTimerRk(rkTime ? parseTimer(rkTime) : null);
    setTimerLtm(ltmTime ? parseTimer(ltmTime) : null);

    intervalRef.current = setInterval(() => {
      setTimerBR(prev => (prev !== null && prev > 0 ? prev - 1 : prev));
      setTimerRk(prev => (prev !== null && prev > 0 ? prev - 1 : prev));
      setTimerLtm(prev => (prev !== null && prev > 0 ? prev - 1 : prev));
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [mapData]);

  const handleRefetch = useCallback(() => {
    hasFetchedRef.current = false;
    fetchData(true); // Forzar refresh
  }, [fetchData]);

  const contextValue = {
    ...mapData,
    timerBR: formatTimer(timerBR),
    timerRk: formatTimer(timerRk),
    timerLtm: formatTimer(timerLtm),
    error,
    isLoading,
    refetch: handleRefetch
  };

  return (
    <MapContext.Provider value={contextValue}>
      {children}
    </MapContext.Provider>
  );
};

export const useMapData = () => {
  const context = useContext(MapContext);
  
  if (context === undefined) {
    throw new Error('useMapData must be used within a MapProvider');
  }
  
  return context;
};