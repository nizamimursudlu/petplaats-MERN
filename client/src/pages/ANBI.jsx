import { Footer } from '../components/footer/Footer';
import { Navbar } from '../components/navbar/Navbar';
import { Container } from '../components/styles/Container';
import { Paragraph } from '../components/styles/Paragraph';
import { Link } from '../components/styles/Link';
import { useEffect } from 'react';
import { TitleLarge } from '../components/styles/TitleLarge';
import { TitleSmall } from '../components/styles/TitleSmall';

export const ANBI = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <TitleLarge>ANBI</TitleLarge>
        <Paragraph>
          Stichting Baku Animal Rescue Society is door de belastingdienst
          aangemerkt als Algemeen Nut Beogende Instelling (ANBI). Giften zijn
          daarom onder voorwaarden aftrekbaar van de inkomstenbelasting (voor
          particulieren) en vennootschapsbelasting (voor bedrijven).
        </Paragraph>
        <TitleSmall>De officiële gegevens van het stichting:</TitleSmall>
        <Paragraph>
          Stichting Baku Animal Rescue Society RSIN nummer: 859846556
          Geregistreerd in Amsterdam
        </Paragraph>
        <TitleSmall>POSTADRES:</TitleSmall>
        <Paragraph>
          Roelof Hartstraat 19H, 1071VG Amsterdam KVK nummer: 74303554
        </Paragraph>
        <TitleSmall>BANKREKENING:</TitleSmall>
        <Paragraph>ING Bank, IBAN NL42 INGB 0009 5139 94</Paragraph>
        <TitleSmall>DOEL:</TitleSmall>
        <Paragraph>De stichting heeft ten doel:</Paragraph>
        <Paragraph>
          a. het opzetten van projecten, het organiseren van liefdadigheids- en
          fondsenwervende evenementen, het opzetten van campagnes, het vinden
          van sponsoren en vrijwilligers ter bevordering van het welzijn en de
          gezondheid van dieren;
        </Paragraph>
        <Paragraph>
          b. het verbeteren van de leefsituatie van verwaarloosde en mishandelde
          dieren en de bescherming van deze dieren;
        </Paragraph>
        <Paragraph>
          c. het vinden van huisvesting en organiseren van adoptie voor dieren
          naar Nederland en andere landen in Europa; |
        </Paragraph>
        <Paragraph>
          d. het geven van voorlichting teneinde bewustwording te creëren voor
          de noodzaak van het beschermen van dieren en het bevorderen van hun
          welzijn en gezondheid, onder meer door informatieverstrekking aan
          instellingen, organisaties en initiatieven, alsmede (potentiële)
          ondersteuners van de stichting, over haar activiteiten en de
          onderliggende noodzaak daarvan;
        </Paragraph>
        <Paragraph>
          e. het verrichten van al hetgeen met het vorenstaande rechtstreeks of
          zijdelings verband houdt of daartoe bevorderlijk kan zijn, alles in de
          ruimste zin des woords. Netto-opbrengsten van werving komen toe aan de
          stichting ten behoeve van (verdere) bevordering van het welzijn en de
          gezondheid van dieren. De stichting heeft met haar algemeen nut
          beogende activiteiten geen winstoogmerk.
        </Paragraph>

        <TitleSmall>HET BELIED</TitleSmall>
        <Paragraph>
          In het laatste beleidsplan van de stichting hebben we onze
          doelstellingen voor de periode 2019-2024 beschreven. Het hele plan is
          hieronder te zien.
        </Paragraph>
        <Link
          href="https://barsadopt.nl/wp-content/uploads/beleidsplan-bars.pdf"
          target="_blank"
        >
          Beleidsplan 2019-2024
        </Link>
        <TitleSmall>Jaarverslag van Stichting BARS</TitleSmall>
        <Link
          href="https://barsadopt.nl/wp-content/uploads/jaarverslag-2019-van-stichting-bars-1.pdf"
          target="_blank"
        >
          2019
        </Link>
        <TitleSmall>Balans en W&V rekening</TitleSmall>
        <Link
          href="https://barsadopt.nl/wp-content/uploads/screen-shot-2020-06-08-at-5.52.34-pm.png"
          target="_blank"
        >
          2019
        </Link>
        <Link
          href="https://barsadopt.nl/wp-content/uploads/cijfers-2020.pdf"
          target="_blank"
        >
          2020
        </Link>
      </Container>
      <Footer />
    </>
  );
};
