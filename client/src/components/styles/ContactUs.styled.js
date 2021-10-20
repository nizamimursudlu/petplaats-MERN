import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  padding-top: 50px;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  border-top: 1px solid ${({ theme }) => theme.colors.light};
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding-top: 20px;
`;

export const Header = styled.h1`
  padding: 40px 0 20px 0;
  font-size: 60px;
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

export const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
`;

export const Button = styled.button`
  display: block;
  cursor: pointer;
  margin: 35px auto 35px auto;
  text-align: center;
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
