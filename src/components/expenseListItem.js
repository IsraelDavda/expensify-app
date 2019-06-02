import React from 'react';
import { Link } from 'react-router-dom';


const showAll = ({ id, description, amount, createdAt}) => (
            <div>
            <Link to={`/edit/${id}`}>
                <h3> {description}</h3>
            </Link>
        <p>{amount} - {createAt}</p>
</div>
);

export default showAll;

