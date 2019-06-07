import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/Auth';

export const Login = ({ startLogin }) => (
    <div>
        <button onClick={startLogin}>Login</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(Login)


