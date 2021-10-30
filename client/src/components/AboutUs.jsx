import { Container } from './styles/Container';
import { Paragraph } from './styles/Paragraph';
import { Video } from './styles/Video';
import { TitleLarge } from './styles/TitleLarge';
import { TitleMiddle } from './styles/TitleMiddle';

export const Bars = () => {
  return (
    <>
      <Container>
        <TitleLarge>OVER ONS</TitleLarge>
        <TitleMiddle>Onze missie en visie</TitleMiddle>
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
        <Paragraph>
          We hebben een hondenasiel met meer dan honderd geredde honden en
          werken volgens een ‘no-kill’ filosofie, wat betekent dat we geen
          dieren euthaniseren. Het runnen van een no-kill asiel is een uiterst
          uitdagende missie. Ons asiel ontvangt geen lokale, provinciale of
          federale financiering en is volledig afhankelijk van bijdragen van het
          publiek om zijn jaarlijkse operationele begroting te dekken. Adoptie
          is een tweede groot probleem voor ons omdat de lokale bevolking in
          Azerbeidzjan helaas niet de neiging heeft om asielhonden te adopteren.
          Geredde katten worden door onze vrijwilligers opgevoed. We streven
          ernaar om de geredde dieren een kans te geven om een ​​gelukkig,
          veilig leven te leiden en we geloven dat we samen ons doel kunnen
          bereiken en deze nobele activiteit kunnen voortzetten.
        </Paragraph>
        <Video
          src="https://player.vimeo.com/video/354170866"
          width="70%"
          height="460px"
          frameborder="0"
          allow="autoplay"
          allowfullscreen
          title="Bars"
        ></Video>
      </Container>
    </>
  );
};
