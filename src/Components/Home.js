import React, { Component } from 'react';
import Store from './Store';
import Arena from "./Arena";
import TrainingHall from "./TrainingHall";

import './Home.css';

class Home extends Component {
  render() {
    return (
        <div className='home'>
            <h1> Home component </h1>
            <Store />
            <Arena />
            <TrainingHall />
        </div>
      
    );
  }
}

export default Home;