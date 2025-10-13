import { useMapData } from './../../../hooks/MapContext';
import styles from './Map.module.css';

const API_SOURCE = 'https://apexlegendsstatus.com';

const BattleRoyale = () => {
    const { battle_royale, timerBR, error, isLoading, refetch } = useMapData();

    if (isLoading) {
        return <p className={styles.loading}>Loading...</p>;
    }

    if (error) {
        return (
            <div className={styles.error}>
                <p>⚠️ Error: {error}</p>
                <button onClick={refetch}>Retry</button>
            </div>
        );
    }

    if (!battle_royale) {
        return <p className={styles.loading}>No data available</p>;
    }

    const { map: currentMap, asset } = battle_royale.current || {};
    const { map: nextMap } = battle_royale.next || {};

    return (
        <section className={styles.mapContainer}>
            {asset && (
                <img
                    src={asset}
                    alt={`Battle Royale map: ${currentMap}`}
                    className={styles.imgAsset}
                />
            )}
            <div className={styles.container}>
                <h2>Battle Royale</h2>
                <div className={styles.currentMap}>
                    Current map: {currentMap || 'Unknown'}
                </div>
                <div className={styles.remainingTimer}>
                    Remaining Time: {timerBR}
                </div>
                <div className={styles.nextMap}>
                    Next map: {nextMap || 'Unknown'}
                </div>
            </div>
            <footer className={styles.footer}>
                <h5>Data from https://apexlegendsstatus.com</h5>
            </footer>
        </section>
    );
};

export default BattleRoyale;