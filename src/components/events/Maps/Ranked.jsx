import { useMapData } from './../../../hooks/useMapData';
import CircularTimer from './CircularTimer/CircularTimer';
import styles from './Map.module.css';

const API_SOURCE = 'https://apexlegendsstatus.com';

const Ranked = () => {
    const { ranked, timerRkSeconds, totalRkSeconds, error, isLoading, refetch } = useMapData();

    if (isLoading) return <p className={styles.loading}>Loading...</p>;
    if (error) return (
            <div className={styles.error}>
                <p>⚠️ Error: {error}</p>
                <button onClick={refetch}>Retry</button>
            </div>
    );
    if (!ranked) return <p className={styles.loading}>No data available</p>;

    const { map: currentRankMap, asset } = ranked.current || {};
    const { map: nextRankMap } = ranked.next || {};

    return (
    <section className={styles.mapContainer}>
        <div 
            className={styles.mapCard}
            style={{ backgroundImage: `url(${asset})` }}
        >
            <div className={styles.mapRow}>
                <div className={styles.mapLabel}>
                    <span>Current</span>
                    {currentRankMap || 'Unknown'}
                </div>
                <CircularTimer
                    totalSeconds={totalRkSeconds}
                    currentSeconds={timerRkSeconds}
                />
                <div className={styles.mapLabel}>
                    <span>Up Next</span>
                    {nextRankMap || 'Unknown'}
                </div>
            </div>
        </div>
        <footer className={styles.footer}>
            <h5>Data from {API_SOURCE}</h5>
        </footer>
    </section>
    );
};

export default Ranked;