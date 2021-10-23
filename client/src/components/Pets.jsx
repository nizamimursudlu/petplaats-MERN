import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Pet from './Pet';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const Pets = ({ cat, filters }) => {
  const [pets, setPets] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/pets?category=${cat}`
            : 'http://localhost:5000/api/pets',
        );
        setPets(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        pets.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value),
          ),
        ),
      );
  }, [pets, cat, filters]);

  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => <Pet item={item} key={item.id} />)
        : pets.slice(0, 4).map((item) => <Pet item={item} key={item.id} />)}
    </Container>
  );
};
