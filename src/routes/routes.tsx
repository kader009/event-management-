import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/index';
import App from '../App';
import About from '../pages/About';
import Dashboard from '../pages/admin/Dashboard';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
    children: [],
  },
]);
