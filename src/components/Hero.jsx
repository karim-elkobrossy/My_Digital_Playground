import { profile } from "../data/portfolio.js";

const Hero = () => {
  return (
    <header className="hero" id="hero" aria-labelledby="hero-heading">
      <div className="hero__content">
        <span className="hero__role">{profile.role}</span>
        <h1 id="hero-heading" className="hero__headline">
          {profile.headline}
        </h1>
        <div className="hero__statements">
          {profile.statements.map((statement) => (
            <p key={statement}>{statement}</p>
          ))}
        </div>
        <div className="hero__actions">
          {profile.socialLinks.map((link) => (
            <a
              key={link.url}
              className="button button--primary"
              href={link.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              {link.label}
            </a>
          ))}
          <a
            className="button button--ghost"
            href="#open-source-research"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("open-source-research");
              if (element) {
                const navHeight = 70;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition =
                  elementPosition + window.pageYOffset - navHeight;
                window.scrollTo({
                  top: Math.max(0, offsetPosition),
                  behavior: "smooth",
                });
              }
            }}
          >
            Explore projects
          </a>
        </div>
      </div>
      <div className="hero__avatar-wrapper">
        <img className="hero__avatar" src={profile.avatar} alt={profile.name} />
      </div>
    </header>
  );
};

export default Hero;
