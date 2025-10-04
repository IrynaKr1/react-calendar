import styles from './Days.module.scss';

function Day({ date, isToday }) {
  return <div className={styles.dateStyle}>{date}</div>;
}

export default Day;
