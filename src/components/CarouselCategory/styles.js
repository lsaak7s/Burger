import styled from 'styled-components';

export const ContainerCarrocel = styled.div`
  .carousel {
    padding-right: 40px;
  }
`;

export const Title = styled.h2`
  position: relative;
  text-align: center;
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

export const ConteinerIteis = styled.div`
  background: url('${(props) => props.imageUrl}');
`;
