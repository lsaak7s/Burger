import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { ToastContainer } from 'react-toastify';

import { router } from './routes';
import GlobalStyle from './styles/globalStyle.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <GlobalStyle />
    <ToastContainer theme="auto" position="top-right" transition="bounce" />
  </StrictMode>
);
