import './Contact.css';
import { useHistory } from "react-router-dom";

const Contact = () => {
    let history = useHistory();
    const lolz = (e) => {
        e.preventDefault();
        alert('This option is not yet available!')
        return(
            history.push('/home')
        )
    }
    return (
        <div>
        <div class="newsletter-subscribe">
        <div class="container">
            <div class="intro">
            <h2 class="text-center">Send us your email!</h2>
            <p class="text-center">Send us your email and we will contact you shortly to schedule a conversation.<br/>No worries we value your privacy.</p>
            </div>
            <div class="intro">
        <form class="form-inline" method="">
            <div class="form-group">
        <input class="form-control" type="email" name="email" placeholder="Your Email"/>
            </div>
        <div class="form-group d-flex justify-content-center">
            <button class="btn btn-primary mt-5" type="submit" onClick={lolz}>Subscribe </button>
            </div>
        </form>
        </div>
        </div>
    </div>
    </div>
    )
}

export default Contact;