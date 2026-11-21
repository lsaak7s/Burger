import styled from 'styled-components';

export const ContainerCarrocel = styled.div`
  width: 100%;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* Estiliza os botões de seta do carrossel para não sumirem */
  .react-multiple-carousel__arrow {
    z-index: 10;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 30px;
  margin-bottom: 30px;
  color: white;
  /* Remova o :after por enquanto para ver se o texto alinha 
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
  }*/
`;

export const ContainerIteis = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  /* Mantemos a imagem de fundo */
  background: url('${(props) => props.imageUrl}') no-repeat center;
  background-size: cover;

  /* Tamanho do Card */
  width: 250px;
  height: 250px;
  border-radius: 20px;

  /* Sombras e efeitos */
  cursor: pointer;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.3);

  /* Estilo do Texto (Nome da Categoria) */
  p {
    background: rgba(
      0,
      0,
      0,
      0.6
    ); /* Fundo escuro atrás do texto para ler melhor */
    color: white;
    width: 100%;
    text-align: center;
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

    /* Faz o texto ficar na parte de baixo do card */
    margin-top: auto;
  }

  /* Efeito de hover (quando passa o mouse) */
  &:hover {
    transform: scale(1.05);
    transition: 0.3s;
  }
`;
