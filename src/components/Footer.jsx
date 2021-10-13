import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import PetsOutlinedIcon from '@material-ui/icons/PetsOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import {
  Container,
  Title,
  Line,
  Wrapper,
  Left,
  Logo,
  Desc,
  Button,
  Right,
  ContactItem,
  Payment,
} from './styles/Footer.styled';

export const Footer = () => {
  return (
    <Container>
      <Title>Contacts</Title>
      <Line />
      <Wrapper>
        <Left>
          <Logo>
            <PetsOutlinedIcon /> PETPLAATS
          </Logo>
          <Desc>
            If you have any questions, email us by clicking the button below. We
            will contact you shortly.
          </Desc>
          <Button>Ask a question</Button>
        </Left>
        <Right>
          <ContactItem>
            <RoomIcon style={{ marginRight: '10px' }} />
            ANIMAL RESCUE SOCIETY <br />
            Amsterdam, The Netherlands.
          </ContactItem>
          <ContactItem>
            <PhoneIcon style={{ marginRight: '10px' }} />
            +31 6 52 52 03 06
          </ContactItem>
          <ContactItem>
            <MailOutlineOutlinedIcon style={{ marginRight: '10px' }} />
            info@petplaats.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Wrapper>
    </Container>
  );
};
