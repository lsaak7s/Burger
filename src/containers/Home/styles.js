import styled from 'styled-components';

import CartoonHome from '../../assets/CartoonHome.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  min-width: 100vh;

  background-color: rgb(74, 70, 34);
  header {
    display: flex;
    flex-direction: row;

    font-size: 25px;
  }

  h1 {
    width: 100vw;
    height: 60vh;

    background: url('${CartoonHome}') no-repeat center;
    background-size: contain;

    font-size: 40px;
  }
`;
export const ContainerCarrocel = styled.div``;
