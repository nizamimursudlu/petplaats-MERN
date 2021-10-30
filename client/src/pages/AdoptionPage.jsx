import { Adoption } from '../components/adoption/Adoption';
import { Footer } from '../components/footer/Footer';
import { Navbar } from '../components/navbar/Navbar';
import { Container } from '../components/styles/Container';
import { Image } from '../components/styles/Image';
import { Paragraph } from '../components/styles/Paragraph';
import adoptionPuppies from '../images/adoption-puppies.webp';
import adoptionCat from '../images/adoption-cat.jpeg';
import { TitleSmall } from '../components/styles/TitleSmall';
import { useEffect } from 'react';

export const AdoptionPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <Adoption />
      <Container>
        <TitleSmall>Adoptie</TitleSmall>
        <Paragraph>
          Het is gemakkelijk om verliefd te worden op dieren in ons asiel, ze
          zijn allemaal lief. Maar dieren en adoptiefamilies kunnen
          verschillende behoeften hebben. Hier zijn een paar dingen om te
          overwegen bij het kiezen van je nieuwe familielid.
        </Paragraph>
        <Paragraph>
          Heb je ervaring met het hebben van een huisdier? Wil je een schoothond
          of een onafhankelijk dier? Heb je momenteel huisdieren? Kunnen ze
          overweg met andere dieren? Hoe lang blijft het huisdier alleen als je
          aan het werk bent? Ben je op zoek naar een actief huisdier of een dier
          om lekker mee op de bank te hangen? Wil je een kitten of puppy, of
          zoek je een volwassen dier? Heb je jonge kinderen in huis?
        </Paragraph>
        <Image src={adoptionCat} />
        <TitleSmall>Internationale adoptie</TitleSmall>
        <Paragraph>
          Het ontbreken van een adoptiecultuur in Azerbeidzjan maakt
          internationale adopties cruciaal voor het vinden van permanente huizen
          voor onze dieren. Momenteel zijn we gericht op het vinden van
          adoptiefamilies in Nederland die bereid zijn een liefdevol tehuis te
          bieden aan geredde dieren.
        </Paragraph>
        <Paragraph>
          Een internationale adoptieprocedure kost tijd, maar het is de moeite
          waard! Normaal duurt het 3 tot 4 maanden. Het kost geld om dieren van
          Azerbeidzjan naar Europa te brengen, daarom rekenen we adoptiekosten
          van € 250. Hiervan wordt het transport van een bloedmonster naar het
          laboratorium in Lelystad betaald voor rabiësanalyse (rabiësanalyse
          zelf € 50) en transport van de hond per vliegtuig (€ 50 – € 150
          afhankelijk van hun gewicht). We betalen ook quarantainekosten (€ 70
          per maand) en behandeling door de dierenarts (ontwormen € 10 met
          Drontal-pil, dubbele vaccinatie tegen hondsdolheid met
          Nobivac-vaccins, € 15 paspoort en certificaten van de dierenarts).
          Dezelfde procedure is van toepassing op katten. De adoptiekosten
          dekken slechts ongeveer de helft van onze uitgaven; om het tekort te
          dekken, zijn we afhankelijk van de donaties van gulle individuen die
          hun steentje willen bijdragen om ervoor te zorgen dat onze katten en
          honden de zorg krijgen die ze verdienen.
        </Paragraph>
        <Image src={adoptionPuppies} />
        <TitleSmall>Lange afstand adoptie</TitleSmall>
        <Paragraph>
          Onder de geredde dieren hebben we ook oude, zieke en getraumatiseerde
          honden met gedragsproblemen die speciale zorg nodig hebben. Als je, om
          welke reden dan ook, een hond niet kunt adopteren maar wilt helpen, is
          adoptie op lange afstand een perfecte match voor jou. Je kunt een hond
          op afstand adopteren en maandelijks zijn behoeften sponsoren. Elke 2
          maanden ontvang je een rapport over het welzijn van jouw hond,
          inclusief foto’s en video’s. Vraag om aanvullende informatie.
        </Paragraph>{' '}
      </Container>
      <Footer />
    </>
  );
};
