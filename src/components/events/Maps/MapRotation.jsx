import React from 'react';
import { useMapRotation } from '../../../hooks/useMapRotation.jsx';
import styles from './Map.module.css';

// Componente MapRotation que utiliza el hook useMapRotation
const MapRotation = () => {
    const apiKey = import.meta.env.VITE_APEX_API;
    const {
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
    } = useMapRotation(apiKey);

    return (
        <div className={styles.mapContainer}>
            <h1>Current Apex Legends map rotation</h1>
            <div className={styles.imgContainer}></div>
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
            <h5>{`Data from apexlegendsstatus.com`}</h5>
        </div>
    );
};

export default MapRotation;