import { Footer } from '../components/footer/Footer';
import { Navbar } from '../components/navbar/Navbar';
import { Container } from '../components/styles/Container';
import { Image } from '../components/styles/Image';
import { Paragraph } from '../components/styles/Paragraph';
import AboutUsPuppy from '../images/aboutUsPuppy.jpeg';
import AboutUsCat from '../images/aboutUsCat.jpeg';
import { UnorderedList } from '../components/styles/UnorderedList';
import { ListItem } from '../components/styles/ListItem';
import { useEffect } from 'react';
import { TitleLarge } from '../components/styles/TitleLarge';
import { TitleSmall } from '../components/styles/TitleSmall';

export const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <Container>
        <TitleLarge>WIE WE ZIJN</TitleLarge>
        <TitleSmall>Onze missie en visie</TitleSmall>
        <Paragraph>
          BARS is een non-profit dierenreddingsorganisatie die in Nederland is
          geregistreerd en het leven redt van straathonden en -katten en andere
          verwaarloosde dieren uit Azerbeidzjan. Wij zijn dierenliefhebbers die
          niet onverschillig kunnen blijven voor de ellende van dakloze dieren
          die op straat verhongeren en worden mishandeld of gedood door wrede
          mensen. Onze missie is om van deze wereld een betere plek te maken
          waar alle levens worden gewaardeerd en gerespecteerd. Ons doel is om
          wreedheid te beëindigen en vriendelijkheid voor dieren te bevorderen
          en hun lijden te verlichten.
        </Paragraph>
        <Image src={AboutUsPuppy} />
        <Paragraph>
          We hebben een hondenasiel met 120 geredde honden en werken volgens een
          ‘no-kill’ filosofie, wat betekent dat we geen dieren euthaniseren. Het
          runnen van een no-kill asiel is een uiterst uitdagende missie. Ons
          asiel ontvangt geen lokale, provinciale of federale financiering en is
          volledig afhankelijk van bijdragen van het publiek om zijn jaarlijkse
          operationele begroting te dekken. Adoptie is een tweede groot probleem
          voor ons omdat de lokale bevolking in Azerbeidzjan helaas niet de
          neiging heeft om asielhonden te adopteren. Geredde katten worden door
          onze vrijwilligers opgevoed. We streven ernaar om de geredde dieren
          een kans te geven om een gelukkig, veilig leven te leiden en we
          geloven dat we samen ons doel kunnen bereiken en deze nobele
          activiteit kunnen voortzetten.
        </Paragraph>
        <Image src={AboutUsCat} />
        <TitleSmall>Onze doelen:</TitleSmall>

        <UnorderedList>
          <ListItem>
            liefdevolle families voor de geredde dieren uit Azerbeidzjan in
            Nederland te vinden
          </ListItem>
          <ListItem>
            de levensomstandigheden van verwaarloosde en mishandelde dieren te
            verbeteren
          </ListItem>
          <ListItem>
            bewustzijn te creëren voor de noodzaak om dieren te beschermen en
            hun welzijn en gezondheid te bevorderen
          </ListItem>
        </UnorderedList>

        <TitleSmall>Ons team:</TitleSmall>
        <Paragraph>
          BARS is een grote en vriendelijke familie van mensen die een groot
          deel van hun leven wijden aan het redden van dieren. We hebben leden
          in Nederland en Azerbeidzjan. We registreerden ons eerste goede doel
          in Baku, Azerbeidzjan in 2012. Later, in 2019, werd Stichting Baku
          Animal Rescue Society geregistreerd in Amsterdam, Nederland.
        </Paragraph>
      </Container>
      <Footer />
    </>
  );
};
