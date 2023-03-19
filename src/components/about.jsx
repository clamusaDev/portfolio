import styles from "../style/about.module.css";

// About me Componente
export function AboutMe(props) {
  return (
    <div>
      <div className={styles.containerMain}>
        <img
          className={styles.aboutBgImage}
          src={require(`../img/${props.imagenBg}.jpg`)}
          alt="About background"
        />
        <img
          className={styles.aboutDevImage}
          src={require(`../img/${props.imagenDev}.png`)}
          alt="About Developer"
          />

        <div className={styles.aboutContainer}>
          <p className="aboutName">
            Hello, I'm <br/>
            <span>{props.name}</span>
          </p>
          <p className={styles.aboutProfesion}>
            I'm a <span>{props.profesion}</span>
          </p>
          <p className={styles.aboutExperience}>
            I have more than<span>{props.experience}</span>
          </p>
          <p className={styles.aboutStack}>
            I'm <span>{props.stack}</span>
          </p>
          <p className={styles.aboutMaster}>
            I do <span>{props.master}</span>
          </p>
        </div>
      </div>
    </div>
  );
}


// Ver descripción que aparece en CV

// I am a computer programmer and systems analyst. I have
// more than 20 years of experience in the computer industry, currently i
// dedicate myself to the development of sites and applications web.
// At the moment i'm <span> Full Stack Development JUNIOR.<span/>
