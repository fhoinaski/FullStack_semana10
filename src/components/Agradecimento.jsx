import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Agradecimento() {
  return (
    <div>
      <h3>Obrigado pelo cadastro!</h3>
      <div className="form-group">
        <label htmlFor="comoConheceu">Como você nos conheceu?</label>
        <select className="form-control" id="comoConheceu">
          <option>Selecione uma opção</option>
          <option>Pelo Google</option>
          <option>Pelo LinkedIn</option>
          <option>Pelo Instagram</option>
        </select>
      </div>
    </div>
  );
}

export default Agradecimento;
