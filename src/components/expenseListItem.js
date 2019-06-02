import React from 'react';
import { Link } from 'react-router-dom';


const showAll = ({ id, description, amount, createAt}) => (
            <div>
            <Link to={`/edit/${id}`}>
                <h2> {description}</h2>
            </Link>
        <p>with the amount {amount} and createAt{createAt}</p>
</div>

);

export default showAll;

