import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Dashboard from './components/pages/Dashboard'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>
);


