import { useMapData } from './../../../hooks/MapContext';
import styles from './Map.module.css';

const API_SOURCE = 'https://apexlegendsstatus.com';

const Ranked = () => {
    const { ranked, timerRk, error, isLoading, refetch } = useMapData();

    if (isLoading) {
        return <p className={styles.loading}>Loading...</p>;
    }

    if (error && !ranked) {
        return (
            <div className={styles.error}>
                <p>⚠️ Error: {error}</p>
                <button onClick={refetch}>Retry</button>
            </div>
        );
    }

    if (!ranked) {
        return <p className={styles.loading}>No data available</p>;
    }

    const { map: currentRankMap, asset } = ranked.current || {};
    const { map: nextRankMap } = ranked.next || {};

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
            
            {asset && (
                <img
                    src={asset}
                    alt={`Ranked map: ${currentRankMap}`}
                    className={styles.imgAsset}
                />
            )}
            
            <div className={styles.container}>
                <h2>Ranked</h2>
                <div className={styles.currentMap}>
                    Current map: {currentRankMap || 'Unknown'}
                </div>
                <div className={styles.remainingTimer}>
                    Remaining Time: {timerRk || 'N/A'}
                </div>
                <div className={styles.nextMap}>
                    Next map: {nextRankMap || 'Unknown'}
                </div>
            </div>

            <footer className={styles.footer}>
                <h5>Data from {API_SOURCE}</h5>
            </footer>
        </section>
    );
};

export default Ranked;