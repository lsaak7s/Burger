import styled from 'styled-components';

export const Conteiner = styled.div`
  display: grid;
  grid-template-areas: ' left right ';
`;

export const LeftConteiner = styled.div`
  grid-area: left;

  img {
    height: 98vh;
    width: 60vw;
  }
`;
export const RightConteiner = styled.div`
  grid-area: right;
  background-color: rgb(32, 94, 38);
  height: 100vh;
  width: 40vw;
`;
export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 5vw;
    width: 100%;
  }
  h2 {
    font-size: 4vw;
    margin-top: 0px;
  }
`;
export const Form = styled.form``;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
export const Button = styled.button``;
