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
        <img></img>
      </LeftConteiner>
      <RightConteiner>
        <Title>
          <h1>Ola bem vindo</h1>
          <h2>Asseso</h2>
        </Title>
        <Form>
          <InputContainer>
            <input className="Input" type="email" placeholder="Email"></input>
            <input
              className="Input"
              type="password"
              placeholder="Senha"
            ></input>
            <Button>Entrar</Button>
          </InputContainer>
        </Form>
      </RightConteiner>
    </Conteiner>
  );
}
