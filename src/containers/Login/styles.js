import styled from 'styled-components';

import fundo from '../../assets/fundo1.jpg';
import Logo from '../../assets/Logo1.jpg';

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
export const Title = styled.h1`
  height: 15vh;
  width: 80%;

  h1 {
    color: #000000;
    font-size: 4vw;
  }
`;
export const Form = styled.form``;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 5vh;
  Input {
    height: 9vh;
    width: 30vw;

    border-radius: 10px;
    border: solid 1px black;

    opacity: 0.9;
  }
  p {
    color: #000000;
    font-size: 3vw;
  }
  input::placeholder {
    color: #000000;
    font-size: 2vw;
  }
`;
export const Button = styled.button`
  height: 8vh;
  width: 20vw;

  opacity: 0.9;

  border-radius: 10px;
  border: solid 1px black;

  text-align: center;
`;
export const Link = styled.button`
  background-color: transparent;
  border: none;

  font-size: 2vw;
  font-weight: 500;
`;
