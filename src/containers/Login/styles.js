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
  gap: 12vh;
`;
export const Title = styled.h1`
  height: 20%;
  width: 80%;

  h1 {
    color: #000000;
    font-size: 4vw;
  }
  p {
    color: #000000;
    font-size: 3vw;
  }
`;
export const Form = styled.form``;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 3vh;
  Input {
    height: 9vh;
    width: 30vw;

    border-radius: 10px;
    border: solid 1px black;

    opacity: 0.9;
  }
  input::placeholder {
    color: #000000;
    font-size: 2vw;
  }
`;
export const Link = styled.button`
  background-color: transparent;
  border: none;
  color: #000000;
  font-size: 2vw;
  font-weight: 500;
`;
