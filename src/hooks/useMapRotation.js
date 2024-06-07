import { useState, useEffect } from 'react';

// Hook to manage API
export function useMapRotation(apiKey) {
    const [currentMap, setCurrentMap] = useState('');
    const [remainingTimer, setRemainingTimer] = useState('');
    const [nextMap, setNextMap] = useState('');

    const [currentRankMap, setCurrentRankMap] = useState('');
    const [remainingTimerRk, setRemainingTimerRk] = useState('');
    const [nextRankMap, setNextRankMap] = useState('');

    const [currentLtm, setCurrentLtm] = useState('');
    const [remainingTimerLtm, setRemainingTimerLtm] = useState('');
    const [nextLtm, setNextLtm] = useState('');

    const [assetPb, setAssetPb] = useState('');
    const [assetRk, setAssetRk] = useState('');
    const [assetLtm, setAssetLtm] = useState('');

    useEffect(() => {

      let intervalId;
        // Function for update all timers
        const updateAllTimers = () => {
          // Update battle royale timer
          if (remainingTimer) {
            const newTimeBr = new Date(`1970-01-01T${remainingTimer}Z`);
            newTimeBr.setUTCSeconds(newTimeBr.getUTCSeconds() - 1);
            setRemainingTimer(newTimeBr.toISOString().slice(11, 19));
          }
          // Update ranked timer
          if (remainingTimerRk) {
            const newTimeRk = new Date(`1970-01-01T${remainingTimerRk}Z`);
            newTimeRk.setUTCSeconds(newTimeRk.getUTCSeconds() - 1);
            setRemainingTimerRk(newTimeRk.toISOString().slice(11, 19));
          }
          // Update LTM timer
          if (remainingTimerLtm) {
            const newTimeLtm = new Date(`1970-01-01T${remainingTimerLtm}Z`);
            newTimeLtm.setUTCSeconds(newTimeLtm.getUTCSeconds() - 1);
            setRemainingTimerLtm(newTimeLtm.toISOString().slice(11, 19));
          }
        };
      
        // Unique interval for all timers
        intervalId = setInterval(updateAllTimers, 1000);
      
        return () => {
          clearInterval(intervalId);
        };
      }, [remainingTimer, remainingTimerRk, remainingTimerLtm]);

    useEffect(() => {
        // Function to consume API
        
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.mozambiquehe.re/maprotation?auth=${apiKey}&version=2`);
                const data = await response.json();

                setAssetPb(data.battle_royale?.current?.asset);
                setCurrentMap(data.battle_royale?.current?.map);
                setRemainingTimer(data.battle_royale?.current?.remainingTimer);
                setNextMap(data.battle_royale?.next?.map);
                setAssetRk(data.ranked?.current?.asset);
                setCurrentRankMap(data.ranked?.current?.map);
                setRemainingTimerRk(data.ranked?.current?.remainingTimer);
                setNextRankMap(data.ranked?.next?.map);
                setAssetLtm(data.ltm?.current?.asset);
                setCurrentLtm(`${data.ltm?.current?.eventName} ${data.ltm?.current?.map}`);
                setRemainingTimerLtm(data.ltm?.current?.remainingTimer);
                setNextLtm(`${data.ltm?.next?.eventName} ${data.ltm?.next?.map}`);

            } catch (error) {
                console.error(new Error(error));
            }
        };

        fetchData();
    }, []);

    return {
        currentMap,
        remainingTimer,
        nextMap,
        currentRankMap,
        remainingTimerRk,
        nextRankMap,
        currentLtm,
        remainingTimerLtm,
        nextLtm,
        assetPb,
        assetRk,
        assetLtm
    };
};