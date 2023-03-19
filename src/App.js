// Imported styles
import styles from "./App.module.css";
// import "./style/header.module.css";

// External Imported
import { navbars } from "./external-file";

// Imports components
import { Header } from "./components/header.jsx";
import { NavBar } from "./components/navbar.jsx";
import { AboutMe } from "./components/about.jsx";

function App() {
  return (
  <>
    <div className={styles.App}>

    <Header className="bg-red-200" />
      <h2 className="text-gray-500">Probando texto</h2>
      <div className={styles.containerNavbar}>
        {navbars.map((navbar) => (
          <NavBar
          className={styles.icono}
          iconNavBar={navbar.iconImage}
          textIcon={navbar.iconText}
          />
          ))}
      </div>

      <div className={styles.containerAboutMe}>
        <AboutMe
          imagenBg="bg-14"
          imagenDev="dev04380380"
          name="Claudio Muñoz"
          profesion="Programmer Computer"
          experience="20 years of experience in the computer industry"
          stack="Frontend developer Junior"
          master="Full Stack Development JUNIOR"
          />
      </div>
    </div>
  </>
  );
}

export default App;

// src={props.imageBg} src2={props.imageDev} />