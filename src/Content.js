import { Switch, Route, Redirect } from 'react-router-dom';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import HomePage from './Pages/HomePage/HomePage';
import LiveMonitoring from './Pages/LiveMonitoring/LiveMonitoring';

const Content = () => {
    return (
        <Switch>
            <Route path="/contact" component={Contact}/>
            <Route path="/about" component={About}/>
            <Route path="/live" component={LiveMonitoring}/>
            <Route exact path="/">
                <Redirect to="/home"/> : <HomePage/>
            </Route>
            <Route exact path="/index">
                <Redirect to="/home"/> : <HomePage/>
            </Route>
            <Route path="/home" component={HomePage}/>
        </Switch>
    );

}

export default Content;
