// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Para React 18+
import './index.css'; // Asegúrate de importar tus estilos CSS
import App, { AuthProvider } from './App'; // Importa App (como default) y AuthProvider (como named export)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
) ;