import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding-bottom: 40px;
`;
export const Wrapper = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  padding-top: 20px;
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Title = styled.h1`
  text-align: center;
  padding-top: 10px;
  font-size: 40px;
  font-weight: 900;
`;

// export const Line = styled.hr`
//   width: 16%;
//   margin: 0 auto;
//   color: ${({ theme }) => theme.colors.primary};
//   margin-bottom: 20px;
// `;

export const Logo = styled.h1``;

export const Desc = styled.p`
  margin: 20px 0px;
  font-size: 20px;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 150px;
  padding: 15px;
  border-radius: 5px;
  border: none;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

export const Right = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  text-align: right;
`;

export const Payment = styled.img`
  width: 50%;
`;
