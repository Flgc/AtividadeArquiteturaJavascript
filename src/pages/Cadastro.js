import React, { useState, useContext } from 'react';
import { UsersContext } from '../context/ListContext';
import { useHistory } from 'react-router-dom';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const userContext = useContext(UsersContext);
  let history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    if (email !== confirmEmail || email === '') {
      alert('Emails informados não são iguais');
      return;
    }
    if (password !== confirmPassword || password === '') {
      alert('Senhas diferentes');
      return;
    }

    const user = {
      nome: nome,
      email: email,
      senha: password,
    };

    userContext.setUsers([...userContext.users, user]);

    history.push('List');
  };

  return (
    <div className="container mt-4">
      <h3>Cadastro</h3>
      <form action="" className="col-md-4 col-6 m-auto">
        <div className="form-group">
          <label for="nome">Nome</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            onChange={(event) => setNome(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="nome">E-mail</label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="nome">Confirmar e-mail</label>
          <input
            type="email"
            className="form-control"
            id="confirmEmail"
            onChange={(event) => setConfirmEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="nome">Senha</label>
          <input
            type="password"
            className="form-control"
            id="senha"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="nome">Confirmar senha</label>
          <input
            type="password"
            className="form-control"
            id="confirmSenha"
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-warning w-warning"
          onClick={(event) => handleClick(event)}
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default Cadastro;
