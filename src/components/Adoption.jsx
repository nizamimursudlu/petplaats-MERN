import adoptDog from '../adopt-dog.jpeg';
import adoptCat from '../adopt-cat.jpeg';
import {
  Container,
  Info,
  Header,
  Title,
  Desc,
  Options,
  OptionItem,
  Image,
  OptionInfo,
  OptionTitle,
  OptionDesc,
} from './styles/Adoption.styled';

export const Adoption = () => {
  return (
    <Container>
      <Info>
        <Header>ADOPTION</Header>
        <Title>Give the gift of unconditional love – ADOPT!</Title>
        <Desc>
          The best therapist has fur and four legs. Open your heart and home to
          a friend for life or help us to find them families. We can not change
          their past, but we can give them a happy future.
        </Desc>
      </Info>
      <Options>
        <OptionItem>
          <Image src={adoptDog} />
          <OptionInfo>
            <OptionTitle>Dogs</OptionTitle>
            <OptionDesc>The best breed of dog is a rescue dog.</OptionDesc>
          </OptionInfo>
        </OptionItem>
        <OptionItem>
          <Image src={adoptCat} />
          <OptionInfo>
            <OptionTitle>Cats</OptionTitle>
            <OptionDesc>Time stent with cats is never wasted.</OptionDesc>
          </OptionInfo>
        </OptionItem>
      </Options>
    </Container>
  );
};
