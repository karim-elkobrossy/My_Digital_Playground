import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard.jsx';

function ProjectCategory({ category }) {
  return (
    <section id={category.id} className="project-category">
      <div className="project-category__header">
        <p className="project-category__eyebrow">{category.subtitle}</p>
        <h2>{category.title}</h2>
      </div>
      <div className="project-category__grid">
        {category.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

ProjectCategory.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    projects: PropTypes.arrayOf(PropTypes.object).isRequired
  }).isRequired
};

export default ProjectCategory;
