import { getDate } from 'date-fns';
import styles from './Days.module.scss';

function Day({ date, isToday, isCurrentMonth }) {
  if (!date) {
    return <div className={styles.dateStyle}></div>;
  }

  return (
    <div 
      className={`${styles.dateStyle} ${isToday ? styles.today : ''} ${!isCurrentMonth ? styles.otherMonth : ''}`}
    >
      {getDate(date)}
    </div>
  );
}

export default Day;