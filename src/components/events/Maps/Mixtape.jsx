import { useMapData } from './../../../hooks/useMapData';
import CircularTimer from './CircularTimer/CircularTimer';
import styles from './Map.module.css';

const API_SOURCE = 'https://apexlegendsstatus.com';

const Mixtape = () => {
    const { ltm, timerLtmSeconds, totalLtmSeconds, error, isLoading, refetch } = useMapData();

    if (isLoading) return <p className={styles.loading}>Loading...</p>;

    if (error && !ltm) return (
        <div className={styles.error}>
            <p>⚠️ Error: {error}</p>
            <button onClick={refetch}>Retry</button>
        </div>
    );

    if (!ltm) return <p className={styles.loading}>No data available</p>;

    const current = ltm.current || {};
    const next = ltm.next || {};

    return (
        <section className={styles.mapContainer}>
            {error && (
                <div className={styles.warningBanner}>
                    ⚠️ Using cached data. {error}
                    <button onClick={refetch} className={styles.retrySmall}>Retry</button>
                </div>
            )}

            <div
                className={styles.mapCard}
                style={{ backgroundImage: `url(${current.asset})` }}
            >
                <div className={styles.mapRow}>
                    <div className={styles.mapLabel}>
                        <span>Current</span>
                        <small>{current.eventName || 'Unknown'}</small>
                        <strong>{current.map || 'Unknown'}</strong>
                    </div>
                    <CircularTimer
                        totalSeconds={totalLtmSeconds}
                        currentSeconds={timerLtmSeconds}
                    />
                    <div className={styles.mapLabel}>
                        <span>Up Next</span>
                        <small>{next.eventName || 'Unknown'}</small>
                        <strong>{next.map || 'Unknown'}</strong>
                    </div>
                </div>
            </div>

            <footer className={styles.footer}>
                <h5>Data from {API_SOURCE}</h5>
            </footer>
        </section>
    );
};

export default Mixtape;