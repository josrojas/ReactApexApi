import React, { useState, useEffect } from 'react';

import styles from './Map.module.css';

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
        <div className={styles.mapContainer}>
            <h1>Current Apex Legends map rotation</h1>
            <div className={styles.pbContainer}><h2>Battle Royale </h2>
                <div className={styles.currentMap}>{`Current map: ${currentMap}`}</div>
                <div className={styles.remainingTimer}>{`Remaining Time: ${remainingTimer}`}</div>
                <div className={styles.nextMap}>{`Next map: ${nextMap}`}</div>
            </div>
            <div className={styles.rankContainer}><h2>Ranked</h2>
                <div className={styles.currentRankMap}>{`Current map: ${currentRankMap}`}</div>
                <p>From 12:00pm to 12:00pm</p>
                <div className={styles.nextRankMap}>{`Next map: ${nextRankMap}`}</div>
            </div>
            <div className={styles.ltmContainer}><h2>LTM</h2>
                <div className={styles.currentLtm}>{`Current LTM: ${currentLtm}`}</div>
                <div className={styles.remainingTimerLtm}>{`Remaining Time: ${remainingTimerLtm}`}</div>
                <div className={styles.nextLtm}>{`Next LTM: ${nextLtm}`}</div>
            </div>
        </div>
    );
};

export default MapRotation;
