import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import './styles/_main.scss';

export function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
