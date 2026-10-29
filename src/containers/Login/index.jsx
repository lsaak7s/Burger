import {
  Conteiner,
  LeftConteiner,
  RightConteiner,
  InputContainer,
  Button,
  Title,
  Form,
  Link,
} from './styles';

export function Login() {
  return (
    <Conteiner>
      <LeftConteiner>
        <img></img>
      </LeftConteiner>
      <RightConteiner>
        <Title>Ola bem vindo</Title>
        <span>login e senha</span>
        <Form>
          <InputContainer>
            <label>Email</label>
            <input type="email"></input>
          </InputContainer>
          <InputContainer>
            <label>Senha</label>
            <input type="password"></input>
          </InputContainer>
        </Form>
        <Link>Esqueci a senha</Link>
        <Button>entra</Button>
      </RightConteiner>
    </Conteiner>
  );
}
