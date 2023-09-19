import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { ThemeContext } from '../../context/ThemeContext';

const CustomNavbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <Navbar bg={theme === 'light' ? 'light' : 'dark'} variant={theme === 'light' ? 'light' : 'dark'} expand="lg">
      <Navbar.Brand as={Link} to="/">
        <img
          src="data:image/png;base64,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"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Logo"
        />
        React Blog
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/blog">
            Blog
          </Nav.Link>
          <Nav.Link onClick={handleThemeToggle}>
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
