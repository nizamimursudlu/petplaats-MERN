import { Container, Image, Title } from './Header.styles';
import image from '../../images/boy-jack-russel.jpeg';

export const Header = () => {
  return (
    <Container>
      <Image src={image} />
      <Title>WIJ SPREKEN VOOR DEGENEN DIE GEEN STEM HEBBEN</Title>
    </Container>
  );
};
