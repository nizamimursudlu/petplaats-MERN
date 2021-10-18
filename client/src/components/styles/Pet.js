import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  margin: 15px;
  min-width: 280px;
  max-width: 310px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #f5fbfd;
  position: relative;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  &:hover {
    opacity: 0.9;
    transform: scale(1.1);
    transition: all 0.8s ease;
  }
`;

export const ImageContainer = styled.div`
  flex: 7;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-width: 280px;
  top: 0;
  left: 0;

  object-fit: cover;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Info = styled.div`
  flex: 1;
  display: flex;
  padding: 0 10px;
  align-items: center;
  justify-content: space-between;
`;

export const InfoName = styled.h1``;

export const InfoCity = styled.h1`
  font-size: 14px;
`;
