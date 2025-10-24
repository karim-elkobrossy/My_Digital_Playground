import PropTypes from 'prop-types';

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__media">
        <img src={project.image} alt={project.title} loading="lazy" />
      </div>
      <div className="project-card__body">
        <div className="project-card__header">
          <h3>{project.title}</h3>
          {project.status && <span className="project-card__status">{project.status}</span>}
        </div>
        <p className="project-card__summary">{project.summary}</p>
        {project.highlights && project.highlights.length > 0 && (
          <ul className="project-card__list">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        <div className="project-card__links">
          {project.links.map((link) => (
            <a key={link.href} className="chip" href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    status: PropTypes.string,
    image: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string),
    links: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
};

export default ProjectCard;
