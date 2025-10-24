import { heroContent } from '../data/content';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__text">
          <p className="hero__eyebrow">{heroContent.tagline}</p>
          <h1 className="hero__headline">{heroContent.headline}</h1>
          <div className="hero__description">
            {heroContent.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="hero__cta">
            {heroContent.socialLinks.map((link) => (
              <a key={link.url} href={link.url} className="button button--primary" target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="hero__media">
          <div className="hero__portrait">
            <img src={heroContent.profileImage} alt={heroContent.name} />
            <div className="hero__nameplate">
              <span>{heroContent.name}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
