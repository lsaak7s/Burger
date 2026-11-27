import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: black;
  border-radius: 15px;

  padding: 20px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;
    height: 80px;
  }
  p {
    font-size: 18px;
  }
  strong {
    font-size: 18px;
  }
`;
export const CardImg = styled.img``;
