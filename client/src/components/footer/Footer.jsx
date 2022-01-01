import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import PetsOutlinedIcon from '@material-ui/icons/PetsOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import {
  Container,
  Wrapper,
  Left,
  Logo,
  Desc,
  Right,
  ContactItem,
  Payment,
} from './Footer.styled';

export const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>
            <PetsOutlinedIcon /> PETPLAATS
          </Logo>
          <Desc>
            Stichting Baku Animal Rescue Society is door de belastingdienst
            aangemerkt als Algemeen Nut Beogende Instelling (ANBI). Giften zijn
            daarom onder voorwaarden aftrekbaar van de inkomstenbelasting (voor
            particulieren) en vennootschapsbelasting (voor bedrijven).
          </Desc>
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
