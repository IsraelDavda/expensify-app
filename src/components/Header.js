import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1> Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact>Dashbord </NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense </NavLink>
        {/* <NavLink to="/expense" activeClassName="is-active">expense </NavLink> */}
        {/* <NavLink to="/edit" activeClassName="is-active">Go To Edit </NavLink> */}
        {/* <NavLink to="/help" activeClassName="is-active">Go To Help </NavLink> */}
    </header>
);

export default Header;