import { useEffect, useState } from 'react';
import { Footer } from '../../components/footer/Footer';
import { Navbar } from '../../components/navbar/Navbar';
import feed from '../../images/feed.png';
import deworm from '../../images/deworm.png';
import flea from '../../images/flea.png';
import vaccine from '../../images/vaccine.png';
import bill from '../../images/bill.png';
import maintenance from '../../images/maintenance.png';
import { Button } from '../../components/styles/Button';
import axios from 'axios';
import { useHistory } from 'react-router';
import StripeCheckout from 'react-stripe-checkout';
import {
  Body,
  CheckBox,
  CheckBoxes,
  CheckBoxesContainer,
  CheckBoxesTitle,
  Container,
  Desc,
  Image,
  Info,
  Label,
  Price,
  Summary,
  SummaryContainer,
  SummaryTitle,
  Wrapper,
} from './Donation.styled';
import { TitleLarge } from '../../components/styles/TitleLarge';
import { Paragraph } from '../../components/styles/Paragraph';

const KEY = process.env.REACT_APP_KEY;

const Donation = () => {
  const [sum, setSum] = useState(0);
  const [voerBox, setVoerBox] = useState(true);
  const [ontwormBox, setOntwormBox] = useState(true);
  const [vlooienBox, setVlooienBox] = useState(true);
  const [vaccinBox, setVaccinBox] = useState(true);
  const [rekeningenBox, setRekeningenBox] = useState(true);
  const [onderhoudBox, setOnderhoudBox] = useState(true);
  const history = useHistory();
  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = (e, value, setValue) => {
    setValue((v) => !v);
    value
      ? setSum((prev) => Number(prev) + Number(e.target.value))
      : setSum((prev) => Number(prev) - Number(e.target.value));
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        await axios.post('/api/checkout/payment', {
          tokenId: stripeToken.id,
          amount: sum * 100,
        });
        history.push('/');
      } catch (err) {
        console.log(err);
      }
    };
    sum && stripeToken && makeRequest();
  }, [stripeToken, history, sum]);

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <TitleLarge>DONATIES</TitleLarge>
        <Paragraph>
          Wij zijn een non-profitorganisatie wiens missie het is om dieren in
          nood te redden en ze in permanente, liefdevolle huizen te plaatsen. We
          worden niet gesubsidieerd door de overheid of andere bedrijven en zijn
          daarom uitsluitend afhankelijk van donaties van aardige mensen.
        </Paragraph>
        <Body>
          <CheckBoxesContainer>
            <CheckBoxesTitle>Kies basisbehoeften</CheckBoxesTitle>
            <CheckBoxes>
              <CheckBox>
                <input
                  type="checkbox"
                  name="voer"
                  value="22"
                  onClick={(e) => handleClick(e, voerBox, setVoerBox)}
                />
                <Info>
                  <Image src={feed} />
                  <Label>Voer</Label>
                  <Desc>1 hond voor 1 maand</Desc>
                  <Price>22 €</Price>
                </Info>
              </CheckBox>
              <CheckBox>
                <input
                  type="checkbox"
                  // id="horns"
                  name="ontworm"
                  value="10"
                  onClick={(e) => handleClick(e, ontwormBox, setOntwormBox)}
                />
                <Info>
                  <Image src={deworm} />
                  <Label>Ontworm</Label>
                  <Desc>1 dog for 3 months</Desc>
                  <Price>10 €</Price>
                </Info>
              </CheckBox>
              <CheckBox>
                <input
                  type="checkbox"
                  name="vlooien"
                  value="30"
                  onClick={(e) => handleClick(e, vlooienBox, setVlooienBox)}
                />
                <Info>
                  <Image src={flea} />
                  <Label>Vlooien- en tekenbehandeling</Label>
                  <Desc>1 dog for 3 months</Desc>
                  <Price>30 €</Price>
                </Info>
              </CheckBox>
              <CheckBox>
                <input
                  type="checkbox"
                  name="ontworm"
                  value="40"
                  onClick={(e) => handleClick(e, vaccinBox, setVaccinBox)}
                />

                <Info>
                  <Image src={vaccine} />
                  <Label>Vaccin</Label>
                  <Desc>Betal voor vaccinatie van 1 hond</Desc>
                  <Price>40 €</Price>
                </Info>
              </CheckBox>{' '}
              <CheckBox>
                <input
                  type="checkbox"
                  name="rekeningen"
                  value="50"
                  onClick={(e) =>
                    handleClick(e, rekeningenBox, setRekeningenBox)
                  }
                />
                <Info>
                  <Image src={bill} />
                  <Label>Rekeningen</Label>
                  <Desc>Gas, water, elektriciteit voor 1 maand</Desc>
                  <Price>50 €</Price>
                </Info>
              </CheckBox>
              <CheckBox>
                <input
                  type="checkbox"
                  name="OnderhoudVanAsiel"
                  value="50"
                  onClick={(e) => handleClick(e, onderhoudBox, setOnderhoudBox)}
                />
                <Info>
                  <Image src={maintenance} />
                  <Label>Onderhoud van asiel</Label>
                  <Desc>
                    Reparatie van kennels en verbetering van de
                    levensomstandigheden
                  </Desc>
                  <Price>50 €</Price>
                </Info>
              </CheckBox>
            </CheckBoxes>
          </CheckBoxesContainer>
          <SummaryContainer>
            <SummaryTitle>Uw donatiebedrag:</SummaryTitle>
            <Summary>{sum} €</Summary>
            <StripeCheckout
              name="Pet Plaats"
              image="https://img.pixers.pics/pho_wat(s3:700/FO/44/31/50/80/700_FO44315080_f5c5231f71619a1c807535dffea670e3.jpg,467,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,247,650,jpg)/fotobehang-schattige-golden-retriever-puppy-zitten.jpg.jpg"
              amount={sum * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>Chechout</Button>
            </StripeCheckout>
          </SummaryContainer>
        </Body>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Donation;
