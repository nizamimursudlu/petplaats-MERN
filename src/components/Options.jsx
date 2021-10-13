import {
  Container,
  Wrapper,
  Title,
  ButtonsContainer,
  // LeftButton,
  // RightButton,
} from './styles/Options.styled';

export const Options = () => {
  return (
    <Container>
      <Wrapper>
        <Title>House is not a home without a PET!</Title>
        <ButtonsContainer>
          {/* <LeftButton>LOOKING FOR HOME</LeftButton>
          <RightButton>LOOKING FOR PET</RightButton> */}
        </ButtonsContainer>
      </Wrapper>
    </Container>
  );
};
