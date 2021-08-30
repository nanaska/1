import logo from "./assets/pizza-logo.svg";
import Button from "./components/Button";
import { Header } from "./components/index";
import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Card from "./pages/Card";
import { Route } from "react-router-dom";
import axios from "axios";
function App() {
  const [data, setData] = useState(0);
  const state = React.useState(null);
  const activeItem = state[0];
  const setActiveItem = state[1];
  return (
    <>
      <div className="adadadad">{data}</div>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" exact component={Home} />
          <Route path="/card" component={Card} />
        </div>
      </div>
    </>
  );
}

export default App;
