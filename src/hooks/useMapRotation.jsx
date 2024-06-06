import { useState, useEffect, useRef } from 'react';

// Hook personalizado para manejar la lógica de la API
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

    // Referencias para los intervalos
    const intervalIdRef = useRef(null);
    const intervalIdRkRef = useRef(null);
    const intervalIdLtmRef = useRef(null);

    // Función para actualizar el contador de tiempo restante
    const updateTimer = (initialTime, setRemainingTime) => {
        let time = new Date(`1970-01-01T${initialTime}Z`);
        return setInterval(() => {
            if (time.getUTCSeconds() > -1) {
                time.setUTCSeconds(time.getUTCSeconds() - 1);
                const newTime = time.toISOString().slice(11, 19);
                setRemainingTime(newTime);
            }
        }, 1000);
    };

    useEffect(() => {
        // Función para obtener y actualizar los datos de la API
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.mozambiquehe.re/maprotation?auth=${apiKey}&version=2`);
                const data = await response.json();
                // Actualiza el estado con los nuevos datos
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

    useEffect(() => {
        // Creación de nuevos intervalos con los tiempos iniciales de la API
        intervalIdRef.current = updateTimer(remainingTimer, setRemainingTimer);
        intervalIdRkRef.current = updateTimer(remainingTimerRk, setRemainingTimerRk);
        intervalIdLtmRef.current = updateTimer(remainingTimerLtm, setRemainingTimerLtm);

        return () => {
            clearInterval(intervalIdRef.current);
            clearInterval(intervalIdRkRef.current);
            clearInterval(intervalIdLtmRef.current);
        };
    }, [remainingTimer, remainingTimerRk, remainingTimerLtm]);

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