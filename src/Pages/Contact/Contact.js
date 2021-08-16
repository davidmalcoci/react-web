import React from 'react';
import { useHistory } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
    const history = useHistory();

    const handleOnClick = React.useCallback(() => {
        history.push('/home')
    }, [history]);

    return (
        <div>
            <div className="newsletter-subscribe">
                <div className="container">
                    <div className="intro">
                        <h2 className="text-center">Send us your email!</h2>
                        <p className="text-center">
                            Send us your email and we will contact you shortly to schedule a conversation.<br/>
                            No worries we value your privacy.
                        </p>
                    </div>
                    <div className="intro">
                        <form className="form-inline">
                            <div className="form-group">
                                <input className="form-control" type="email" name="email" placeholder="Your Email"/>
                            </div>
                            <div className="form-group d-flex justify-content-center">
                                <button className="btn btn-primary mt-5"
                                        onClick={handleOnClick}>
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
