import styles from './Header.module.scss';
import border_b from '../../assets/border-b.png'
import border_s from '../../assets/border-s.png'

export const Header = ({ }) => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <a href='#' className={styles.text}>Golden Hive Honey</a>
    </div>
    <div className={styles.menu}>
      <img className={styles.border} src={border_b} />
      <span className={styles.text}>Home</span>
      <span className={styles.text}>Home</span>
      <span className={styles.text}>Home</span>
    </div>
    <div className={styles.login}>
      <div className={styles.btn}>
        <img className={styles.border} src={border_s} />
        <a href='#' className={styles.text}>Sign In</a>
      </div>
      <div className={styles.btn}>
        <img className={styles.border} src={border_s} />
        <a href='#' className={styles.text}>Sign Up</a>
      </div>
    </div>
  </header>
);
