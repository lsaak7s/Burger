import logo from '../../assets/logo.jpg';
import {
  Conteiner,
  LeftConteiner,
  RightConteiner,
  InputContainer,
  Button,
  Title,
  Form,
} from './styles';

export function Login() {
  return (
    <Conteiner>
      <LeftConteiner>
        <img src={logo}></img>
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
        <Button>entra</Button>
      </RightConteiner>
    </Conteiner>
  );
}
