import styled from 'styled-components';
import { tablet } from '../../responsive';

export const Wrapper = styled.div`
  display: flex;
  ${tablet({ flexDirection: 'column' })}
`;
