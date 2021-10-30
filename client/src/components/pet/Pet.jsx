import { Link } from 'react-router-dom';
import { Container, Image, Name } from './Pet.styled';

export const Pet = ({ item }) => {
  return (
    <Link to={`/pet/${item._id}`} style={{ textDecoration: 'none' }}>
      <Container>
        <Image src={item.img} />
        <Name>{item.name}</Name>
      </Container>
    </Link>
  );
};
