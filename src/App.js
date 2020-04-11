import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Pages
import Home from './pages/homePage';
import About from './pages/aboutPage';
import Contact from './pages/contactPage';
import NoMatch from './pages/noMatchPage';
import LuftaElement from './pages/lufta-element';
import Rotavdrag from './pages/rotavdrag';
import Sammarbetspartners from './pages/sammarbetspartners';


//Components
import NavigationBar from './components/navigationbar';
import Header from './components/header';
import NavBar2 from './components/navigationbarRouter';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Router>
        <NavBar2 />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutPage" component={About} />
          <Route exact path="/contactPage" component={Contact} />
          <Route exact path="/lufta-element" component={LuftaElement} />
          <Route exact path="/rotavdrag" component={Rotavdrag} />
          <Route exact path="/sammarbetspartners" component={Sammarbetspartners} />

          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>

  );
}
export default App;
