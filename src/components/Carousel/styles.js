import styled from 'styled-components';

export const ContainerCarrocel = styled.div`
  width: 100%;
  height: 30vh; /* <--- Dê uma altura fixa (30% da tela) */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2vh;
`;

export const Title = styled.h1`
  font-size: 4vw;
  margin-bottom: 20px;
`;

export const Carousel = styled.div`
  width: 100%;
  /* Adicione outras propriedades que quiser aqui */
`;

export const ConteinerIteis = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* Remova o padding e o height daqui */
`;
