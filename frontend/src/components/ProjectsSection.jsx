import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';

const ProjectsSection = ({ categories }) => {
  return (
    <section className="projects" id="projects">
      {categories.map((category) => (
        <div key={category.id} className="projects__category">
          <SectionHeader
            eyebrow="Portfolio Focus"
            title={category.title}
            accent={category.accent}
            description={category.description}
          />
          <div className="projects__grid">
            {category.projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProjectsSection;
