import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Aquí es donde se monta toda nuestra aplicacion en react, gracias al id="root" que se encuentra en el <div id="root"></div> que esta en el index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
