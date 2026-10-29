import Logo from '../../assets/bg 1.png';
//import miniB from '../../assets/miniB.png';
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
        <img src={Logo}></img>
      </LeftConteiner>
      <RightConteiner>
        <Title>
          <h1>Ola bem vindo</h1>
          <h2>Asseso</h2>
        </Title>
        <Form>
          <InputContainer>
            <label>Email</label>
            <input type="email"></input>
          </InputContainer>
          <InputContainer>
            <label>Senha</label>
            <input type="password"></input>
          </InputContainer>
          <Button>entra</Button>
        </Form>
      </RightConteiner>
    </Conteiner>
  );
}
