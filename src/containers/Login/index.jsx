import logo from '../../assets/logo.jpg';
import { Conteiner, LeftConteiner, RightConteiner } from './styles';

export function Login() {
  return (
    <Conteiner>
      <LeftConteiner>
        <img src={logo} alt="LOGO"></img>
      </LeftConteiner>
      <RightConteiner>
        <title>Ola bem vindo</title>
        <span>login e senha</span>
        <form>
          <imput
        </form>
      </RightConteiner>
    </Conteiner>
  );
}
