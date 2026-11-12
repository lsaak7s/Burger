import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { router } from './routes';
import GlobalStyle from './styles/globalStyle.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <GlobalStyle />
    <ToastContainer
      theme="auto"
      autoClose={2000}
      position="top-right"
      transition={Bounce}
    />
  </StrictMode>
);
