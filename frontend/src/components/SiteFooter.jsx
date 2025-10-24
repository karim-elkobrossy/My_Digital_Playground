const currentYear = new Date().getFullYear();

const SiteFooter = () => {
  return (
    <footer className="site-footer">
      <p>&copy; {currentYear} Karim Elkobrossy. All rights reserved.</p>
    </footer>
  );
};

export default SiteFooter;
