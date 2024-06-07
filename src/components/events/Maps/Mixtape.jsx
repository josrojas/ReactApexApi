import React from 'react';
import { useMapRotation } from '../../../hooks/useMapRotation.js';
import styles from './Map.module.css';

// Component that use hook useMapRotation
const Mixtape = () => {
    const apiKey = import.meta.env.VITE_APEX_API;
    const {
        currentLtm,
        remainingTimerLtm,
        nextLtm,
        assetLtm
    } = useMapRotation(apiKey);

    return (
        <div className={styles.mapContainer}>
            <div className={styles.imgContainer}></div>
            <div className={styles.imgAsset}><img src={assetLtm} alt="Maps" /></div>
            <div className={styles.container}>
                <h2>Mixtape</h2>
                <div className={styles.currentLtm}>{`Current LTM: ${currentLtm}`}</div>
                <div className={styles.remainingTimerLtm}>{`Remaining Time: ${remainingTimerLtm}`}</div>
                <div className={styles.nextLtm}>{`Next LTM: ${nextLtm}`}</div>
            </div>
        </div>
    );
};

export default Mixtape;