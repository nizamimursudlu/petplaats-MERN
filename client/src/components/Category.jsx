import React from 'react';
import { categories } from '../data';
import { CategoryItem } from './CategoryItem';

import { Container, Info, Header, Title, Desc } from './styles/Category.styled';

export const Category = () => {
  return (
    <>
      <Info>
        <Header>ADOPTIE</Header>
        <Title>
          Geef het geschenk van onvoorwaardelijke liefde – ADOPTEER!
        </Title>
        <Desc>
          De beste therapeut heeft een vacht en vier poten. Open je hart en huis
          voor een vriend voor het leven of help ons families voor hen te
          vinden. We kunnen hun verleden niet veranderen, maar we kunnen ze een
          gelukkige toekomst geven.
        </Desc>
      </Info>
      <Container>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};
