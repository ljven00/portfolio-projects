import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header.tsx';
import App from './App.tsx';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
)
