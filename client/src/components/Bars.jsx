import {
  Container,
  Left,
  Wrapper,
  Right,
  Desc,
  Button,
  Title,
} from './styles/Bars.styled';

export const Bars = () => {
  return (
    <Container>
      <Left />
      <Wrapper>
        <Right>
          <Title>BARS</Title>
          <Desc>
            BARS is een non-profit dierenreddingsorganisatie die in Nederland is
            geregistreerd en het leven redt van straathonden en -katten en
            andere verwaarloosde dieren uit Azerbeidzjan. Wij zijn
            dierenliefhebbers die niet onverschillig kunnen blijven voor de
            ellende van dakloze dieren die op straat verhongeren en worden
            mishandeld of gedood door wrede mensen. Onze missie is om van deze
            wereld een betere plek te maken waar alle levens worden gewaardeerd
            en gerespecteerd. Ons doel is om wreedheid te beëindigen en
            vriendelijkheid voor dieren te bevorderen en hun lijden te
            verlichten.
          </Desc>
          <Button>DONEREN</Button>
        </Right>
      </Wrapper>
    </Container>
  );
};
