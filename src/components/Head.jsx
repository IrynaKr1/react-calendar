import styles from './Head.module.scss';

function Head({ month, year }) {
  return (
    <div className={styles.monthHeader}>
      <h2>
        {month} {year}
      </h2>
    </div>
  );
}
export default Head;
