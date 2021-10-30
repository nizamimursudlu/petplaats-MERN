import React from 'react';
import { categories } from '../../data';
import { CategoryItem } from '../categoryItem/CategoryItem';
import { Wrapper } from './Adoption.styled';
import { Container } from '../styles/Container';
import { TitleLarge } from '../styles/TitleLarge';
import { TitleMiddle } from '../styles/TitleMiddle';
import { Desc } from '../styles/Description';

export const Adoption = () => {
  return (
    <>
      <Container>
        <TitleLarge>ADOPTIE</TitleLarge>
        <TitleMiddle>
          Geef het geschenk van onvoorwaardelijke liefde – ADOPTEER!
        </TitleMiddle>
        <Desc>
          De beste therapeut heeft een vacht en vier poten. Open je hart en huis
          voor een vriend voor het leven of help ons families voor hen te
          vinden. We kunnen hun verleden niet veranderen, maar we kunnen ze een
          gelukkige toekomst geven.
        </Desc>
        <Wrapper>
          {categories.map((item) => (
            <CategoryItem item={item} key={item.title} />
          ))}
        </Wrapper>
      </Container>
    </>
  );
};
