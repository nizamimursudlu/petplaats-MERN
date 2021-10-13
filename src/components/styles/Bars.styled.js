import styled from 'styled-components';

export const Container = styled.div`
  height: 750px;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  display: flex;
  margin: 60px 0;
  border-radius: 20px;
  height: 600px;
`;

export const Title = styled.h1`
  font-size: 50px;
  text-align: center;
`;

export const Desc = styled.p`
  font-size: 18px;
`;

export const Right = styled.div`
  margin: 100px 120px 0 20px;
  display: flex;
  width: 500px;
  justify-content: center;
  flex-direction: column;
  padding: 5px 15px;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  height: 450px;
`;

export const Left = styled.div`
  background-image: url('https://barsadopt.nl/wp-content/uploads/img_6464.jpg');
  width: 500px;
  height: 600px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
`;

export const Button = styled.button`
  cursor: pointer;
  margin-top: 25px;
  padding: 15px;
  border-radius: 5px;
  border: none;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  width: 130px;
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
