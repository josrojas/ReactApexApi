import { useMapData } from './../../../hooks/MapContext';
import styles from './Map.module.css';

const Ranked = () => {
    const data = useMapData();

    if (!data?.ranked) return <p className={styles.loading}>Loading...</p>;

    const { map: currentRankMap, asset } = data.ranked.current || {};
    const { map: nextRankMap } = data.ranked.next || {};


    return (
        <section className={styles.mapContainer}>
            <div className={styles.imgContainer}></div>
            {asset && (
                <img
                    src={asset}
                    alt={`Maps ranked: ${currentRankMap}`}
                    className={styles.imgAsset}
                />
            )}
            <div className={styles.container}>
                <h2>Ranked</h2>
                <div className={styles.currentMap}>Current map: {currentRankMap}</div>
                <div className={styles.remainingTimer}>Remaining Time: {data.timerRk}</div>
                <div className={styles.nextMap}>Next map: {nextRankMap}</div>
            </div>

            <div className={styles.footer}>
                <h5>{`Data from https://apexlegendsstatus.com`}</h5>
            </div>
        </section>
    );
};

export default Ranked;