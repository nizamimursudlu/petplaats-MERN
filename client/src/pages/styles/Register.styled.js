import styled from 'styled-components';
import image from '../../register-img.jpeg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1)
    ),
    url(${image}), center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
  margin-left: 350px;
  margin-bottom: 200px;
  border-radius: 10px;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

export const Button = styled.button`
  margin: 0 auto;
  margin-top: 20px;
  width: 40%;
  cursor: pointer;
  padding: 10px;
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
