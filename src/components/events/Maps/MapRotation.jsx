import React, { useState, useEffect } from 'react';

import styles from './Map.module.css';

const MapRotation = () => {
    // Define state for each piece of data
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

        fetch(`https://api.mozambiquehe.re/maprotation?auth=${import.meta.env.VITE_APEX_API}&version=2`)
            .then(res => res.json())
            .then(data => {
                setAssetPb(data.battle_royale?.current?.asset);
                setCurrentMap(data.battle_royale?.current?.map);
                //TODO set countdown timer for remainingTimer
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

                let remainingTimeLtm = new Date(`1970-01-01T${data.ltm?.current?.remainingTimer}Z`);
                // update remaining time in real time
                const intervalId = setInterval(() => {
                    if (remainingTimeLtm.getUTCSeconds() > -1) {
                        remainingTimeLtm.setUTCSeconds(remainingTimeLtm.getUTCSeconds() - 1);
                        setRemainingTimerLtm(`${remainingTimeLtm.toISOString().slice(11, 19)}`);
                    } else {
                        // If the remaining time is 0, stop the interval and get the data again
                        clearInterval(intervalId);
                    }
                }, 1000);

                let remainingTime = new Date(`1970-01-01T${data.battle_royale?.current?.remainingTimer}Z`);
                const intervalId2 = setInterval(() => {
                    if (remainingTime.getUTCSeconds() > -1) {
                        remainingTime.setUTCSeconds(remainingTime.getUTCSeconds() - 1);
                        setRemainingTimer(`${remainingTime.toISOString().slice(11, 19)}`);
                    } else {
                        clearInterval(intervalId2);
                    }
                }, 1000);

                let remainingTimeRk = new Date(`1970-01-01T${data.ranked?.current?.remainingTimer}Z`);
                const intervalId3 = setInterval(() => {
                    if (remainingTimeRk.getUTCSeconds() > -1) {
                        remainingTimeRk.setUTCSeconds(remainingTimeRk.getUTCSeconds() - 1);
                        setRemainingTimerRk(`${remainingTimeRk.toISOString().slice(11, 19)}`);
                    } else {
                        clearInterval(intervalId3);
                    }
                }, 1000);
            })
            .catch(e => console.error(new Error(e)));
    }, []);

    return (
        //Consume data from the API
        <div className={styles.mapContainer}>
            <h1>Current Apex Legends map rotation</h1>
            <div className={styles.imgContainer}>
                <div className={styles.imgAsset}><img src={assetPb} alt="Maps" /></div>
                <div className={styles.container}>
                    <h2>Battle Royale </h2>
                    <div className={styles.currentMap}>{`Current map: ${currentMap}`}</div>
                    <div className={styles.remainingTimer}>{`Remaining Time: ${remainingTimer}`}</div>
                    <div className={styles.nextMap}>{`Next map: ${nextMap}`}</div>
                </div>
                <div className={styles.imgAsset}><img src={assetRk} alt="Maps" /></div>
                <div className={styles.container}>
                    <h2>Ranked</h2>
                    <div className={styles.currentRankMap}>{`Current map: ${currentRankMap}`}</div>
                    <div className={styles.remainingTimerRk}>{`Remaining Time: ${remainingTimerRk}`}</div>
                    <div className={styles.nextRankMap}>{`Next map: ${nextRankMap}`}</div>
                </div>
                <div className={styles.imgAsset}><img src={assetLtm} alt="Maps" /></div>
                <div className={styles.container}>
                    <h2>Mixtape</h2>
                    <div className={styles.currentLtm}>{`Current LTM: ${currentLtm}`}</div>
                    <div className={styles.remainingTimerLtm}>{`Remaining Time: ${remainingTimerLtm}`}</div>
                    <div className={styles.nextLtm}>{`Next LTM: ${nextLtm}`}</div>
                </div>
            </div>
            <h5>{`Data from apexlegendsstatus.com`}</h5>
        </div>
    );
};

export default MapRotation;
