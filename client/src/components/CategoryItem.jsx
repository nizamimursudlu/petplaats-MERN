import { Link } from 'react-router-dom';
import {
  Container,
  Categories,
  Image,
  CategoryInfo,
  CategoryTitle,
  CategoryDesc,
} from './styles/CategoryItem.styled';

export const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/pets/${item.cat}`}>
        <Categories>
          <Image src={item.img} />
          <CategoryInfo>
            <CategoryTitle>{item.title}</CategoryTitle>
            <CategoryDesc>{item.desc}</CategoryDesc>
          </CategoryInfo>
        </Categories>
      </Link>
    </Container>
  );
};
