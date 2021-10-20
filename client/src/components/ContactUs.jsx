import { useState } from 'react';
import contactUs from '../images/contactUs.jpeg';
import { ContactUsModal } from './ContactUsModal';
// import { ContactUsModal } from './ContactUsModal';
import {
  Container,
  Wrapper,
  Header,
  Desc,
  Image,
  Button,
} from './styles/ContactUs.styled';

export const ContactUs = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Container>
      <Wrapper>
        <Header>NEEM CONTACT OP MET ONS</Header>
        <Desc>
          We stellen het zeer op prijs dat u de tijd neemt om contact op te
          nemen. Vul alstublieft het formulier in.
        </Desc>
        <Image src={contactUs} />
        <Button
          onClick={() => {
            setOpenModal(true);
          }}
        >
          STUUR EEN BERICHT
        </Button>
        {openModal && <ContactUsModal closeModal={setOpenModal} />}
      </Wrapper>
    </Container>
  );
};
