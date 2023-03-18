import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './config/i18n/languageconfig';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
