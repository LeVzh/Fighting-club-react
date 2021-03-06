import React, { Component } from 'react';
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
