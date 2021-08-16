import React from 'react';
import { Link } from 'react-router-dom';
import './NavItem.css';

const NavItem = (props) => {
    return (
        <div>
            <Link to={props.link}>{props.name}</Link>
        </div>
    );
}


export default NavItem;
