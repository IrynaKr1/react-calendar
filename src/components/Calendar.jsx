// components/Calendar.js
import CurrentDay from './CurrentDay';
import Month from './Month';

function Calendar() {
  return (
    <div className='calendar'>
      <CurrentDay dayName='FRIDAY' dayNumber='31' />
      <Month />
    </div>
  );
}

export default Calendar;
