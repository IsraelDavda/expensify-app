import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpanseDashbordPage from '../components/ExpanseDashbordPage';
import Create from '../components/Create';
import EditExpansepage from '../components/EditExpansepage';
import AddExpensePage from '../components/addExpensePage';
import NotFound from '../components/NotFound';
import Login from '../components/Login';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
<Router history={history} >
    <div>
        <Switch>
            <PublicRoute path="/" component={Login} exact />
            <PrivateRoute path="/dashboard" component={ExpanseDashbordPage} exact />
            <PrivateRoute path="/create" component={AddExpensePage}/>
            {/* <Route path="/expense" component={AddExpensePage}/> */}
            <PrivateRoute path="/edit/:id" component={EditExpansepage}/>
            <Route  component={NotFound}/>
        </Switch>
        </div>
    </Router>
);

export default AppRouter;