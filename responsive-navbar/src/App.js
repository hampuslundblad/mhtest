import React from "react";

import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Carousel from "./components/Carousel/carousel";
import Footer from "./components/Footer/Footer";
import "./index.css";

import img1 from './assets/1.jpg';
import img2 from './assets/2.png';
const  ArrayOfImg =[img1, img2];

//Guide från https://www.youtube.com/watch?v=l6nmysZKHFU&list=WL&index=17&t=0s

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
      <div style={{ height: "100%" }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}

        <main style={{ marginTop: "5rem" }}>
          <Hero />

          <Service />
          <Carousel imgArray={ArrayOfImg} height={"250px"} width={"250px"} />
          <About />
          <Footer />
        </main>
      </div>
    );
  }
}

export default App;
