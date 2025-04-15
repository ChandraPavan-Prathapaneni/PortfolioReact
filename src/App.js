import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Career from "./pages/ExperienceAndEducation.jsx";
import Home from "./components/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import Projects from "./pages/Projects.jsx";
import SocialLinks from "./components/SocialLinks.jsx";
import TechStack from "./components/TeckStack.jsx";
import Footer from "./components/footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tech-stack" element={<TechStack />} />
      </Routes>
      <SocialLinks />
      <Footer />
    </Router>
  );
}

export default App;
