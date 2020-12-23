import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import List from './pages/List';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import history from './history';

const Routes = () =>{
    return (
        <>
            <Router history={history}>
                <Header></Header>
                <Switch>
                    <Route exact path='/'>
                        <Home></Home>
                    </Route>
                    <Route exact path='/list'>
                        <List></List>
                    </Route>
                    <Route exact path='/cadastro'>
                        <Cadastro></Cadastro>
                    </Route>
                    <Route exact path='/login'>
                        <Login></Login>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default Routes;  