import React, {useContext} from 'react';
import { UsersContext } from '../context/ListContext';

const List = () => {
    const userContext = useContext(UsersContext);

    return (
        <>
            <div className="container">
                <h3>Lista de usuários</h3>
                <ul className="mt-4">
                    {userContext.users.map((user) => <li key={user.email}>{user.nome}, {user.email}</li>)}
                </ul>
            </div>
        </>
    )
}

export default List;