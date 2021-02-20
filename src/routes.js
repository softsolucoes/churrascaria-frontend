import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Menu from './components/menu/index';
import Rodizio from './pages/rodizio';
import Pizzas from './pages/pizzas';
import SelfService from './pages/selfService';
import Bebidas from './pages/bebidas';
import Contactme from './pages/contactme';

function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path='/menu' exact component={Menu}/>
            <Route path='/rodizios' exact component={Rodizio}/>
            <Route path='/contactme' exact component={Contactme}/>
            <Route path='/pizzas' exact component={Pizzas}/>
            <Route path='/selfservice' exact component={SelfService}/>
            <Route path='/bebidas' exact component={Bebidas}/>

        </Switch>
        </BrowserRouter>
    )
}

export default Routes;