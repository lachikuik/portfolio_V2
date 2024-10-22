"use client";
import styles from "@/pages/aboutMe/aboutMe.module.css";

export default function AboutMe (){
    return (
        <section id="about">
          <div className={styles.aboutMe}>
            <div className={styles.photo}>
              <img src="/assets/avatar/P_20241020_155224.jpg" alt="Photo"></img>
            </div>
            <div className={styles.describe}>
              <h5>
                Bonjour, moi c'est Pierre Palmer.
                Etudiant en développement-Web à la Web@cadémie by Epitech et alternant en développement de jeu vidéo pour l'entreprise individuelle R-Co
              </h5>
              <p>
                Actuellement étudiant à la Web@cademie, ainsi que alternant dans un projet de création d'un jeu vidéo en godot4/C# depuis 1 an.
                J'ai toujours eu à cœur d'aider les autres, l'informatique est un domaine permettant de créer des outils facilitant le travail des autres et qui s'est révélé être passionnant pour moi. C'est pour cette raison que j'ai décidé de m'y reconvertir.
              </p>
              <div>
                <p> A propos de moi :</p>
                <p> Je suis passionné d'informatique, de musique, et de jeux vidéo. Aujourd'hui je réalise des sites dans le cadre de ma formation, un jeu dans le cadre de mon alternance, et dans une optique plus personnelle pour mon équipe Esport que je dirige depuis 2019. </p>
              </div>
            </div>
          </div>
          <div className={styles.buttons}>
            <div className="button">
              <a href="https://www.linkedin.com/in/pierre-palmer-37b10127a/" target="_blank"> Mon linkedin </a>
            </div>
            <div className="button">
              <a href="https://github.com/lachikuik" target="_blank"> Mon GitHub </a>
            </div>
            <div className="button">
              <a href="/assets/CV/CV_Pierre_Palmer.pdf" download="CV_Pierre_Palmer.pdf">
                Mon CV
              </a>
            </div>
            <div className={styles.contact}>
              <div>pierre.palmer@epitech.eu</div>
              <div>06 31 50 16 01</div>
            </div>
          </div>
        </section>
      );
}