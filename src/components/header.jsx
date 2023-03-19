import styles from "../style/header.module.css";

// import { GiHamburgerMenu } from "react-icons/gi";

// export function Header() {
export function Header() {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.hamburgerContainer}>
        </div>

        <div className={styles.headerDescription}>
          <h1 className={styles.titleHeader}>Front-end Developer</h1>
          <p className={styles.paragraphHeader}>
            Master in Spain Full Stack Development
          </p>
        </div>
      </div>
    </>
  );
}
/* <GiHamburgerMenu className={styles.menuHamburger} /> */
