import styled from 'styled-components';

import Logo from '../../assets/bg 1.png';

export const Conteiner = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const LeftConteiner = styled.div`
  background: url('${Logo}');
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
`;

export const RightConteiner = styled.div`
  background-color: rgb(32, 94, 38);
  height: 100vh;
  width: 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h1`
  text-align: center;
  h1 {
    font-size: 5vw;
    width: 100%;
  }
  h2 {
    font-size: 4vw;
  }
`;
export const Form = styled.form``;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vh;
  .Input {
    text-align: center;
    height: 6vh;
    width: 30vw;
    border-radius: 1vw;
  }
`;
export const Button = styled.button`
  height: 7vh;
  width: 20vw;
  border-radius: 1vh;
`;
