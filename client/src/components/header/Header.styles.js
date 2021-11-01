import styled from 'styled-components';
import { tablet } from '../../responsive';

export const Container = styled.div`
  position: relative;
  height: 600px;
  ${tablet({ height: '500px' })}
`;

export const Image = styled.img`
  height: 630px;
  object-fit: cover;
  position: absolute;
  width: 100vw;
  ${tablet({ height: '500px' })}
`;

export const Title = styled.h1`
  position: absolute;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 55px;
  width: 100%;
  height: 100%;
  display: flex;
  font-weight: 900;
  justify-content: center;
  align-items: flex-end;
  text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
  text-align: center;
  ${tablet({ fontSize: '45px' })}
`;
