import contactUs from '../contactUs.jpeg';
import {
  Container,
  Wrapper,
  Header,
  Desc,
  Image,
  Button,
} from './styles/ContactUs.styled';

export const ContactUs = () => {
  return (
    <Container>
      <Wrapper>
        <Header>NEEM CONTACT OP MET ONS</Header>
        <Desc>
          We stellen het zeer op prijs dat u de tijd neemt om contact op te
          nemen. Vul alstublieft het formulier in.
        </Desc>
        <Image src={contactUs} />
        <Button>STUUR EEN BERICHT</Button>
      </Wrapper>
    </Container>
  );
};
