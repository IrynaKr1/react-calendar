import styles from './Days.module.scss';

function Day({ date }) {
  return <div className={styles.dateStyle}>{date}</div>;
}

export default Day;
