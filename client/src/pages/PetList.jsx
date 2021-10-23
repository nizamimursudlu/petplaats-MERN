import styled from 'styled-components';
import { Navbar } from '../components/Navbar';
import { Pets } from '../components/Pets';
import { Footer } from '../components/Footer';
import { useLocation } from 'react-router';
import { useState } from 'react';

const Container = styled.div`
  position: absolute;
  margin-top: 70px;

  width: 100%;
`;
const Wrapper = styled.div`
  padding: 40px;
  background-color: #e6e6e6;
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 13px;
  margin-right: 30px;
  font-size: 16px;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 150px;
  height: 50px;
  border-radius: 5px;
  border: none;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
    transition: all 3s ease;
  }
`;

const Option = styled.option``;

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
                <Option>Oudere</Option>
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
