import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`;

export const Info = styled.div`
  margin: 0 auto;
  margin-top: 100px;
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

export const Options = styled.div`
  display: flex;
  padding-top: 30px;
  justify-content: space-around;
  width: 100%;
`;

export const OptionItem = styled.div`
  flex: 1;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
    transition: all 0.8s ease;
  }
`;

export const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  top: 0;
`;

export const OptionInfo = styled.div`
  width: 91%;
  text-align: center;
  padding: 20px;
`;

export const OptionTitle = styled.h1`
  font-size: 23px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primary}; ;
`;

export const OptionDesc = styled.p`
  padding-top: 20px;
  font-size: 20px;
  font-weight: 900;
`;
