import volunteer from '../../images/volunteer.png';
import charity from '../../images/charity.png';
import house from '../../images/house.png';
import {
  Info,
  Options,
  OptionItem,
  Image,
  OptionInfo,
  OptionTitle,
  OptionDesc,
} from './GetInvolved.styled';
import { Container } from '../styles/Container';
import { Link } from 'react-router-dom';
import { TitleLarge } from '../styles/TitleLarge';

export const GetInvolved = () => {
  return (
    <Container>
      <Info>
        <TitleLarge>HELP MEE</TitleLarge>
      </Info>
      <Options>
        <OptionItem>
          <Link to={'./volunteer'} style={{ textDecoration: 'none' }}>
            <Image src={volunteer} />
            <OptionInfo>
              <OptionTitle>Vrijwilliger</OptionTitle>
              <OptionDesc>
                Word een vrijwilliger. Help ons om hen te helpen!
              </OptionDesc>
            </OptionInfo>{' '}
          </Link>
        </OptionItem>
        <OptionItem>
          <Link to={'./donation'} style={{ textDecoration: 'none' }}>
            <Image src={charity} />
            <OptionInfo>
              <OptionTitle>Doneren</OptionTitle>
              <OptionDesc>
                Uw kleingeld kan een verandering teweeg brengen.
              </OptionDesc>
            </OptionInfo>
          </Link>
        </OptionItem>
        <OptionItem>
          <Link to={'./foster'} style={{ textDecoration: 'none' }}>
            <Image src={house} />
            <OptionInfo>
              <OptionTitle>Foster</OptionTitle>
              <OptionDesc>Er is geen plek zoals thuis.</OptionDesc>
            </OptionInfo>
          </Link>
        </OptionItem>
      </Options>
    </Container>
  );
};
