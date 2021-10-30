import styled from 'styled-components';
import { tablet } from '../../responsive';

export const Container = styled.div``;
export const Wrapper = styled.div`
  padding: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Body = styled.div`
  display: flex;
  width: 80%;
  padding: 50px;
  position: relative;
  ${tablet({ flexDirection: 'column' })}
`;

export const CheckBoxesContainer = styled.div``;

export const CheckBoxesTitle = styled.h1`
  padding: 0px 0px 40px 40px;
  font-size: 40px;
`;

export const CheckBoxes = styled.div`
  flex: 5;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const CheckBox = styled.div`
  display: flex;
  text-align: center;
  width: 15rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  padding-left: 20px;
  width: 40%;
`;

export const Label = styled.h3`
  padding: 10px;
  font-weight: bold;
`;

export const Desc = styled.h4``;

export const Price = styled.h4`
  color: ${({ theme }) => theme.colors.primary};
`;

export const SummaryContainer = styled.div`
  flex: 2;
  padding: 20px;
  border-radius: 10px;
  display: flex;

  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 0 4px 6px -6px #222;
  -moz-box-shadow: 0 4px 6px -6px #222;
  box-shadow: 0 4px 10px -5px #222;
  height: fit-content;
`;

export const SummaryTitle = styled.h1`
  text-align: center;
`;

export const Summary = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  padding: 20px;
`;
