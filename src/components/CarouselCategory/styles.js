import styled from 'styled-components';

export const ContainerCarrocel = styled.div`
  .carousel {
    padding-right: 40px;
  }
`;

export const Title = styled.h2`
  position: relative;
  text-align: center;
  margin: 40px;
  &::after {
    content: '';
    width: 30px;
    height: 2px;
    bottom: 0;
    background-color: beige;
    position: absolute;

    left: calc(
      50% - 15px
    ); //Aqui faz a linha ficar no meio, faz a cabeca pensar
  }
`;

export const ContainerIteis = styled.div`
  background: url('${(props) => props.imageUrl}') no-repeat center;
  background-size: cover;
  width: 200px;
  height: 200px;
  border-radius: 10px;
`;
