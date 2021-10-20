import volunteer from '../images/volunteer.png';
import charity from '../images/charity.png';
import house from '../images/house.png';
import airplane from '../images/airplane.png';

import {
  Container,
  Info,
  Header,
  Options,
  OptionItem,
  Image,
  OptionInfo,
  OptionTitle,
  OptionDesc,
} from './styles/GetInvolved.styled';

export const GetInvolved = () => {
  return (
    <Container>
      <Info>
        <Header>HELP MEE</Header>
      </Info>
      <Options>
        <OptionItem>
          <Image src={volunteer} />
          <OptionInfo>
            <OptionTitle>Vrijwilliger</OptionTitle>
            <OptionDesc>
              Word een vrijwilliger. Help ons om hen te helpen!
            </OptionDesc>
          </OptionInfo>
        </OptionItem>
        <OptionItem>
          <Image src={charity} />
          <OptionInfo>
            <OptionTitle>Doneren</OptionTitle>
            <OptionDesc>
              Uw kleingeld kan een verandering teweeg brengen.
            </OptionDesc>
          </OptionInfo>
        </OptionItem>
        <OptionItem>
          <Image src={house} />
          <OptionInfo>
            <OptionTitle>Foster</OptionTitle>
            <OptionDesc>Er is geen plek zoals thuis.</OptionDesc>
          </OptionInfo>
        </OptionItem>
        <OptionItem>
          <Image src={airplane} />
          <OptionInfo>
            <OptionTitle>Word een vluuchtmaatje</OptionTitle>
            <OptionDesc>
              Help een huisdier om een ​​nieuw leven te beginnen.
            </OptionDesc>
          </OptionInfo>
        </OptionItem>
      </Options>
    </Container>
  );
};
