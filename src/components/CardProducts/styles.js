import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  /* Define o tamanho fixo ideal para o card */
  width: 300px;
  height: 240px;

  /* Cor de fundo cinza suave/pastel */
  background-color: rgb(215, 205, 205);
  border-radius: 25px;

  /* Espaçamento interno e margem externa */
  padding: 20px;
  margin: 60px 10px 20px 10px;
  position: relative;

  /* Sombra leve para destacar os cards */
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.05);

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 4px;
    margin-bottom: 12px;
  }

  p {
    font-size: 16px;
    font-weight: 600;
    color: #4a4a4a; /* Cor profissional para o nome */
    margin: 0;
  }

  strong {
    font-size: 22px;
    font-weight: 700;
    color: #212121; /* Cor escura para o preço */
  }
`;

export const CardImg = styled.img`
  width: 140px;
  height: 110px;
  object-fit: contain;

  /* Faz a imagem subir e "flutuar" no topo do card */
  margin-top: -60px;
  margin-bottom: 10px;
  align-self: center;
`;
