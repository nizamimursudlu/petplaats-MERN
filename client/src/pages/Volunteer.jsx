import { useEffect } from 'react';
import { Footer } from '../components/footer/Footer';
import { Navbar } from '../components/navbar/Navbar';
import { Container } from '../components/styles/Container';
import { Image } from '../components/styles/Image';
import { Paragraph } from '../components/styles/Paragraph';
import { TitleLarge } from '../components/styles/TitleLarge';
import { TitleMiddle } from '../components/styles/TitleMiddle';
import vluchtmaatje from '../images/vluchtmaatje.jpeg';

export default function Volunteer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <Container>
        <TitleLarge>VOLUNTEER</TitleLarge>

        <TitleMiddle>Word een vluchtmaatje</TitleMiddle>
        <Paragraph>
          We zijn altijd op zoek naar vluchtmaatjes die een hond/kat naar zijn
          nieuwe thuis kunnen brengen. Als u vanuit Azerbeidzjan of Georgië naar
          Nederland vliegt, kunt u een vluchtmaatje worden! Het kost niet veel
          moeite, maar het zal ons veel helpen.
        </Paragraph>
        <Paragraph>
          Wat betekent het om een ​​vluchtmaatje te zijn? Een vluchtmaatje is
          iemand die een hond/kat als begeleide bagage naar zijn nieuwe thuis
          brengt. Het enige wat u hoeft te doen is het hoopvolle huisdier en
          zijn redder op de luchthaven te laten ontmoeten. Het papierwerk en de
          betaling zullen worden vooraf in orde gemaakt zonder enige kosten of
          inspanning van u. Uw buddy vliegt met u mee op uw bagageticket.
        </Paragraph>
        <Paragraph>
          Overweeg om een vluchtmaatje te worden en een hond/kat te helpen een
          nieuw leven in een nieuw huis te beginnen! Neem contact met ons op
          voor meer informatie.
        </Paragraph>
        <Image src={vluchtmaatje} />
        <TitleMiddle>Word ambassadeur van BARS</TitleMiddle>
        <Paragraph>
          Ben je enthousiast om ons te helpen bij het vinden van families voor
          onze honden in jouw land (EU, VK, VS)? Word ambassadeur, vertel
          anderen over BARS-dieren en zoek naar liefdevolle tehuizen voor onze
          huisdieren! Maak deel uit van onze BARS-familie!
        </Paragraph>
        <TitleMiddle>Vrijwilliger</TitleMiddle>
        <Paragraph>
          We hebben altijd behoefte aan vrijwilligers die ons op verschillende
          manieren kunnen helpen. Grafisch ontwerp, sociale media, organisatie
          van liefdadigheidsevenementen, fondsenwerving, het vervoer van de
          honden met de auto binnen Nederland en EU-landen, het aanbevelen van
          ons goede doel. Word lid van de BARS-familie!
        </Paragraph>
      </Container>
      <Footer />
    </>
  );
}
