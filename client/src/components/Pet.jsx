import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Component = styled.div`
  margin: 25px;
  color: black;
  text-decoration: none;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  -webkit-box-shadow: 0 4px 6px -6px #222;
  -moz-box-shadow: 0 4px 6px -6px #222;
  box-shadow: 0 4px 10px -5px #222;
  &:hover {
    transform: scale(1.01);
    transition: all 0.5 ease;
  }
`;

const Image = styled.img`
  height: 75%;
  margin-bottom: 20px;
`;

const Name = styled.h1``;

const Pet = ({ item }) => {
  return (
    <Link to={`/pet/${item._id}`} style={{ textDecoration: 'none' }}>
      <Component>
        <Image src={item.img} />
        <Name>{item.name}</Name>
      </Component>
    </Link>
  );
};

export default Pet;
