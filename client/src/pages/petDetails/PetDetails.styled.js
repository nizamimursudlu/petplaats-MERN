import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
`;
export const Wrapper = styled.div`
  padding: 140px 70px;
  display: flex;

  align-items: center;
`;
export const Image = styled.img`
  width: 50%;
  border-radius: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 20px;
`;

export const InfoItems = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 40px;
  border-top: solid 1px lightgrey;
  border-bottom: solid 1px lightgrey;
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InfoTitle = styled.h3`
  font-size: 25px;
  padding: 10px;
`;

export const InfoDetail = styled.p`
  text-transform: capitalize;
  font-size: 20px;
  padding: 10px;
`;

export const Desc = styled.p`
  font-size: 20px;
  padding: 40px 10px;
  letter-spacing: 0.5px;
`;
