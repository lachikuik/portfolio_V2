import AboutMe from "./aboutMe/aboutMe";
import RenderList from "./projects/project"
import Navbar from "./nav/navbar";
import Comment from "./comment/comment";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="content">
        <div id="aboutMe">
          <AboutMe/>
        </div>
        <div id="projects">
          <RenderList/>
        </div>
        <div id="comments">
        <Comment/>
        </div>
      </div>
    </div>
  );
}