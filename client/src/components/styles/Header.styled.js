import styled from 'styled-components';
import image from '../../boy-jack-russel.jpeg';

export const Container = styled.div`
  position: relative;
  z-index: 1;
  width: auto;
  object-fit: contain;
  height: 600px;
  background-image: url(${image});
  background-color: red;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  padding-top: 180px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 50px;
  display: flex;
  font-weight: 900;
  justify-content: center;
  text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
export const LeftButton = styled.button`
  cursor: pointer;
  margin-top: 25px;
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

export const RightButton = styled.button`
  margin-top: 25px;
  cursor: pointer;
  padding: 20px;
  color: white;
  border-radius: 5px;
  font-weight: 700;
  font-size: 18px;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
