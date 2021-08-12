import './About.css';
import AboutDetails from './AboutDetails';

const About = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 w-100 main">
                    <h1 className="text-center mt-5 pb-5">About Inguzo</h1>
                    <AboutDetails/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;