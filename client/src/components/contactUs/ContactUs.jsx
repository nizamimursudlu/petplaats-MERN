import { useState } from 'react';
import contactUs from '../../images/contactUs.jpeg';
import { ContactUsModal } from '../contactUsModal/ContactUsModal';
import { Container } from '../styles/Container';
import { TitleLarge } from '../styles/TitleLarge';
import { Image } from '../styles/Image';
import { Button } from '../styles/Button';
import { Desc } from '../styles/Description';

export const ContactUs = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Container>
      <TitleLarge>NEEM CONTACT OP MET ONS</TitleLarge>
      <Desc>
        We stellen het zeer op prijs dat u de tijd neemt om contact op te nemen.
        Vul alstublieft het formulier in.
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
    </Container>
  );
};
