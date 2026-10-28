import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Login } from './containers/Login';
import GlobalStyle from './styles/globalStyle.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
    <GlobalStyle />
  </StrictMode>
);
