const SectionHeader = ({ eyebrow, title, description, accent }) => {
  return (
    <header className="section-header" style={{ '--accent-color': accent }}>
      {eyebrow && <span className="section-header__eyebrow">{eyebrow}</span>}
      <h2 className="section-header__title">{title}</h2>
      {description && <p className="section-header__description">{description}</p>}
    </header>
  );
};

export default SectionHeader;
