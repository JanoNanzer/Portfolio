import "./App.css";
// import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import Home from "./Components/Home/Home";
import HeaderNav from "./Components/HeaderNav/HeaderNav";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Resume from "./Components/Resume/Resume";
import Contact from "./Components/Contact/Contact";
// import Particle from "./Components/Particle/Particle";
import ToTop from "./Components/ToTop/ToTop";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <React.Fragment>
        <Route path={""} component={Home} />
      </React.Fragment> */}
          <HeaderNav />
          <Home />
          <About />
          <Projects />
          <Skills />
          <Resume />
          <Contact />
          <ToTop/>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
