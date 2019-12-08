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


const Routes = ({ appProps}) => {
    return (
        <section className='container'>

            <Switch>
                <AppliedRoute exact path='/' component={Home} appProps={appProps} />
                <AppliedRoute exact path='/login' component={Login} appProps={appProps} />
                <AppliedRoute path="/signup" exact component={Signup} appProps={appProps} />
                <AppliedRoute path="/notes/new" exact component={NewNote} appProps={appProps} />
                <AppliedRoute path="/notes/:id" exact component={Notes} appProps={appProps} />
                <Route exact path ='/settings'component={Settings} />
                
                <Route component={NotFound} />
            </Switch>
        </section>
    )
}

export default Routes;