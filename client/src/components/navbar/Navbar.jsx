import PetsOutlinedIcon from '@material-ui/icons/PetsOutlined';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo, Hamburger, MenuItem, Container, Menu } from './Navbar.styles';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <Container isScrolled={isScrolled}>
      <Logo isScrolled={isScrolled}>
        <span>
          <PetsOutlinedIcon />
          <Link to={'/'}>
            <MenuItem isScrolled={isScrolled}>
              <h2>PETPLAATS</h2>
            </MenuItem>{' '}
          </Link>
        </span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)} isScrolled={isScrolled}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <Link to={'/adoption'}>
          <MenuItem isScrolled={isScrolled}>ADOPTIE</MenuItem>
        </Link>
        <Link to={'/about-us'}>
          <MenuItem isScrolled={isScrolled}>WIE WE ZIJN</MenuItem>
        </Link>
        <Link to={'/anbi'}>
          <MenuItem isScrolled={isScrolled}>ANBI</MenuItem>
        </Link>
      </Menu>
    </Container>
  );
};
