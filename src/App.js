import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import Login from "./components/Auth/Login/Login";
import Signup from "./components/Auth/Signup/Signup";

class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" exact element={<Layout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    );
  }
}

export default App;
