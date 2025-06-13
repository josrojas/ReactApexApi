import { useMapData } from './../../../hooks/MapContext';
import styles from './Map.module.css';

const BattleRoyale = () => {
    const data = useMapData();

    if (!data?.battle_royale) return <p className={styles.loading}>Loading...</p>;

    const { map: currentMap, asset } = data.battle_royale.current || {};
    const { map: nextMap } = data.battle_royale.next || {};

    return (
        <section className={styles.mapContainer}>
            <div className={styles.imgContainer}></div>
            {asset && (
                <img
                    src={asset}
                    alt={`Maps br: ${currentMap}`}
                    className={styles.imgAsset}
                />
            )}
            <div className={styles.container}>
                <h2>Battle Royale</h2>
                <div className={styles.currentMap}>Current map: {currentMap}</div>
                <div className={styles.remainingTimer}>Remaining Time: {data.timerBR}</div>
                <div className={styles.nextMap}>Next map: {nextMap}</div>
            </div>

            <div className={styles.footer}>
                <h5>{`Data from https://apexlegendsstatus.com`}</h5>
            </div>
        </section>
    );
};

export default BattleRoyale;