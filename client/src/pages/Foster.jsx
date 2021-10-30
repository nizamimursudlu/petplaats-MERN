import { useEffect } from 'react';
import { Footer } from '../components/footer/Footer';
import { Navbar } from '../components/navbar/Navbar';
import { Container } from '../components/styles/Container';
import { Image } from '../components/styles/Image';
import { Paragraph } from '../components/styles/Paragraph';
import { TitleLarge } from '../components/styles/TitleLarge';
import foster from '../images/foster.jpeg';

export default function Foster() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <Container>
        <TitleLarge>FOSTER</TitleLarge>
        <Paragraph>
          Als je in Nederland of in Azerbeidzjan woont, kun je pleegouder worden
          voor onze geredde huisdieren. Tijdelijke opvang is een integraal
          onderdeel van ons internationale adoptieprogramma. We zoeken naar die
          families, die een tijdelijk thuis kunnen bieden voor aankomende dieren
          en ze kunnen voorbereiden op adoptie. We zoeken pleeggezinnen die
          dieren met weinig sociale vaardigheden, angstige dieren en dieren die
          misschien wat meer werk en aandacht nodig hebben, kunnen opnemen. Je
          hebt de unieke kans om onze geredde dieren persoonlijk te helpen en
          hun te leren mensen weer te vertrouwen.
        </Paragraph>

        <Image src={foster} />
      </Container>
      <Footer />
    </>
  );
}
