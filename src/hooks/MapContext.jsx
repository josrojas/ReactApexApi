import { createContext, useContext, useState, useEffect, useRef } from 'react';

const MapContext = createContext();

const parseTimer = (str) => {
  const [h, m, s] = str.split(':').map(Number);
  return h * 3600 + m * 60 + s;
};

export const MapProvider = ({ apiKey, children }) => {
  const [mapData, setMapData] = useState(null);
  const [error, setError] = useState(null);

  const [timerBR, setTimerBR] = useState(null);
  const [timerRk, setTimerRk] = useState(null);
  const [timerLtm, setTimerLtm] = useState(null);

  const intervalRef = useRef(null);

  // Fetch cache in localStorage
  useEffect(() => {
    const fetchData = async () => {
      const cache = localStorage.getItem('mapData');
      const timestamp = localStorage.getItem('mapData_ts');

      const isRecent = timestamp && (Date.now() - parseInt(timestamp) < 1000 * 60 * 5);

      if (cache && isRecent) {
        const cachedData = JSON.parse(cache);
        setMapData(cachedData);
        return;
      }

      try {
        const res = await fetch(`https://api.mozambiquehe.re/maprotation?auth=${apiKey}&version=2`);
        if (!res.ok) throw new Error(`Error ${res.status}`);
        const data = await res.json();
        localStorage.setItem('mapData', JSON.stringify(data));
        localStorage.setItem('mapData_ts', Date.now().toString());
        setMapData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [apiKey]);

  // DisplayTimer
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
      setTimerBR(prev => (prev > 0 ? prev - 1 : 0));
      setTimerRk(prev => (prev > 0 ? prev - 1 : 0));
      setTimerLtm(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalRef.current);

  }, [mapData]);

  const format = (s) =>
    s != null ? new Date(s * 1000).toISOString().slice(11, 19) : null;

  return (
    <MapContext.Provider
      value={{
        ...mapData,
        timerBR: format(timerBR),
        timerRk: format(timerRk),
        timerLtm: format(timerLtm),
        error
      }}
    >
      {children}
    </MapContext.Provider>

  );
};

export const useMapData = () => useContext(MapContext);