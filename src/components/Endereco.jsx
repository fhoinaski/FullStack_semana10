import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Endereco() {
  return (
    <div>
      <div className="form-group">
        <label htmlFor="logradouro">Logradouro</label>
        <input type="text" className="form-control" id="logradouro" placeholder="Logradouro" />
      </div>
      <div className="form-group">
        <label htmlFor="numero">Número</label>
        <input type="number" className="form-control" id="numero" placeholder="Número" />
      </div>
      <div className="form-group">
        <label htmlFor="bairro">Bairro</label>
        <input type="text" className="form-control" id="bairro" placeholder="Bairro" />
      </div>
      <div className="form-group">
        <label htmlFor="complemento">Complemento</label>
        <input type="text" className="form-control" id="complemento" placeholder="Complemento" />
      </div>
      <div className="form-group">
        <label htmlFor="cidade">Cidade</label>
        <input type="text" className="form-control" id="cidade" placeholder="Cidade" />
      </div>
      <div className="form-group">
        <label htmlFor="cep">CEP</label>
        <input type="text" className="form-control" id="cep" placeholder="CEP" />
      </div>
      <div className="form-group">
        <label htmlFor="estado">Estado</label>
        <input type="text" className="form-control" id="estado" placeholder="Estado" />
      </div>
    </div>
  );
}

export default Endereco;
