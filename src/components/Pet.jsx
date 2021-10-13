import {
  Container,
  ImageContainer,
  Image,
  Info,
  InfoName,
  InfoCity,
} from './styles/Pet';

export const Pet = ({ item }) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={item.img} />
      </ImageContainer>
      <Info>
        <InfoName>{item.name}</InfoName>
        <InfoCity>{item.city}</InfoCity>
      </Info>
    </Container>
  );
};
