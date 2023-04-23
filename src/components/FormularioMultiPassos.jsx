import React, { useState } from 'react';
import DadosPessoaisForm from './DadosPessoaisForm';
import Endereco from './Endereco';
import Agradecimento from './Agradecimento';

function FormularioMultiPassos() {
  const [passoAtual, setPassoAtual] = useState(0);

  function mudarPasso(passo, evento) {
    evento.preventDefault();
    setPassoAtual(passo);
  }

  return (
    <div>
      {passoAtual === 0 && (
        <>
          <DadosPessoaisForm />
          <button onClick={(evento) => mudarPasso(1, evento)}>Próximo</button>
        </>
      )}
      {passoAtual === 1 && (
        <>
          <Endereco />
          <button onClick={(evento) => mudarPasso(0, evento)}>Anterior</button>
          <button onClick={(evento) => mudarPasso(2, evento)}>Próximo</button>
        </>
      )}
      {passoAtual === 2 && (
        <>
          <Agradecimento />
          <button onClick={(evento) => mudarPasso(1, evento)}>Anterior</button>
        </>
      )}
    </div>
  );
}

export default FormularioMultiPassos;
