import styled from 'styled-components';
import { tablet } from '../../responsive';

export const Categories = styled.div`
  flex: 1;
  margin: 10px;
  height: 50vh;
  position: relative;
  cursor: pointer;
  ${tablet({ height: '50%' })}
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 10px;
  height: 100%;
  object-fit: cover;
  &:hover {
    transform: scale(1.02);
    transition: all 0.8s ease;
  }
`;

export const CategoryInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  left: 0;
  width: 91%;
  text-align: center;
  color: white;
  margin: 0 auto;
  background-color: rgb(0.1);
  text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
`;

export const CategoryTitle = styled.h1`
  font-size: 50px;
  font-weight: 900;
`;

export const CategoryDesc = styled.p`
  font-size: 30px;
  font-weight: 900;
  padding-bottom: 15px;
`;
