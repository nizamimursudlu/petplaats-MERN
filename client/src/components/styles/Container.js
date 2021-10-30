import styled from 'styled-components';
import { tablet } from '../../responsive';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 75%;
  margin: 0px auto;
  padding-top: 100px;
  ${tablet({ width: '95%' })}
`;
