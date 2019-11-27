import React from 'react';
import {Route} from "react-router-dom";
import "./index.css";

import Navigation from "./Components/Navigation/Navigation";
import Landing from "./Components/Home/Landing";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Navigation />

      <Route path="/" exact render={() => {
        return <Landing />
      }}/>

      <Route path="/contact" render={() => {
        return <Contact />
      }}/>

      <Route path="/portfolio" render={() => {
        return <Portfolio />
      }}/>
      <Footer />
    </div>
  );
}

export default App;
