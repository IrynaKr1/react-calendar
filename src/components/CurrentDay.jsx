function CurrentDate({ dayName, dayNumber }) {
  return (
    <div className="current-date">
      <div className="day-name">{dayName}</div>
      <div className="day-number">{dayNumber}</div>
    </div>
  );
}

export default CurrentDate;