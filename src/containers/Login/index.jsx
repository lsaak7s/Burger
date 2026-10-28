import logo from '../../assets/logo.jpg';
import { Conteiner, LeftConteiner } from './styles';

export function Login() {
  return (
    <Conteiner>
      <LeftConteiner>
        <img src={logo}></img>
      </LeftConteiner>
    </Conteiner>
  );
}
