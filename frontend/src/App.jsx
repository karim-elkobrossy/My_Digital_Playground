import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import SiteFooter from './components/SiteFooter';
import { projectCategories } from './data/content';
import './App.css';

function App() {
  return (
    <div className="app">
      <Hero />
      <ProjectsSection categories={projectCategories} />
      <SiteFooter />
    </div>
  );
}

export default App;
