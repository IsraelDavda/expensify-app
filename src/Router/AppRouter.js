import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpanseDashbordPage from '../components/ExpanseDashbordPage';
import Create from '../components/Create';
import EditExpansepage from '../components/EditExpansepage';
import AddExpensePage from '../components/addExpensePage';
import HelpPage from '../components/HelpPage';
import NotFound from '../components/NotFound';
import Header from '../components/Header';

const AppRouter = () => (
<BrowserRouter>
    <div>
    <Header />
        <Switch>
            <Route path="/" component={ExpanseDashbordPage} exact />
            <Route path="/create" component={AddExpensePage}/>
            {/* <Route path="/expense" component={AddExpensePage}/> */}
            <Route path="/edit/:id" component={EditExpansepage}/>
            <Route path="/help" component={HelpPage}/>
            <Route  component={NotFound}/>
        </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;