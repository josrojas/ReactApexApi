import { useMapData } from './../../../hooks/MapContext';
import styles from './Map.module.css';

const Mixtape = () => {
  const data = useMapData();

  if (!data?.ltm) return <p className={styles.loading}>Loading...</p>;

  const current = data.ltm.current || {};
  const next = data.ltm.next || {};

  return (
    <section className={styles.mapContainer}>
      <div className={styles.imgContainer}>
        {current.asset && (
          <img
            src={current.asset}
            alt={`LTM Map: ${current.map}`}
            className={styles.imgAsset}
          />
        )}
      </div>

      <div className={styles.container}>
        <h2>Mixtape / LTM</h2>
        <div className={styles.currentMap}>
          Current Mode: <strong>{current.eventName}</strong> — {current.map}
        </div>
        <div className={styles.remainingTimer}>
          Remaining Time: {data.timerLtm}
        </div>
        <div className={styles.nextMap}>
          Next Mode: <strong>{next.eventName}</strong> — {next.map}
        </div>
      </div>

      <div className={styles.footer}>
        <h5>Data from https://apexlegendsstatus.com</h5>
      </div>
    </section>
  );
};

export default Mixtape;
