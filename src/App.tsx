import { router } from './router/router';
import './styles/_main.scss';
import { RouterProvider } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
