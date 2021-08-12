import React from "react";
import { Link } from "react-router-dom";
import './NavItem.css';

const NavItem = (props) => {
    return (
        // <li className="nav-item">
        //   <a className="nav-link active" aria-current="page" href={props.link}>{props.name}</a>
        // </li>
        <div>
        <Link to={props.link} >{props.name}</Link>
        </div>
    );
}


export default NavItem;