import styled from 'styled-components';
import { tablet } from '../../responsive';

export const Info = styled.div`
  margin: 0 auto;

  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const Options = styled.div`
  display: flex;
  padding-top: 30px;
  justify-content: space-around;
  margin: 0 auto;
  ${tablet({ width: '50%' })}
`;

export const OptionItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
    transition: all 0.8s ease;
  }
  ${tablet({ height: '200px' })}
`;

export const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  top: 0;
`;

export const OptionInfo = styled.div`
  width: 91%;
  text-align: center;
  padding: 20px;
  ${tablet({ width: '50%' })}
`;

export const OptionTitle = styled.h1`
  font-size: 23px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primary}; ;
`;

export const OptionDesc = styled.p`
  color: black;
  padding-top: 20px;
  font-size: 20px;
  font-weight: 900;
  ${tablet({ fontSize: '10px' })}
`;
