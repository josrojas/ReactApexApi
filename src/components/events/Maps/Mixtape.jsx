import { useMapData } from './../../../hooks/MapContext';
import styles from './Map.module.css';

const API_SOURCE = 'https://apexlegendsstatus.com';

const Mixtape = () => {
    const { ltm, timerLtm, error, isLoading, refetch } = useMapData();

    if (isLoading) {
        return <p className={styles.loading}>Loading...</p>;
    }

    if (error && !ltm) {
        return (
            <div className={styles.error}>
                <p>⚠️ Error: {error}</p>
                <button onClick={refetch}>Retry</button>
            </div>
        );
    }

    if (!ltm) {
        return <p className={styles.loading}>No data available</p>;
    }

    const current = ltm.current || {};
    const next = ltm.next || {};

    return (
        <section className={styles.mapContainer}>
            {error && (
                <div className={styles.warningBanner}>
                    ⚠️ Using cached data. {error}
                    <button onClick={refetch} className={styles.retrySmall}>
                        Retry
                    </button>
                </div>
            )}

            {current.asset && (
                <img
                    src={current.asset}
                    alt={`LTM Map: ${current.map || 'Unknown'}`}
                    className={styles.imgAsset}
                />
            )}

            <div className={styles.container}>
                <h2>Mixtape / LTM</h2>
                <div className={styles.currentMap}>
                    Current Mode: <strong>{current.eventName || 'Unknown'}</strong> — {current.map || 'Unknown'}
                </div>
                <div className={styles.remainingTimer}>
                    Remaining Time: {timerLtm || 'N/A'}
                </div>
                <div className={styles.nextMap}>
                    Next Mode: <strong>{next.eventName || 'Unknown'}</strong> — {next.map || 'Unknown'}
                </div>
            </div>

            <footer className={styles.footer}>
                <h5>Data from {API_SOURCE}</h5>
            </footer>
        </section>
    );
};

export default Mixtape;