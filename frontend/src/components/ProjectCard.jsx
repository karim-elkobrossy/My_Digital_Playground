import { FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
  return (
    <article className="project-card">
      <div className="project-card__media">
        <img src={project.image} alt={project.title} loading="lazy" />
        {project.status && <span className="project-card__status">{project.status}</span>}
      </div>
      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__summary">{project.summary}</p>
        {project.description && <p className="project-card__description">{project.description}</p>}
        {project.highlights && (
          <ul className="project-card__highlights">
            {project.highlights.map((item) => (
              <li key={item.title}>
                <strong>{item.title}:</strong> {item.details}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="project-card__footer">
        {project.links?.map((link) => (
          <a key={link.url} href={link.url} className="project-card__link" target="_blank" rel="noreferrer">
            <span>{link.label}</span>
            <FiExternalLink aria-hidden="true" />
          </a>
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;
