import { Navbar } from '../../components/navbar/Navbar';
import { Footer } from '../../components/footer/Footer';
import { useLocation } from 'react-router';
import { useState } from 'react';
import { Pets } from '../../components/pets/Pets';
import {
  Container,
  Filter,
  FilterContainer,
  FilterText,
  Option,
  Select,
  Wrapper,
} from './PetList.styled';

const PetList = () => {
  const location = useLocation();
  const cat = location.pathname.split('/')[2];
  const [filters, setFilters] = useState({});

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value.toLowerCase(),
    });
  };

  return (
    <div>
      <Navbar />
      <Container>
        <Wrapper>
          <FilterContainer>
            <Filter>
              <FilterText>Gender</FilterText>
              <Select name="gender" onChange={handleFilters}>
                <Option value="">Alle</Option>
                {cat === 'dog' ? (
                  <>
                    <Option>Teef</Option>
                    <Option>Reu</Option>
                  </>
                ) : (
                  <>
                    <Option>Kater</Option>
                    <Option>Poes</Option>
                  </>
                )}
              </Select>
              <FilterText>Age</FilterText>
              <Select name="age" onChange={handleFilters}>
                <Option value="">Alle</Option>
                {cat === 'dog' ? (
                  <Option>Puppy</Option>
                ) : (
                  <Option>Kitten</Option>
                )}
                <Option>Volwassen</Option>
                <Option>Senior</Option>
              </Select>
              {cat === 'dog' ? (
                <>
                  <FilterText>Size</FilterText>
                  <Select name="size" onChange={handleFilters}>
                    <Option value="">Alle</Option>
                    <Option>Klein</Option>
                    <Option>Middel</Option>
                    <Option>Groot</Option>
                  </Select>
                </>
              ) : null}
            </Filter>
          </FilterContainer>
        </Wrapper>
        <Pets cat={cat} filters={filters} />
        <Footer />
      </Container>
    </div>
  );
};

export default PetList;
