import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
`;

export const Wrapper = styled.div`
  width: 700px;
  height: 500px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h1`
  padding: 15px;
  text-align: center;
  border-bottom: solid 1px lightgrey; ;
`;

export const Desc = styled.h4`
  padding: 10px 30px 10px 30px;
  font-size: 18px;
  letter-spacing: 1px;
`;

export const Form = styled.form`
  margin: 0;
  padding: 0;
  text-align: center;
`;
export const FormInput = styled.input`
  border: 1.5px solid gray;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 20px;
  width: 90%;
  margin: 10px;
  font-size: 16px;
  font-weight: 600;
`;

export const SuccessContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const Success = styled.h2`
  padding: 10px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
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

export const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
