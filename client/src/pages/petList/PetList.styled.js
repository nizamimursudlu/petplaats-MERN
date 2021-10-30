import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  margin-top: 70px;
  width: 100%;
`;
export const Wrapper = styled.div`
  padding: 40px;
  background-color: #e6e6e6;
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const Filter = styled.div`
  margin: 20px;
`;

export const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

export const Select = styled.select`
  padding: 13px;
  margin-right: 30px;
  font-size: 16px;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 150px;
  height: 50px;
  border-radius: 5px;
  border: none;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
    transition: all 3s ease;
  }
`;

export const Option = styled.option``;
