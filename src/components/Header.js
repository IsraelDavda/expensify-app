import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/Auth';

export const Header = ({ startLogout }) => (
    <header>
        <h1> Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact>Dashboard </NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense </NavLink>
        <button onClick={startLogout}>Logout</button>
        {/* <NavLink to="/expense" activeClassName="is-active">expense </NavLink> */}
        {/* <NavLink to="/edit" activeClassName="is-active">Go To Edit </NavLink> */}
        {/* <NavLink to="/help" activeClassName="is-active">Go To Help </NavLink> */}
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);