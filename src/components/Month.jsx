import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  format,
} from 'date-fns';
import Head from './Head';
import TableHeader from './TableHeader';
import Week from './Week';
import styles from './Month.module.scss';

function Month({ currentDate, displayDate }) {
  const monthStart = startOfMonth(displayDate);
  const monthEnd = endOfMonth(displayDate);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const weeks = [];
  let day = startDate;

  while (day <= endDate) {
    const days = [];
    for (let i = 0; i < 7; i++) {
      days.push(day);
      day = addDays(day, 1);
    }
    weeks.push(days);
  }

  const monthName = format(displayDate, 'MMMM').toUpperCase();
  const year = format(displayDate, 'yyyy');

  return (
    <div className={styles.month}>
      <Head month={monthName} year={year} />
      <div className={styles.calendarGrid}>
        <TableHeader />
        {weeks.map((weekDays, index) => (
          <Week
            key={index}
            days={weekDays}
            currentDate={currentDate}
            displayMonth={displayDate}
          />
        ))}
      </div>
    </div>
  );
}

export default Month;
