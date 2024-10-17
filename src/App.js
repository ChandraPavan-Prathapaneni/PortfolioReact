import About from "./components/About";
import Contact from "./components/Contact";
import ExperienceAndEducation from "./components/ExperienceAndEducation.jsx";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects.jsx";
import SocialLinks from "./components/SocialLinks";
import TechStack from "./components/TeckStack";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <ExperienceAndEducation />
      <Projects />
      <TechStack />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
