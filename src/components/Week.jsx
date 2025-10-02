import Day from './Day';
import styles from './Week.module.scss';

function Week({ days }) {
  return (
    <div className={styles.weekStyle}>
      {days.map((day) => (
        <Day key={day} date={day} />
      ))}
    </div>
  );
}

export default Week;
