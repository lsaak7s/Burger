import { createGlobalStyle } from 'styled-components';
import 'react-toastify/ReactToastify.css';
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Asset&display=swap');
  * { 
    margin: 0;
    padding:0;
    box-sizing:border-box;
    font-family: "Asset",serif ;
    font-weight:500;

  }`;
export default GlobalStyle;
