import Hero from './components/Hero.jsx';
import ProjectSection from './components/ProjectSection.jsx';
import Footer from './components/Footer.jsx';
import { projectGroups } from './data/portfolio.js';

const App = () => {
  return (
    <div className="app-shell">
      <Hero />
      <main className="page-content">
        {projectGroups.map((group, index) => (
          <ProjectSection key={group.id} group={group} anchor={index === 0 ? 'projects' : undefined} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default App;
