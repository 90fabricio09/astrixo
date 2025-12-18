import React from 'react';
import { Link } from 'react-router-dom';
import Astrixo from '../assets/astrixo.png';
import '../css/home.css';

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <div className="not-found-logo">
          <Link to="/">
            <img src={Astrixo} alt="Astrixo - Agência de Design e Desenvolvimento Web" />
          </Link>
        </div>
        
        <div className="not-found-text">
          <h1>404</h1>
          <h2>Página não encontrada</h2>
          <p>Ops! Parece que você tentou acessar uma página que não existe ou foi removida.</p>
          <div className="not-found-buttons">
            <Link to="/" className="astrixo-button">
              <i className="bi bi-house-fill"></i> Voltar para a página inicial
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 