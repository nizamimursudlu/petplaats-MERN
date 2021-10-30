import styled from 'styled-components';
import { tablet } from '../../responsive';

export const Container = styled.div`
  margin: 5px;
  color: black;
  width: fit-content;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  -webkit-box-shadow: 0 4px 6px -6px #222;
  -moz-box-shadow: 0 4px 6px -6px #222;
  box-shadow: 0 4px 10px -5px #222;
  &:hover {
    transform: scale(1.01);
    transition: all 0.5 ease;
  }
  ${tablet({ margin: '0 auto 20px auto' })}
`;

export const Image = styled.img`
  height: 70%;
  max-width: 350px;
  margin-bottom: 20px;
`;

export const Name = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
`;
