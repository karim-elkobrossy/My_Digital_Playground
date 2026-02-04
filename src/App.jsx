import Hero from "./components/Hero.jsx";
import Navigation from "./components/Navigation.jsx";
import ProjectSection from "./components/ProjectSection.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";
import { projectGroups } from "./data/portfolio.js";

const App = () => {
  return (
    <div className="app-shell">
      <Navigation />
      <Hero />
      <main className="page-content">
        {projectGroups.map((group) => (
          <ProjectSection key={group.id} group={group} />
        ))}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;
