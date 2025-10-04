import styles from './Days.module.scss';

function Day({ date, isToday }) {
  return <div className={`${styles.dateStyle} ${isToday ? styles.today : ''}`}>{date || ''}</div>;
}

export default Day;
