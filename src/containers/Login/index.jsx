import { Button } from '../../components/button';
import {
  Conteiner,
  LeftConteiner,
  RightConteiner,
  InputContainer,
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
          <h1>Olá entre na sua Conta do Burger</h1>
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
