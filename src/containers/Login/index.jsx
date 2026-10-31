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
      <LeftConteiner></LeftConteiner>
      <RightConteiner>
        <Title>
          <h1>Entrar na sua Conta do Burguer</h1>
        </Title>
        <Form>
          <InputContainer>
            <p>Insira Seu</p>
            <input type="email" placeholder="Email"></input>
            <input type="password" placeholder="Senha"></input>
          </InputContainer>
        </Form>
        <Button>Entrar</Button>
        <Link>Ainda Não Tem uma Conta? please.</Link>
      </RightConteiner>
    </Conteiner>
  );
}
