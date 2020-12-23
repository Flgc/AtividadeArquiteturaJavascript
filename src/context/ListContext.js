import React, { createContext, useState } from 'react';

const UsersContext = createContext({});

function UserProvider({ children }) {
  const [users, setUsers] = useState([
    {
      nome: 'Fabio Luis',
      email: 'fabioluis@gg.com.br',
      senha: '1234a',
    },
    {
      nome: 'Adriana Silva',
      email: 'asilva@ibest.com',
      senha: '1234b',
    },
    {
      nome: 'Flavio Cardoso',
      email: 'flavioc@bol.com.br',
      senha: '1234c',
    },
    {
      nome: 'Bianca Silva',
      email: 'biancas@ig.com.br',
      senha: '1234d',
    },
  ]);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
}

export { UserProvider, UsersContext };
