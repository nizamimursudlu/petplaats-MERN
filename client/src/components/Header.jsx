import {
  Container,
  Wrapper,
  Title,
  ButtonsContainer,
  // LeftButton,
  // RightButton,
} from './styles/Header.styled';

export const Options = () => {
  return (
    <Container>
      <Wrapper>
        <Title>WIJ SPREKEN VOOR DEGENEN DIE GEEN STEM HEBBEN</Title>
        <ButtonsContainer>
          {/* {/* <LeftButton>LOOKING FOR HOME</LeftButton> */}
          {/* <RightButton>DONEREN</RightButton> */}
        </ButtonsContainer>
      </Wrapper>
    </Container>
  );
};
