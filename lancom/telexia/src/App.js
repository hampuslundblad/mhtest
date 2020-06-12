import React from "react";
import NavBar from "./components/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Pages'
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import OurServices from "./pages/OurServices";
import NoMatch from "./pages/Home";
function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/vara-tjanster" component={OurServices} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
