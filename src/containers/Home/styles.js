import styled from 'styled-components';

import fundo3 from '../../assets/fundo3.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background: url('${fundo3}');

  //background-color: rgb(117, 50, 50);
  header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: rgba(7, 7, 7, 0.2);
    padding: 20px;
    gap: 20px;
  }
  h1 {
    text-align: center;
    font-size: 60px;
    font-weight: 600;

    color: rgb(0, 0, 0);
  }
  .p {
    font-size: 35px;
    font-weight: 600;
  }
`;

export const ContainerCel = styled.div`
  width: 100%;
  max-width: 100vw;

  flex-direction: column;
  align-items: center;

  padding: 20px;
`;
