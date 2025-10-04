import Day from './Day';
import styles from './Week.module.scss';

function Week({ days, todayDate }) {
  return (
    <div className={styles.weekStyle}>
      {days.map((day, index) => (
        <Day key={index} date={day} isToday={day === todayDate} />
      ))}
    </div>
  );
}

export default Week;
