import axios from 'axios';
import { useEffect, useState } from 'react';
import { Pet } from '../pet/Pet';
import { Container } from '../styles/Container';
import { TitleLarge } from '../styles/TitleLarge';
import { Wrapper } from './Pets.styled';

export const Pets = ({ cat, filters }) => {
  const [pets, setPets] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:8080/api/pets?category=${cat}`
            : 'http://localhost:8080/api/pets',
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
    <>
      <Container>
        <TitleLarge>Deze dieren zoeken een nieuw thuis</TitleLarge>
        <Wrapper>
          {cat
            ? filteredProducts.map((item) => <Pet item={item} key={item._id} />)
            : pets
                .sort(() => Math.random() - 0.5)
                .slice(0, 3)
                .map((item) => <Pet item={item} key={item._id} />)}
        </Wrapper>
      </Container>
    </>
  );
};
