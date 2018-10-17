import React, { Component } from 'react';
import Store from './Store';
import Arena from "./Arena";
import TrainingHall from "./TrainingHall";

import './css/Home.css';

class Home extends Component {
  render() {
    return (
        <div className='home'>
            <Store />
            <Arena />
            <TrainingHall />
        </div>
      
    );
  }
}

export default Home;