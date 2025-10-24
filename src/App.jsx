import Hero from './components/Hero.jsx';
import ProjectCategory from './components/ProjectCategory.jsx';
import Footer from './components/Footer.jsx';
import { heroContent, projectCategories, footerContent } from './data/projects.js';

function App() {
  return (
    <div className="app-shell">
      <header className="top-nav">
        <a href="#" className="brand">Karim Elkobrossy</a>
        <nav className="top-nav__links">
          <a href="#projects">Projects</a>
          <a href={heroContent.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </nav>
      </header>

      <main>
        <Hero content={heroContent} />
        <div id="projects" className="projects">
          {projectCategories.map((category) => (
            <ProjectCategory key={category.id} category={category} />
          ))}
        </div>
      </main>

      <Footer content={footerContent} />
    </div>
  );
}

export default App;
