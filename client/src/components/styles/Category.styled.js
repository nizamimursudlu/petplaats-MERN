import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 0 auto;
`;

export const Info = styled.div`
  margin: 0 auto;
  border-top: 1px solid ${({ theme }) => theme.colors.light};
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const Header = styled.h1`
  padding: 40px 0 20px 0;
  font-size: 60px;
`;

export const Title = styled.h3`
  padding: 0px;
  font-size: 25px;
  letter-spacing: 2px;
`;

export const Desc = styled.p`
  padding: 20px;
  margin: 0 auto;
  text-align: center;
  width: 50%;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 2px;
`;
