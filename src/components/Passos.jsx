import React from 'react';
import styled from 'styled-components';
import { IoIosPerson, IoIosPin, IoIosCheckmarkCircle } from 'react-icons/io';

const PassosContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Passo = styled.span`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin: 0 10px;
  color: ${(props) => (props.ativo ? '#c71d81' : '#868584')};
  font-weight: ${(props) => (props.ativo ? 'bold' : 'normal')};
`;

function Passos({ passoAtual }) {
  return (
    <PassosContainer>
      <Passo ativo={passoAtual === 0}>
        <IoIosPerson /> Dados pessoais
      </Passo>
      <Passo ativo={passoAtual === 1}>
        <IoIosPin /> Endereço
      </Passo>
      <Passo ativo={passoAtual === 2}>
        <IoIosCheckmarkCircle /> Agradecimento
      </Passo>
    </PassosContainer>
  );
}

export default Passos;
