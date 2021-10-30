import styled from 'styled-components';
import { tablet } from '../../responsive';

export const Container = styled.div`
  margin: 5px;
  color: black;
  width: 21.5rem;
  height: 22rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
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
  height: 17rem;
  width: 21.5rem;
  margin-bottom: 20px;
  object-fit: cover;
`;

export const Name = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
`;
