import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Menu from './components/menu/index';
import Register from './pages/Register/index';
import Login from './pages/Login/index';
import AddFood from './pages/addFood/index';
import Rodizio from './pages/rodizio';
import Pizzas from './pages/pizzas';
import SelfService from './pages/selfService';
import Bebidas from './pages/bebidas';
import Contactme from './pages/contactme';
import Home from './pages/home/index';
import Money from './pages/money';

function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Menu}/>
            <Route path='/rodizios' exact component={Rodizio}/>
            <Route path='/contactme' exact component={Contactme}/>
            <Route path='/pizzas' exact component={Pizzas}/>
            <Route path='/selfservice' exact component={SelfService}/>
            <Route path='/bebidas' exact component={Bebidas}/>
            <Route path='/food/create' exact component={AddFood}/>
            <Route path='/user/home' exact component={Home}/>
            <Route path='/user/money' exact component={Money}/>
            <Route path='/user/register' exact component={Register}/>
            <Route path='/user/login' exact component={Login}/>

        </Switch>
        </BrowserRouter>
    )
}

export default Routes;