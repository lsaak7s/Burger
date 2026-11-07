import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

import { Login } from './containers/Login';
import GlobalStyle from './styles/globalStyle.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
    <GlobalStyle />
    <ToastContainer theme="auto" position="top-right" transition="bounce" />
  </StrictMode>
);
