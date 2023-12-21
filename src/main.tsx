import { ToastContainer } from 'react-toastify';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import { App } from './App.tsx';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <ToastContainer position="bottom-left" autoClose={2000} />
  </StrictMode>,
);
