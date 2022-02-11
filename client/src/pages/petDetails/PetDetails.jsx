import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Navbar } from '../../components/navbar/Navbar';
import { Footer } from '../../components/footer/Footer';
import { ContactUsModal } from '../../components/contactUsModal/ContactUsModal';
import {
  Container,
  Desc,
  Image,
  Info,
  InfoDetail,
  InfoItem,
  InfoItems,
  InfoTitle,
  Wrapper,
} from './PetDetails.styled';
import { Button } from '../../components/styles/Button';
import { TitleLarge } from '../../components/styles/TitleLarge';

const PetDetails = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [pet, setPet] = useState({});
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getPet = async () => {
      try {
        const res = await axios.get(
          'http://localhost:5001/api/pets/find/' + id,
        );
        setPet(res.data);
      } catch (err) {}
    };
    getPet();
  }, [id]);

  const newDate = new Date(pet.updatedAt);

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Image src={pet.img} />
        <Info>
          <TitleLarge>{pet.name}</TitleLarge>
          <InfoItems>
            <InfoItem>
              <InfoTitle> LEEFTIJD</InfoTitle>
              <InfoDetail>{pet.age}</InfoDetail>
            </InfoItem>{' '}
            <InfoItem>
              <InfoTitle>GESLACHT</InfoTitle>
              <InfoDetail>{pet.gender}</InfoDetail>
            </InfoItem>
            {pet.size && (
              <InfoItem>
                <InfoTitle> FORMAAT</InfoTitle>
                <InfoDetail>{pet.size}</InfoDetail>
              </InfoItem>
            )}
            <InfoItem>
              <InfoTitle>LAATSTE UPDATE</InfoTitle>
              <InfoDetail>
                {newDate.getDate()} - {newDate.getMonth()} -{' '}
                {newDate.getFullYear()}
              </InfoDetail>
            </InfoItem>
          </InfoItems>
          <Desc>
            Wie valt er voor dit lieve maatje? Stuur een berichtje met motivatie
            en dan maken we een kennismakingsafspraak !
          </Desc>
          <Button
            onClick={() => {
              setOpenModal(true);
            }}
          >
            STUUR EEN BERICHT
          </Button>
          {openModal && <ContactUsModal closeModal={setOpenModal} />}
        </Info>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default PetDetails;
