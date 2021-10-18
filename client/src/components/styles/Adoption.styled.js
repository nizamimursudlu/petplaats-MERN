import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
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

export const Options = styled.div`
  display: flex;
  align-items: center;
`;

export const OptionItem = styled.div`
  flex: 1;
  margin: 10px;
  height: 50vh;
  position: relative;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  &:hover {
    transform: scale(1.02);
    transition: all 0.8s ease;
  }
`;

export const OptionInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 91%;
  text-align: center;
  color: white;
  padding: 20px;
  margin-top: 250px;
  background-color: rgb(0.1);
  text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
`;

export const OptionTitle = styled.h1`
  font-size: 50px;
`;

export const OptionDesc = styled.p`
  font-size: 30px;
`;
