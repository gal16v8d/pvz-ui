import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './config/i18n/languageconfig';
import './index.css';

if (import.meta.env.VITE_ENABLE_MOCKS == 'true') {
  import('./mocks/browser').then(({ worker }) => {
    worker.start();
  });
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
