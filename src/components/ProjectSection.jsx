import ProjectCard from './ProjectCard.jsx';

const ProjectSection = ({ group, anchor }) => {
  const sectionId = anchor ?? group.id;

  return (
    <section className="section" id={sectionId} aria-labelledby={`${sectionId}-heading`}>
      <div className="section__header">
        {group.accent && <span className="section__eyebrow">{group.accent}</span>}
        <h2 id={`${sectionId}-heading`} className="section__title">
          {group.title}
        </h2>
        {group.subtitle && <p className="section__subtitle">{group.subtitle}</p>}
      </div>
      <div className="project-grid">
        {group.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
