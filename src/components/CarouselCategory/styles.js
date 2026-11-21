import styled from 'styled-components';

export const ContainerCarrocel = styled.div`
  width: 100%;
  max-width: 1200px; /* Limite máximo para não ficar gigante */
  margin: 0 auto; /* Centraliza o container */
  padding: 40px 0;

  /* Adicione isso para evitar que o carrossel estique a tela */
  .react-multi-carousel-list {
    display: flex;
    align-items: center;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 30px;
  margin-bottom: 30px;
  color: white;
  /* Remova o :after por enquanto para ver se o texto alinha */

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
