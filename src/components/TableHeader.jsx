import styles from './TabHeader.module.scss';

function TableHeader() {
  return (
    <div className={styles.headerStyles}>
      <div>S</div>
      <div>M</div>
      <div>T</div>
      <div>W</div>
      <div>T</div>
      <div>F</div>
      <div>S</div>
    </div>
  );
}

export default TableHeader;
