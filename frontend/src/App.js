import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import webfont from "webfontloader";

import './App.css';
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer.js";


function App() {
  React.useEffect(() => {
    webfont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"]
      }
    })
  }, [])
  return (
    <Router>
      <Header />
      <Footer/>
    </Router>
  );
}

export default App;
