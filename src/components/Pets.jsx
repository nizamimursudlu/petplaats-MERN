import React from 'react';
import styled from 'styled-components';
import { pets } from '../data';
import { Pet } from './Pet';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Pets = () => {
  return (
    <Container>
      {pets.map((item) => (
        <Pet item={item} key={item.id} />
      ))}
    </Container>
  );
};
