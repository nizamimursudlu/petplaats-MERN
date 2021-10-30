import styled from 'styled-components';
import { tablet } from '../../responsive';

export const Container = styled.div`
  z-index: 2;
  padding: 0 2rem;
  display: flex;
  height: fit-content;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
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

export const Logo = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  color: ${({ theme }) => theme.colors.dark};
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
  ${({ isScrolled }) =>
    isScrolled &&
    ` color: white;
   
         `}
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  ${tablet({
    overflow: 'hidden',
    flexDirection: 'column',
    maxHeight: ({ isOpen }) => (isOpen ? '300px' : '0'),
    transition: 'max-height 0.3s ease-in',
    width: '100%',
  })}
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: ${({ theme }) => theme.colors.dark};
    margin-bottom: 4px;
    border-radius: 5px;
    ${({ isScrolled }) =>
      isScrolled &&
      ` background: white;
   
         `}
  }
  ${tablet({ display: 'flex' })}
`;

export const MenuItem = styled.button`
  color: ${({ theme }) => theme.colors.dark};
  cursor: pointer;
  justify-content: flex-end;
  font-weight: 900;
  font-size: 20px;
  border: none;
  background-color: transparent;
  padding-right: 20px;
  padding-top: 10px;
  h2 {
    padding-left: 15px;
  }
  &:hover {
    opacity: 0.9;
    transform: scale(1.1);
    transition: all 0.8s ease;
    border-bottom: solid 1px ${({ theme }) => theme.colors.dark};
  }

  ${({ isScrolled }) =>
    isScrolled &&
    ` color: white;
      transition: all 0.8s ease;   
      &:hover {
      border-bottom: solid 1px white;
      
         `}
`;
