import styled from 'styled-components';
import { tablet } from '../../responsive';

export const Video = styled.iframe`
  margin: 50px auto;
  border: none;
  ${tablet({ width: '100%', martin: '10px auto' })}
`;
