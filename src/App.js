import React from 'react';
import './Assets/css/default.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';

//componentscts';

import About from './components/aboutComponent/about';
import Home from './components/homeComponent/home';
import Contact from './components/contactComponent/contact';
import NoMatch from './components/noMatchComponent/nomatch';
import {NavigationBar} from './components/NavigationBar';
import {Layout} from './components/Layout';
import {Jumbotron} from './components/jumbotron';
import {ImageContainer} from './components/ImageContainer';
import {Footer} from './components/footerComponent/footer';

function App() {
  return (
   <React.Fragment>
      <NavigationBar/>
        <Router>
          <Switch>
            <Route  exact path = "/" component={Home}/>
            <Route  exact path = "/about" component={About}/>
            <Route  exact path = "/contact" component={Contact}/>
            <Route  component={NoMatch}/>
          </Switch>
        </Router>
        <Footer/>
      </React.Fragment>
    
  );
}

export default App;
