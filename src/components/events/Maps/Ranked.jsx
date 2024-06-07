import React from 'react';
import { useMapRotation } from '../../../hooks/useMapRotation.js';
import styles from './Map.module.css';

// Component that use hook useMapRotation
const Ranked = () => {
    const apiKey = import.meta.env.VITE_APEX_API;
    const {
        currentRankMap,
        remainingTimerRk,
        nextRankMap,
        assetRk
    } = useMapRotation(apiKey);

    return (
        <div className={styles.mapContainer}>
            <div className={styles.imgContainer}></div>
            <div className={styles.imgAsset}><img src={assetRk} alt="Maps" /></div>
            <div className={styles.container}>
                <h2>Ranked</h2>
                <div className={styles.currentRankMap}>{`Current map: ${currentRankMap}`}</div>
                <div className={styles.remainingTimerRk}>{`Remaining Time: ${remainingTimerRk}`}</div>
                <div className={styles.nextRankMap}>{`Next map: ${nextRankMap}`}</div>
            </div>
        </div>
    );
};

export default Ranked;