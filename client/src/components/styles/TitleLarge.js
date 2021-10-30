import styled from 'styled-components';
import { tablet } from '../../responsive';

export const TitleLarge = styled.span`
  display: inline-block;
  padding: 0px 0px 15px 0px;
  font-size: 60px;
  border-bottom: red 2.5px solid;
  width: fit-content;
  margin: 0 auto;
  text-align: center;
  ${tablet({ border: 'none', fontSize: '40px' })}
`;
