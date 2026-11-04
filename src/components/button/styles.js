import styled from 'styled-components';

export const ConteinerButton = styled.button`
  height: 8vh;
  width: 20vw;

  opacity: 0.9;

  border-radius: 10px;
  border: solid 1px black;

  text-align: center;

  &:hover {
    background-color: ${(rest) => (rest.red ? 'rgb(252, 252, 252' : 'rgb(135, 35, 35)')};
  }
`;
