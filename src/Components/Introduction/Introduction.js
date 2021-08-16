import React from 'react';
import { Link } from 'react-router-dom';
import './Introduction.css';

const Introduction = () => {
    return (
        <section id="introduction">
            <div className="container">
                <div className="row fill-viewport align-items-center">
                    <div className="col-sm-12 col-md-6">
                        <h1 className="text-light">Coding on steroids</h1>
                        <p className="text-white-60">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vestibulum in rutrum eros, in consequat nulla. Donec ac porttitor tortor.
                        </p>
                        <Link to='/about' className="btn btn-dark text-light">Give it a spin</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Introduction;
