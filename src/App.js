import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Content from './Content';
import './App.css';

export default function App() {
    return (
        <Router>
            <Navbar/>
            <Content/>
            <Footer/>
        </Router>
    );
}
