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
    color: white;
    font-size: 4vw;
  }
`;
export const Form = styled.form``;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 5vh;
  Input {
    height: 8vh;
    width: 30vw;
    border-radius: 10px;
    text-align: center;
  }
  p {
    color: white;
    font-size: 3vw;
  }
  input::placeholder{black}
`;
export const Button = styled.button`
  height: 8vh;
  width: 20vw;
  border-radius: 10px;

  align-items: center;
`;
export const Link = styled.button`
  background-color: transparent;
`;
