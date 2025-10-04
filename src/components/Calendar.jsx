import CurrentDay from './CurrentDay';
import Month from './Month';
import styles from './Calendar.module.scss';

function Calendar() {
  const currentDate = new Date();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.calendar}>
          <CurrentDay currentDate={currentDate} />
          <Month currentDate={currentDate} displayDate={currentDate} />
        </div>
      </div>
    </>
  );
}

export default Calendar;
