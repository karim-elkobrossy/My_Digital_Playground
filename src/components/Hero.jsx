import PropTypes from 'prop-types';

function Hero({ content }) {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__text">
          <span className="hero__eyebrow">Digital Playground</span>
          <h1>{content.headline}</h1>
          <p className="hero__subheading">{content.subheading}</p>
          <p className="hero__highlight">{content.highlight}</p>
          <div className="hero__actions">
            <a className="button button--primary" href={content.linkedin} target="_blank" rel="noreferrer">
              Connect on LinkedIn
            </a>
            <a className="button button--ghost" href="#projects">
              Explore projects
            </a>
          </div>
        </div>
        <div className="hero__portrait">
          <div className="hero__portrait-frame">
            <img src={content.portrait} alt={`Portrait of ${content.name}`} loading="lazy" />
          </div>
          <figcaption>{content.name}</figcaption>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = {
  content: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    subheading: PropTypes.string.isRequired,
    highlight: PropTypes.string.isRequired,
    portrait: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired
  }).isRequired
};

export default Hero;
