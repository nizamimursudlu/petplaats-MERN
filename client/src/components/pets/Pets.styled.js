import styled from 'styled-components';
import { tablet } from '../../responsive';

export const Wrapper = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  ${tablet({ flexDirection: 'column' })}
`;
