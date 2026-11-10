import { createBrowserRouter } from 'react-router';

import { Cadrastro } from '../containers/Cadrastro';
import { Login } from '../containers/Login';

export const router = createBrowserRouter([
  {
    path: '/Login',
    element: <Login />,
  },
  {
    path: '/Cadrastro',
    element: <Cadrastro />,
  },
]);
