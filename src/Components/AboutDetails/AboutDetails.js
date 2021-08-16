import React from 'react';
import './AboutDetails.css';

const AboutDetails = () => {
    return (
        <div className="container my-5 poppins-font-family">
            <div className="row">
                <div className="col-md-6 p-4 p-sm-5 order-2 order-sm-1">
                    <h1 className="h2 mb-4 our-mission">
                        Our mission and your mission should you choose to accept it...
                    </h1>
                    <p className="text-secondary catering-the-individual">
                        Catering to the individualistic needs of each student
                    </p>
                    <br/>
                    <p>We are passionate about what we do and strive for excellence every single day.</p>
                </div>
                <div className="col-md-6 p-0 text-center order-1 order-sm-2">
                    <img
                        src="//images.pexels.com/photos/2467506/pexels-photo-2467506.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        className="w-100 img-fluid"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}

export default AboutDetails;
