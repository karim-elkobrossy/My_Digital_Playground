import PropTypes from 'prop-types';

function Footer({ content }) {
  return (
    <footer className="footer">
      <p>{content.copyright}</p>
    </footer>
  );
}

Footer.propTypes = {
  content: PropTypes.shape({
    copyright: PropTypes.string.isRequired
  }).isRequired
};

export default Footer;
