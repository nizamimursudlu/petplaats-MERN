import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  margin: 25px auto 0px auto;
  padding: 15px;
  border-radius: 5px;
  border: none;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  width: fit-content;
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
