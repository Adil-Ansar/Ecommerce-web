import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import webfont from "webfontloader";

import './App.css';
import Header from "./component/layout/Header.js";


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
    </Router>
  );
}

export default App;
