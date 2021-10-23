import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ContactUsModal } from '../components/ContactUsModal';
import { Button } from '../components/styles/ContactUs.styled';

const Container = styled.div`
  width: 100vw;
`;
const Wrapper = styled.div`
  padding: 70px;
  display: flex;

  align-items: center;
`;
const Image = styled.img`
  width: 50%;
`;
const Title = styled.h1`
  font-size: 45px;
  padding: 0px 0px 50px 10px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 20px;
`;

const InfoItems = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-top: solid 1px lightgray;
  border-bottom: solid 1px lightgray;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoTitle = styled.h3`
  font-size: 25px;
  padding: 10px;
`;

const InfoDetail = styled.p`
  text-transform: capitalize;
  font-size: 20px;
  padding: 10px;
`;

const Desc = styled.p`
  font-size: 20px;
  padding: 40px 10px;
  letter-spacing: 0.5px;
`;

export const PetDetails = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [pet, setPet] = useState({});
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const getPet = async () => {
      try {
        const res = await axios.get(
          'http://localhost:5000/api/pets/find/' + id,
        );
        setPet(res.data);
      } catch (err) {}
    };
    getPet();
  }, [id]);

  var newDate = new Date(pet.updatedAt);
  console.log(newDate.getDate(), newDate.getMonth(), newDate.getYear());

  return (
    <Container>
      <Navbar />

      <Wrapper>
        <Image src={pet.img} />
        <Info>
          <Title>{pet.name}</Title>
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
            Wie valt voor deze lieve slungel? Stuur een berichtje met motivatie
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
