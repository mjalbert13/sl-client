import React from 'react';
import { Switch, Route} from 'react-router-dom';
import AppliedRoute from './AppliedRoutes';
import Home from '../pages/Landing';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Settings from '../pages/Settings';
import NotFound from '../pages/NotFound';
import NewNote from '../pages/Notes';
import Notes from '../pages/Note';
import AuthenticatedRoute from './AuthenticatedRoute';
import UnauthenticatedRoute from './UnauthenticatedRoute';


const Routes = ({ appProps}) => {
    return (
        <section className='container'>

            <Switch>
                <AppliedRoute exact path='/' component={Home} appProps={appProps} />
                <UnauthenticatedRoute path="/login" exact component={Login} appProps={appProps} />
                <UnauthenticatedRoute path="/signup" exact component={Signup} appProps={appProps} />
                <AuthenticatedRoute path="/settings" exact component={Settings} appProps={appProps} />
                <AuthenticatedRoute path="/notes/new" exact component={NewNote} appProps={appProps} />
                <AuthenticatedRoute path="/notes/:id" exact component={Notes} appProps={appProps} />
                                
                <Route component={NotFound} />
            </Switch>
        </section>
    )
}

export default Routes;