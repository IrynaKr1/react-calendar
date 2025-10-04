import styles from './CurrentDay.module.scss';

function CurrentDay({ dayName, dayNumber }) {
  return (
    <div className={styles.currentDay}>
      <div className={styles.dayName}>{dayName}</div>
      <div className={styles.dayNumber}>{dayNumber}</div>
    </div>
  );
}

export default CurrentDay;