import { useMapData } from './../../../hooks/useMapData';
import CircularTimer from './CircularTimer/CircularTimer';
import styles from './Map.module.css';

const API_SOURCE = 'https://apexlegendsstatus.com';

const BattleRoyale = () => {
    const { battle_royale, timerBRSeconds, totalBRSeconds, error, isLoading, refetch } = useMapData();

    if (isLoading) return <p className={styles.loading}>Loading...</p>;
    if (error) return (
        <div className={styles.error}>
            <p>⚠️ Error: {error}</p>
            <button onClick={refetch}>Retry</button>
        </div>
    );
    if (!battle_royale) return <p className={styles.loading}>No data available</p>;

    const { map: currentMap, asset } = battle_royale.current || {};
    const { map: nextMap } = battle_royale.next || {};

    return (
    <section className={styles.mapContainer}>
        <div
            className={styles.mapCard}
            style={{ backgroundImage: `url(${asset})` }}
        >
            <div className={styles.mapRow}>
                <div className={styles.mapLabel}>
                    <span>Current</span>
                    {currentMap || 'Unknown'}
                </div>
                <CircularTimer
                    totalSeconds={totalBRSeconds}
                    currentSeconds={timerBRSeconds}
                />
                <div className={styles.mapLabel}>
                    <span>Up Next</span>
                    {nextMap || 'Unknown'}
                </div>
            </div>
        </div>
        <footer className={styles.footer}>
            <h5>Data from {API_SOURCE}</h5>
        </footer>
    </section>
    );
};

export default BattleRoyale;