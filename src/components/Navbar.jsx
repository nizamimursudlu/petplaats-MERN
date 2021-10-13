import PetsOutlinedIcon from '@material-ui/icons/PetsOutlined';
import { useState } from 'react';
import {
  Container,
  Wrapper,
  Left,
  Logo,
  Center,
  Right,
  Register,
  Login,
} from './styles/Navbar.styled';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <Container isScrolled={isScrolled}>
      <Wrapper>
        <Left>
          <PetsOutlinedIcon />
          <Logo>PETPLAATS</Logo>
        </Left>
        <Center>MAYBE SOMETHING ELSE</Center>
        <Right>
          <Register>REGISTER</Register>
          <Login>LOGIN</Login>
        </Right>
      </Wrapper>
    </Container>
  );
};
