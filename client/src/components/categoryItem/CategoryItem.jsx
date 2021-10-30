import { Link } from 'react-router-dom';
import {
  Categories,
  Image,
  CategoryInfo,
  CategoryTitle,
  CategoryDesc,
} from './CategoryItem.styled';

export const CategoryItem = ({ item }) => {
  return (
    <Link to={`/pets/${item.cat}`}>
      <Categories>
        <Image src={item.img} />
        <CategoryInfo>
          <CategoryTitle>{item.title}</CategoryTitle>
          <CategoryDesc>{item.desc}</CategoryDesc>
        </CategoryInfo>
      </Categories>
    </Link>
  );
};
