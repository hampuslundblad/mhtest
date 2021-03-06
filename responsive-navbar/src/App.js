import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home/home";
import ContactPage from "./pages/ContactPage/ContactPage";
import ServicePage from "./pages/ServicePage/ServicePage";
import NoMatch from "./pages/Nomatch/noMatch";

import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import Footer from "./components/Footer/Footer";

//Guide från https://www.youtube.com/watch?v=l6nmysZKHFU&list=WL&index=17&t=0s
//          <Block background="#74a5d7" />

class App extends React.Component {
  state = {
    sideDrawerOpen: false,
  };
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    } else {
    }
    return (
      <React.Fragment>
        <main className="main" style={{ height: "100%" }}>
          <Router>
            <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen} />
            {backdrop}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/vara-tjanster" component={ServicePage} />
              <Route path="/kontakt" component={ContactPage} />
              <Route component={NoMatch} />
            </Switch>
          </Router>

          <Footer />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
