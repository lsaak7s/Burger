import styled from 'styled-components';

export const ContainerButton = styled.button`
  background-color: #9758a6; /* Roxo padrão do projeto */
  border: none;
  border-radius: 10px; /* Bordas arredondadas do botão */
  width: 100%;
  height: 40px;

  /* Flexbox para alinhar o ícone do carrinho perfeitamente no centro */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  transition: background-color 0.2s ease-in-out;

  img {
    width: 24px; /* Tamanho proporcional para o ícone do carrinho */
    height: 24px;
    filter: brightness(0) invert(1); /* Transforma o ícone preto/azul em branco */
  }

  &:hover {
    background-color: #7d408c; /* Escurece o roxo ao passar o mouse */
  }

  &:active {
    opacity: 0.8; /* Efeito visual de clique */
  }
`;
