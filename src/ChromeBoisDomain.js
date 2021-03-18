import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    let [x, y] = [event.clientX, event.clientY]
    drawChromeBoiAtCoords(x, y);

  }
  
  handleToggleCycling = () => {
    toggleCycling();
  }
  
  handleKeyPress = (event) => {
    let key = event.key;
    if (key === 'a') {
      resize('+');
    } else if (key ==='s') {
      resize('-')
    } else {
      console.log("boo-hoo");
    }
  }
 
  
  render() {
    return (
      <canvas
        onKeyDown={this.handleKeyPress}
        onClick={this.handleToggleCycling}
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
