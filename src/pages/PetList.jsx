import styled from 'styled-components';
import { Navbar } from '../components/Navbar';
import { Pets } from '../components/Pets';
import { Footer } from '../components/Footer';
// import { useState } from 'react';

const Container = styled.div`
  position: absolute;
  margin-top: 70px;

  width: 100%;
`;
const Wrapper = styled.div`
  padding: 40px;
  background-color: lightgray;
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
  margin-right: 12px;
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
  // const [addFilters, setAddFilters] = useState(false);
  return (
    <div>
      <Navbar />
      <Container>
        <Wrapper>
          <FilterContainer>
            <Filter>
              <FilterText>I am looking for:</FilterText>
              <Select>
                <Option selected>All Animals</Option>
                <Option>Dogs</Option>
                <Option>Cats</Option>
                <Option>Rabbits</Option>
              </Select>
              <FilterText>Age</FilterText>
              <Select>
                <Option disabled selected>
                  Any
                </Option>
                <Option>Puppy</Option>
                <Option>Adult</Option>
                <Option>Senior</Option>
              </Select>
            </Filter>
            {/* <Button
              onClick={() => {
                setAddFilters((toggle) => !toggle);
              }}
            >
              Filters
            </Button> */}
          </FilterContainer>
          {/* {addFilters && (
            <Filter>
              <FilterText>Sort Products:</FilterText>
              <Select>
                <Option selected>Newest</Option>
                <Option>Price (asc)</Option>
                <Option>Price (desc)</Option>
              </Select>
            </Filter>
          )} */}
        </Wrapper>
        <Pets />
        <Footer />
      </Container>
    </div>
  );
};

export default PetList;
