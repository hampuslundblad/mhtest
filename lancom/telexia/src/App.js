import React from "react";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
//Pages'
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import OurServices from "./pages/OurServices";
import NoMatch from "./pages/Home";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/vara-tjanster" component={OurServices} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
