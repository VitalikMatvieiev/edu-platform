import { ToastContainer } from 'react-toastify';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { App } from './App.tsx';
import 'react-toastify/dist/ReactToastify.css';
import { store } from './redux/store/store.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer position="bottom-left" autoClose={2000} />
    </Provider>
  </StrictMode>,
);
