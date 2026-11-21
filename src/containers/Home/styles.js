import styled from 'styled-components';

import CartoonHome from '../../assets/CartoonHome.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: rgb(124, 117, 52);
  header {
    display: flex;
    flex-direction: row;
    justify-content: center; /* Centraliza os itens do menu */
    gap: 20px; /* Espaço entre Home, Contatos, Pedidos */
    background-color: rgb(88, 88, 85);
    padding: 20px;
    color: white;
  }
  h2 {
    margin: 20px 0;
    text-align: center;
    font-size: 40px;
    margin: 20px 0;
    color: white;
  }
`;
export const CartoonImage = styled.div`
  width: 100%;
  height: 400px; /* Ajuste a altura como quiser */
  background: url('${CartoonHome}') no-repeat center;
  background-size: contain;
`;
export const ContainerCel = styled.div`
  width: 100%; // Garante que não passe da tela
  max-width: 100vw; // Proteção extra contra transbordamento
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 20px 0;
  background-color: rgb(124, 117, 52);
  overflow-x: hidden; // <--- ISSO É O QUE CORTA O QUE PASSA PARA OS LADOS
`;
