import React, { useState, useEffect } from 'react';

const MapRotation = () => {
    // Define state for each piece of data
    const [currentMap, setCurrentMap] = useState('');
    const [remainingTimer, setRemainingTimer] = useState('');
    const [nextMap, setNextMap] = useState('');
    const [currentRankMap, setCurrentRankMap] = useState('');
    const [nextRankMap, setNextRankMap] = useState('');
    const [currentLtm, setCurrentLtm] = useState('');
    const [remainingTimerLtm, setRemainingTimerLtm] = useState('');
    const [nextLtm, setNextLtm] = useState('');

    useEffect(() => {
        const params = '';

        fetch(`https://api.mozambiquehe.re/maprotation?auth=${import.meta.env.VITE_APEX_API_KEY}&version=2${params?.length ? params : ''}`)
            .then(res => res.json())
            .then(data => {
                setCurrentMap(data.battle_royale?.current?.map);
                //TODO set countdown timer for remainingTimer
                setRemainingTimer(data.battle_royale?.current?.remainingTimer);
                setNextMap(data.battle_royale?.next?.map);
                setCurrentRankMap(data.ranked?.current?.map);
                setNextRankMap(data.ranked?.next?.map);
                setCurrentLtm(`${data.ltm?.current?.eventName} ${data.ltm?.current?.map}`);
                setRemainingTimerLtm(data.ltm?.current?.remainingTimer);
                setNextLtm(`${data.ltm?.next?.eventName} ${data.ltm?.next?.map}`);
            })
            .catch(e => console.error(new Error(e)));
    }, []);

    return (
        //Consume data from the API
        <div>
            <h2>Battle Royale</h2>
            <div id="current">{`Mapa actual: ${currentMap}`}</div>
            <div id="remainingTimer">{`Tiempo restante: ${remainingTimer}`}</div>
            <div id="next">{`Siguiente mapa: ${nextMap}`}</div>
            <h2>Ranked</h2>
            <p id="rank" />
            <div id="rank">{`Mapa actual: ${currentRankMap}`}</div>
            <p>From 12:00pm to 12:00pm</p>
            <div id="rankNext">{`Siguiente mapa: ${nextRankMap}`}</div>
            <p id="rankNext" />
            <h2>LTM</h2>
            <div id="ltm">{`LTM actual: ${currentLtm}`}</div>
            <div id="remainingTimerLtm">{`Tiempo restante: ${remainingTimerLtm}`}</div>
            <div id="ltmNext">{`LTM Siguiente: ${nextLtm}`}</div>                     
        </div>
    );
};

export default MapRotation;
