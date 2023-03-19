import styles from "../style/navbar.module.css";

export function NavBar({ iconNavBar, textIcon }) {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.iconsB}>{iconNavBar}</div>
      <div className={styles.text}>{textIcon}</div>
    </div>
  );
}
