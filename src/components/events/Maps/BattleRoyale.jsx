import React from 'react';
import { useMapRotation } from '../../../hooks/useMapRotation.js';
import styles from './Map.module.css';

// Component that use hook useMapRotation
const BattleRoyale = () => {
    const apiKey = import.meta.env.VITE_APEX_API;
    const {
        currentMap,
        remainingTimer,
        nextMap,
        assetPb
    } = useMapRotation(apiKey);

    return (
        <div className={styles.mapContainer}>
            <div className={styles.imgContainer}></div>
            <div className={styles.imgAsset}><img src={assetPb} alt="Maps" height={540}/></div>
            <div className={styles.container}>
                <h2>Battle Royale </h2>
                <div className={styles.currentMap}>{`Current map: ${currentMap}`}</div>
                <div className={styles.remainingTimer}>{`Remaining Time: ${remainingTimer}`}</div>
                <div className={styles.nextMap}>{`Next map: ${nextMap}`}</div>
            </div>

            <div className={styles.footer}>
                <h5>{`Data from ea.com/games/apex-legends`}</h5>
            </div>
        </div>
    );
};

export default BattleRoyale;