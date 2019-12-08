import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from '../pages/Landing';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Settings from '../pages/Settings';
import NotFound from '../pages/NotFound';

const Routes = () => {
    return (
        <section className='container'>

            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path ='/settings'component={Settings} />
                
                <Route component={NotFound} />
            </Switch>
        </section>
    )
}

export default Routes;