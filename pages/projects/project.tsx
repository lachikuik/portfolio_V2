"use client";
import styles from "@/pages/projects/project.module.css";

class Project {
    title: string;
    tech: string[];
    describe: string;
    image: string;
    linkName: string;

    constructor(title : string, tech : string[], describe : string, image : string , linkName : string) {
        this.title = title;
        this.tech = tech;
        this.describe = describe;
        this.image = image;
        this.linkName = linkName;
    }
}

function CreateProjectCard({ project }: { project: Project }){
    return(
        <div className={styles.projectCard}>
            <div>
                <img src={project.image} alt="Image du Projet"/>
                <div>
                    <h4>
                        {project.title}
                    </h4>
                    <ul>{project.tech.map(t => <li key={t}> {t} </li>)}</ul>
                </div>
            </div>
            <div>
                {project.describe}
            </div>
            <div>
                <div className="button">
                    <a href={"https://github.com/lachikuik/"+project.linkName } target="_blank"> Voir sur GitHub </a>
                </div>
            </div>
        </div>
    );
}

export default function RenderList() {

const Title = 'Mes projets'; 
const battleship = new Project("Battleship",["Javascript", "Html","CSS"], "Debuggage d'une bataille navale en utilisant javascript. Projet de groupe (2)", "/assets/project/Mybattleship.png", "Battleship");
const trp = new Project("Site Perso",["Javascript", "Html","CSS"], "Code d'un Site personnel de guide/stat d'une équipe Esport en utilisant javascript. Projet individuel", "/assets/project/therizporte.png", "Th-riz-porte-v1");
const my_spotify = new Project("My_Spotify",["React", "mySQL", "Javascript","CSS"], "Code d'un Spotify en utilisant React. Projet de groupe(3) en 2 jours", "/assets/project/Myspotify.png", "My_spotify");
const puissance4 = new Project("Puissance_4",["Javascript", "Html","CSS"], "Code d'un puissance 4 en utilisant javascript. Projet individuel", "/assets/project/Puissance4.png", "Puissance_4");
const my_cinema = new Project("My_cinema",["PHP", "mySQL", "Javascript", "Html","CSS"], "Code d'un site de gestion de cinéma en utilisant PHP/javascript/MySQL. Projet individuel", "/assets/project/Mycinema.png", "My_Cinema");
const my_app = new Project("My_app",["React Native", "CSS"], "Création d'une application mobile de création de deck yu gi oh en react native. Projet individuel", "/assets/project/Myapp.png", "myApp");
const my_scribblio = new Project("My_Scribblio",["Go", "Javascript", "Html","CSS"], "Création d'un scribblio en GO/JS. Projet individuel", "/assets/project/Myscribblio.png", "MyScribblio");
const html5_gaming = new Project("Html5_gaming",["Phaser", "Javascript", "Html","CSS"], "Création d'un tower defense en html5/js/phaser. Projet individuel", "/assets/project/Htmlgaming.png", "Html5-gaming");
const wacCraft = new Project("RPG_RoR", ["Ruby on rails", "mySQL", "CSS"], "Création d'un jeu de type Rpg médiéval en Ruby on rails. Projet de groupe (3)","/assets/project/WacCraft.png", "WacCraft");
const portfolio = new Project ("Portfolio", ["Next Js", "MongoDb", "CSS"], "Code de ce portfolio. Projet individuel",  "/assets/project/Portfolio.png", "Portfolio_v2");

const projectList = [trp, my_cinema, puissance4, battleship,  my_spotify, my_app, wacCraft, html5_gaming, my_scribblio, portfolio]; 

return(
    <div className={styles.projects}>
        <div>
            <h3>{Title}</h3>
        </div>
        <ul>{projectList.map(p => <li key={p.title} >{<CreateProjectCard project={p} />}</li>)}</ul>
    </div>);
}
    
