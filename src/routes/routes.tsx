import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/index';
import App from '../App';
import About from '../pages/About';
import Dashboard from '../pages/admin/Dashboard';
import Event from '../pages/Event';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      
    ],
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/event',
    element: <Event />,
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
  },
]);
