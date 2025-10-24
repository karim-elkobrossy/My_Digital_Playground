import { profile } from '../data/portfolio.js';

const Footer = () => {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} <span>{profile.name}</span>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
