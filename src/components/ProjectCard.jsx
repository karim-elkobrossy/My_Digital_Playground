const ProjectCard = ({ project }) => {
  const { title, status, image, imageAlt, description, highlights = [], links = [] } = project;

  return (
    <article className="project-card">
      {image && (
        <div className="project-card__media">
          <img src={image} alt={imageAlt ?? title} loading="lazy" />
        </div>
      )}
      <div className="project-card__body">
        {status && <span className="project-card__status">{status}</span>}
        <h3 className="project-card__title">{title}</h3>
        {description && <p className="project-card__description">{description}</p>}
        {highlights.length > 0 && (
          <div className="project-card__highlights">
            {highlights.map((highlight) => (
              <div className="highlight" key={`${project.id}-${highlight.label ?? highlight.detail}`}>
                {highlight.label && <span className="highlight__label">{highlight.label}</span>}
                {highlight.detail && <p className="highlight__detail">{highlight.detail}</p>}
                {highlight.bullets && (
                  <ul className="highlight__bullets">
                    {highlight.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
        {links.length > 0 && (
          <div className="project-card__links">
            {links.map((link) => (
              <a key={link.url} className="link-chip" href={link.url} target="_blank" rel="noreferrer noopener">
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
