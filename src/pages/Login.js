import React, { useState, useContext } from 'react';
import { UsersContext } from '../context/ListContext';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { users } = useContext(UsersContext);

  let history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    const user = users.filter((u) => {
      return u.email === email && u.senha === password;
    });

    if (user.length < 1) {
      alert('Usuário ou senha incorreto');
      return;
    }

    history.push('/list');
  };

  return (
    <div className="container mt-4">
      <h3>Login</h3>
      <form action="Login" className="col-md-4 col-6 m-auto">
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
          <label for="nome">Senha</label>
          <input
            type="password"
            className="form-control"
            id="senha"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-warning warning"
          onClick={(event) => handleClick(event)}
        >
          Acessar
        </button>
      </form>
    </div>
  );
};

export default Login;
