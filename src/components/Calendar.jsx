import CurrentDay from './CurrentDay';
import Month from './Month';
import styles from './Calendar.module.scss';

function Calendar() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.calendar}>
          <CurrentDay dayName='FRIDAY' dayNumber='31' />
          <Month />
        </div>
      </div>
    </>
  );
}

export default Calendar;
