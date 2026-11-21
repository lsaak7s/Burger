import styled from 'styled-components';

import CartoonHome from '../../assets/CartoonHome.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  min-width: 100vh;

  background-color: rgb(124, 117, 52);
  header {
    display: flex;
    flex-direction: row;

    background-color: rgb(88, 88, 85);

    font-size: 20px;
  }
  h2 {
    width: 100vw;
    height: 60vh;

    background: url('${CartoonHome}') no-repeat center;
    background-size: contain;
    background-color: rgb(194, 194, 130);
    font-size: 40px;
  }
`;

export const Containercel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 20px 0;
  .section {
    .CarouselCategory {
      width: 80vw;
      height: 40vh;

      background:
        url('${(props) => props.$imageUrl}'),
        no-repeat center;
      background-size: cover;

      border-radius: 10px;
    }
  }
`;
