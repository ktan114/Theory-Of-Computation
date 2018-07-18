import React, { Component } from 'react';

import './App.css';

class App extends Component {

  drawCanvas() {
    let canvas = document.getElementById('canvas')
    let ctx = canvas.getContext('2d');

    ctx.fillStyle = 'orange';
    ctx.fillRect(0, 0, 300, 300);

    this.drawLines(ctx);
    this.lineText(ctx);
    this.drawCircles(ctx);
    this.circleText(ctx);
  }

  drawLines(ctx) {
    // Off-To-Left
    ctx.beginPath();
    ctx.moveTo(130, 29);
    ctx.lineTo(10, 114);
    ctx.stroke();

    // Off-To-Both
    ctx.beginPath();
    ctx.moveTo(135, 29);
    ctx.lineTo(135, 114);
    ctx.stroke();
    
    // Off-To-Right
    ctx.beginPath();
    ctx.moveTo(150, 29);
    ctx.lineTo(290, 114);
    ctx.stroke();

    // Left-To-Off
    ctx.beginPath();
    ctx.moveTo(20, 114);
    ctx.lineTo(20, 29);
    ctx.lineTo(130, 29);
    ctx.stroke();
    
    // Left-To-Both
    ctx.beginPath();
    ctx.moveTo(20, 114);
    ctx.lineTo(140, 114);
    ctx.stroke();

    // Left-To-Right
    ctx.beginPath();
    ctx.moveTo(20, 114);
    ctx.lineTo(20, 130);
    ctx.lineTo(280, 130);
    ctx.lineTo(280, 100);
    ctx.stroke();

    // Both-To-Off
    ctx.beginPath();
    ctx.moveTo(145, 114);
    ctx.lineTo(145, 29);
    ctx.stroke();

    // Both-To-Left
    ctx.beginPath();
    ctx.moveTo(145, 105);
    ctx.lineTo(20, 105);
    ctx.stroke();
    
    // Both-To-Right
    ctx.beginPath();
    ctx.moveTo(145, 105);
    ctx.lineTo(280, 105);
    ctx.stroke();
    
    // Right-To-Off
    ctx.beginPath();
    ctx.moveTo(280, 105);
    ctx.lineTo(280, 29);
    ctx.lineTo(130, 29);
    ctx.stroke();
    
    // Right-To-Left
    ctx.beginPath();
    ctx.moveTo(285, 105);
    ctx.lineTo(285, 140);
    ctx.lineTo(15, 140);
    ctx.lineTo(15, 105);
    ctx.stroke();

    // Right-To-Both
    ctx.beginPath();
    ctx.moveTo(280, 114);
    ctx.lineTo(140, 114);
    ctx.stroke();
  }

  lineText(ctx) {
    ctx.font = "8px ariel";
    ctx.fillStyle = 'white';
    
    // Off-To-Left
    ctx.fillText("Handle Down", 70, 65);
    
    // Off-To-Both
    ctx.font = "7px ariel";
    ctx.fillText("Hazard Button Pressed", 72, 86);
    
    // Off-To-Right
    ctx.font = "8px ariel";
    ctx.fillText("Handle Up", 185, 65);
    
    // Left-To-Off
    ctx.fillText("Handle Neutral", 10, 25);
    
    // Left-To-Both
    ctx.fillText("Hazard Button Pressed", 40, 106);
    
    // Left-To-Right
    ctx.fillText("Handle Up", 122, 132);
    
    // Both-To-Off
    ctx.font = "7px ariel";
    ctx.fillText("Hazard Button Pressed", 145, 86);
    
    // Both-To-Left
    ctx.font = "8px ariel";
    ctx.fillText("Hazard Button Pressed", 40, 116);
    
    // Both-To-Right
    ctx.fillText("Hazard Button Pressed", 170, 116);
    
    // Right-To-Off
    ctx.fillText("Handle Neutral", 240, 25);
    
    // Right-To-Left
    ctx.fillText("Handle Down", 119, 142);
    
    // Right-To-Both
    ctx.fillText("Hazard Button Pressed", 170, 106);
  }

  drawCircles(ctx) {
    // Off Circle 
    ctx.beginPath();
    ctx.arc(140, 25, 12, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();

    // Left Circle
    ctx.beginPath();
    ctx.arc(20, 110, 12, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();

    // Both Circle
    ctx.beginPath();
    ctx.arc(140, 110, 12, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();
    
    // Right Circle
    ctx.beginPath();
    ctx.arc(280, 110, 12, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();
  }

  circleText(ctx) {
    ctx.fillStyle = "black";
    ctx.font = "10px ariel";

    // Off Text
    ctx.fillText("Off", 132, 29);

    // Left Text
    ctx.fillText("Left", 11, 114);

    // Both Text
    ctx.fillText("Both", 130, 114);

    // Right Text
    ctx.fillText("Right", 269, 114);
    
  }

  render() {
    return (
      <div className="App">
        { this.drawCanvas() }
      </div>
    );
  }
}

export default App;