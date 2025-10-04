import { isSameDay, isSameMonth } from 'date-fns';
import Day from './Day';
import styles from './Week.module.scss';

function Week({ days, currentDate, displayMonth }) {
  return (
    <div className={styles.weekStyle}>
      {days.map((day, index) => (
        <Day
          key={index}
          date={day}
          isToday={day ? isSameDay(day, currentDate) : false}
          isCurrentMonth={day ? isSameMonth(day, displayMonth) : true}
        />
      ))}
    </div>
  );
}

export default Week;
