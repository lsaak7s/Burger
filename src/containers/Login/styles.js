import styled from 'styled-components';

import fundo from '../../assets/fundo1.jpg';
import Logo from '../../assets/logo1.jpg';

export const Conteiner = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const LeftConteiner = styled.div`
  background: url('${Logo}');
  background-size: cover;
  background-position: center;

  height: 100%;
  width: 70%;
`;

export const RightConteiner = styled.div`
  background: url('${fundo}');
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 50%;
  gap: 5vh;
`;

export const Title = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #000000;
    font-size: 4vw;
    margin: 0; /* <--- Tira o espaço gigante do navegador */
    line-height: 1.1; /* <--- Junta as linhas se o texto quebrar */
    text-align: center;
  }

  p {
    color: #000000;
    font-size: 3vw;
    margin: 0; /* <--- Tira a margem do parágrafo */
    text-align: center;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2vh;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 14vh; /* reserva espaço para o input e a mensagem */
  gap: 4vh;
  Input {
    height: 9vh;
    width: 30vw;

    border-radius: 10px;
    border: solid 2px black;

    opacity: 0.9;
  }
  input::placeholder {
    color: #000000;
    font-size: 2vw;
  }
  input:focus {
    outline: none;
    box-shadow: none;
  }
  p {
    font-size: 2vw;
    margin-top: -15px;
  }
`;
export const PasswordBox = styled.div`
  position: relative;
  width: 100%;
`;

export const ShowPasswordButton = styled.button`
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);

  border: none;
  background: transparent;
  cursor: pointer;

  font-size: 1.2rem;
  color: #000;
`;
export const Input = styled.input`
  height: 9vh;
  width: 100%;
  box-sizing: border-box;

  padding: 0 80px 0 10px;

  border-radius: 20px;
  border: 1px solid black;
  outline: none;
`;
export const Link = styled.button`
  background-color: transparent;
  color: #000000;

  border: none;

  font-size: 2vw;
  font-weight: 500;
`;
