import PropTypes from 'prop-types';
import styles from './CircularTimer.module.css';

const CircularTimer = ({ totalSeconds, currentSeconds }) => {
  const total = Math.max(1, Math.floor(totalSeconds || 0));
  const current = Math.max(0, Math.floor(currentSeconds || 0));
  const progress = current / total;

  // Cuando queda menos del 30%, cambia a rojo
  const strokeColor = progress <= 0.3 ? '#ff0000' : '#00d4aa';

  const hours = Math.floor(current / 3600);
  const minutes = Math.floor((current % 3600) / 60);
  const secs = current % 60;

  const timeDisplay = hours > 0
    ? `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
    : `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  const r = 90;
  const circumference = 2 * Math.PI * r;
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <div className={styles.timerContainer}>
      <svg viewBox="0 0 200 200" className={styles.svg}>
        <circle cx="100" cy="100" r={r} className={styles.bgCircle} />
        <circle
          cx="100"
          cy="100"
          r={r}
          className={styles.progressCircle}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          stroke={strokeColor}
        />
      </svg>
      <div className={styles.timeDisplay}>
        <div className={styles.timer}>{timeDisplay}</div>
      </div>
    </div>
  );
};

CircularTimer.propTypes = {
  totalSeconds: PropTypes.number.isRequired,
  currentSeconds: PropTypes.number.isRequired,
};

export default CircularTimer;