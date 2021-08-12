import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavItem from './NavItem';
import './Navbar.css';
import About from '../Pages/About';


const Navbar = () => {
    return (
      <Router>
        <Switch>
        <div>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href=''>Inguzo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <NavItem name='Home' link='index'/>
        <NavItem name='About' link='/about'/>
        <NavItem name='Contact' link=''/>
        <NavItem name='Real Time+' link=''/>

        
      </ul>
    </div>
  </div>
</nav>

<Route path="/about" component={About}/>
          <Route path="">
          <index/>
          </Route>

</div>
</Switch>
</Router>
    )
  }


export default Navbar;