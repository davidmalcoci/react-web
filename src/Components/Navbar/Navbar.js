import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";
import NavItem from './NavItem';
import './Navbar.css';
import About from '../Pages/About/About';
import Contact from "../Pages/Contact/Contact";
import HomePage from "../Pages/HomePage/HomePage";
import LiveMonitoring from "../Pages/Live/LiveMonitoring";

const Navbar = () => {
    return (
      <Router>
          <Switch>
        <div>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
  <Link to='/home' className="navbar-brand">Inguzo</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <NavItem name='Home' link='/home'/>
        <NavItem name='About' link='/about'/>
        <NavItem name='Contact' link='/contact'/>
        <NavItem name='Real Time+' link='/live'/>
      </ul>
    </div>
  </div>
</nav>
<Route path="/contact" component={Contact}/>
<Route path="/about" component={About}/>
<Route path="/live" component={LiveMonitoring}/>
<Route exact path="/">
<Redirect to="/home" /> : <HomePage/>
</Route>
<Route exact path="/index">
<Redirect to="/home" /> : <HomePage/>
</Route>
<Route path="/home" component={HomePage}/>
</div>
</Switch>
</Router>
    )
  }

export default Navbar;