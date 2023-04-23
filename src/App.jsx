import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import DadosPessoaisForm from './components/DadosPessoaisForm';
import Endereco from './components/Endereco';
import Agradecimento from './components/Agradecimento';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Passos from './components/Passos';
import './App.css';
import { useForm } from './components/useForm';

const StyledHeader = styled.header`
  text-align: center;
  background-color: #f8f9fa;
  padding: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #dee2e6;
`;

function App() {
 
  const { passoAtual, mudarPasso } = useForm();



  return (
    <div className="app">
      <StyledHeader>
        <h2>Cadastre-se gratuitamente!</h2>
        <p>Faça o seu cadastro para ter acesso a todos os recursos da nossa plataforma</p>
      </StyledHeader>
      <div>
        <form>
          <Passos passoAtual={passoAtual} />
          
          {passoAtual === 0 && <DadosPessoaisForm />}
          {passoAtual === 1 && <Endereco />}
          {passoAtual === 2 && <Agradecimento />}
          
          <div className="navigation-buttons">
            {passoAtual > 0 && (
              <button className="btn btn-secondary" onClick={(e) => mudarPasso(passoAtual - 1, e)}>
                <IoIosArrowBack /> Voltar
              </button>
            )}
            {passoAtual < 2 && (
              <button className="btn btn-primary" onClick={(e) => mudarPasso(passoAtual + 1, e)}>
                Avançar <IoIosArrowForward />
              </button>
            )}
            {passoAtual === 2 && (
              <button className="btn btn-success" type="submit">
                Enviar <IoIosArrowForward />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
