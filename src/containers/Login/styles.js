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
  height: 98vh;
  width: 40vw;
`;
export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 30vh;
  h1 {
    font-size: 5vw;
  }
  h2 {
    font-size: 4vw;
  }
`;
export const Form = styled.form``;
export const InputContainer = styled.div``;
export const Button = styled.button``;
