import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

/**
 * O Switch será responsável para que apenas uma única rota seja executada.
 * 
 * Em path passamos apenas um '/' para referenciar nossa primeira página e 
 * em component identificamos o componente de Logon.
 * 
 * Sobre o Route, precisamos passar o atributo exact. Pois caso contrario
 * ele não irá verificar a rota inteira, porém somente o começo dela.
 * No caso, vamos supor que temos uma rota chamada '/' e outra '/teste'
 * Sempre que tentarmos acessar '/teste', seremos redirecionado para '/',
 * pois ambas começam com '/'.
 * Assim com o atributo exact será sempre redirecionado para a rota
 * exata. 
 */

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" exact component={Register} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/incidents/new" exact component={NewIncident} />
            </Switch>
        </BrowserRouter>
    )
}