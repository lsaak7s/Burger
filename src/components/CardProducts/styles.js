import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 100%;
  min-height: 100%;

  background-color: rgb(194, 178, 178);
  border-radius: 15px;

  div {
    display: flex;
    flex-direction: column;

    min-width: 100%;
    min-height: 100%;
  }
  p {
    font-size: 18px;
  }
  strong {
    font-size: 38px;
  }
`;
export const CardImg = styled.img``;
