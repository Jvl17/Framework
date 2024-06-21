import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Bacon from './cabecalho/header.jsx'
import Content from './Conteudo/content.jsx'
import Footer from './Rodape/footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Bacon />
    <Content />
    <Footer />   
    <App />
  </React.StrictMode>,
)
