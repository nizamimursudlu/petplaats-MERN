import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Button,
  Links,
  Link,
} from './styles/Login.styled';

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>LOG IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Links>
            <Link>FORGOT THE PASSWORD?</Link>
            <Link>CREATE AN ACCOUNT</Link>
          </Links>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
