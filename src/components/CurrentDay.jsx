import { format } from 'date-fns';
import styles from './CurrentDay.module.scss';

function CurrentDay({ currentDate }) {
  const dayName = format(currentDate, 'EEEE').toUpperCase();
  const dayNumber = format(currentDate, 'd');

  return (
    <div className={styles.currentDay}>
      <div className={styles.dayName}>{dayName}</div>
      <div className={styles.dayNumber}>{dayNumber}</div>
    </div>
  );
}

export default CurrentDay;
