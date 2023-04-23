import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function DadosPessoaisForm() {
  return (
    <div>
      <div className="form-group">
        <label htmlFor="nome">Nome</label>
        <input type="text" className="form-control" id="nome" placeholder="Nome" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" className="form-control" id="email" placeholder="Email" />
      </div>
    </div>
  );
}

export default DadosPessoaisForm;
