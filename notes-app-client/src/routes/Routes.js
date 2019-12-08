import React from 'react';
import { Switch, Route} from 'react-router-dom';
import AppliedRoute from './AppliedRoutes';
import Home from '../pages/Landing';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Settings from '../pages/Settings';
import NotFound from '../pages/NotFound';

const Routes = ({ appProps}) => {
    return (
        <section className='container'>

            <Switch>
                <AppliedRoute exact path='/' component={Home} appProps={appProps} />
                <AppliedRoute exact path='/login' component={Login} appProps={appProps} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path ='/settings'component={Settings} />
                
                <Route component={NotFound} />
            </Switch>
        </section>
    )
}

export default Routes;