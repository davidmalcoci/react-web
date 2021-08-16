import React from 'react';
import AboutDetails from '../../Components/AboutDetails/AboutDetails';
import './About.css';

const About = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 w-100 about-details-container">
                        <h1 className="text-center mt-5 pb-5">About Inguzo</h1>
                        <AboutDetails/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
