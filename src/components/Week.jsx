import Day from './Day';

function Week({ days }) {
  return (
    <div>
      {days.map((day) => (
        <Day key={day} date={day} />
      ))}
    </div>
  );
}

export default Week;
