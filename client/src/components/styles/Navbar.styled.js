import styled from 'styled-components';

export const Container = styled.div`
  z-index: 2;
  height: 70px;
  width: 100%;
  color: ${({ theme }) => theme.colors.dark};
  background-color: transparent;
  position: fixed;

  ${({ isScrolled }) =>
    isScrolled &&
    `     background-color: #f96d5c;
          color: white;
          transition: all 0.8s ease;
          -webkit-box-shadow: 0 4px 6px -6px #222;
          -moz-box-shadow: 0 4px 6px -6px #222;
          box-shadow: 0 4px 10px -5px #222;
        `}
`;

export const Wrapper = styled.div`
  margin: 0px 50px;
  height: 100%;
  display: flex;
  align-items: center;
  font-weight: 700;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
`;

export const Logo = styled.div`
  margin-left: 20px;
  &:hover {
    opacity: 0.9;
    transform: scale(1.1);
  }
`;

export const Center = styled.div`
  font-size: 18px;
  flex: 3;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

export const Register = styled.div`
  margin-right: 50px;
  cursor: pointer;
  font-size: 18px;
  &:hover {
    opacity: 0.9;
    transform: scale(1.1);
  }
`;

export const Login = styled.div`
  cursor: pointer;
  font-size: 18px;
  &:hover {
    opacity: 0.9;
    transform: scale(1.1);
  }
`;
