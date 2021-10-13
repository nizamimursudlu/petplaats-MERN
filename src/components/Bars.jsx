import {
  Container,
  Left,
  Wrapper,
  Right,
  Desc,
  Button,
  Title,
} from './styles/Bars.styled';

export const Bars = () => {
  return (
    <Container>
      <Left />
      <Wrapper>
        <Right>
          <Title>BARS</Title>
          <Desc>
            We run a dog shelter of 120 rescued dogs and operate under a
            ‘no-kill’ philosophy, which means that we do not euthanise animals.
            Running a no-kill shelter is an extremely challenging mission. Our
            shelter receives no local, state or federal funding and is entirely
            dependent on contributions from the public to cover its annual
            operating budget. Adoption is a second major problem for us as,
            sadly, local people in Azerbaijan don’t tend to adopt shelter dogs.
            Rescued cats are being fostered by our volunteers. We strive for
            giving the rescued animals a chance to live happy, safe lives and we
            believe that together we can reach our goal and continue this noble
            activity.
          </Desc>
          <Button>DONATE</Button>
        </Right>
      </Wrapper>
    </Container>
  );
};
