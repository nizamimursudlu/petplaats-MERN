import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`;

export const Categories = styled.div`
  flex: 1;
  margin: 10px;
  height: 50vh;
  position: relative;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 10px;
  height: 100%;
  object-fit: cover;
  &:hover {
    transform: scale(1.02);
    transition: all 0.8s ease;
  }
`;

export const CategoryInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 91%;
  text-align: center;
  color: white;
  padding: 20px;
  margin-top: 200px;
  background-color: rgb(0.1);
  text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
`;

export const CategoryTitle = styled.h1`
  font-size: 50px;
  font-weight: 900;
`;

export const CategoryDesc = styled.p`
  font-size: 30px;
  font-weight: 900;
`;
