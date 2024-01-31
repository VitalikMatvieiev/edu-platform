import { ToastContainer } from 'react-toastify';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { StrictMode } from 'react';

import { store } from './shared/model';
import { App } from './App.tsx';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer position="bottom-left" autoClose={2000} />
    </Provider>
  </StrictMode>,
);
