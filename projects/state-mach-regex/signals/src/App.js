import React, { Component } from 'react';

import './App.css';

class App extends Component {

  drawCanvas() {
    let canvas = document.getElementById('canvas')
    let ctx = canvas.getContext('2d');

    ctx.fillStyle = 'orange';
    ctx.fillRect(0, 0, 300, 300);
    
    ctx.fillStyle = 'white';
    ctx.fillText("Turn Signal State Machine", 90, 9);

    this.drawLines(ctx);
    this.lineArrowhead(ctx);
    this.lineText(ctx);
    this.drawCircles(ctx);
    this.circleText(ctx);
  }
  
  // Credit for the drawArrowhead method to jwir3: https://gist.github.com/jwir3/d797037d2e1bf78a9b04838d73436197
  drawArrowhead(context, from, to, radius) {
    var x_center = to.x;
    var y_center = to.y;
  
    var angle;
    var x;
    var y;
  
    context.beginPath();
  
    angle = Math.atan2(to.y - from.y, to.x - from.x)
    x = radius * Math.cos(angle) + x_center;
    y = radius * Math.sin(angle) + y_center;
  
    context.moveTo(x, y);
  
    angle += (1.0/3.0) * (2 * Math.PI)
    x = radius * Math.cos(angle) + x_center;
    y = radius * Math.sin(angle) + y_center;
  
    context.lineTo(x, y);
  
    angle += (1.0/3.0) * (2 * Math.PI)
    x = radius *Math.cos(angle) + x_center;
    y = radius *Math.sin(angle) + y_center;
  
    context.lineTo(x, y);
  
    context.closePath();
  
    context.fill();
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
    ctx.lineTo(285, 105);
    ctx.stroke();

    // Left-To-Off
    ctx.beginPath();
    ctx.moveTo(20, 114);
    ctx.lineTo(20, 25);
    ctx.lineTo(130, 25);
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
    ctx.lineTo(280, 25);
    ctx.lineTo(130, 25);
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

  lineArrowhead(ctx) {
    // Off-To-Left
    this.drawArrowhead(ctx, { x: 130, y: 29 }, { x: 32, y: 98 }, 5);

    // Off-To-Both
    this.drawArrowhead(ctx, { x: 130, y: 29 }, { x: 134, y: 94 }, 5);

    // Off-To-Right
    this.drawArrowhead(ctx, { x: 130, y: 29 }, { x: 271, y: 97 }, 5);

    // Left-To-Off
    this.drawArrowhead(ctx, { x: 20, y: 25 }, { x: 122, y: 25 }, 5);

    // Left-To-Both
    this.drawArrowhead(ctx, { x: 20, y: 114 }, { x: 123, y: 114 }, 5);

    // Left-To-Right
    this.drawArrowhead(ctx, { x: 130, y: 29 }, { x: 280, y: 125 }, 4);

    // Both-To-Off
    this.drawArrowhead(ctx, { x: 145, y: 114 }, { x: 145, y: 41 }, 5);
    
    // Both-To-Left
    this.drawArrowhead(ctx, { x: 145, y: 114 }, { x: 35, y: 105 }, 4);

    // Both-To-Right
    this.drawArrowhead(ctx, { x: 145, y: 114 }, { x: 264, y: 105 }, 5);

    // Right-To-Off
    this.drawArrowhead(ctx, { x: 280, y: 25 }, { x: 158, y: 25}, 5);

    // Right-To-Both
    this.drawArrowhead(ctx, { x: 280, y: 120 }, { x: 156, y: 114}, 5);

    // Right-To-Left
    this.drawArrowhead(ctx, { x: 145, y: 29 }, { x: 15, y: 125}, 4);


  }

  lineText(ctx) {
    ctx.font = "8px ariel";
    ctx.fillStyle = 'white';
    
    // Off-To-Left
    ctx.fillText("Handle Down", 70, 65);
    
    // Off-To-Both
    ctx.font = "7px ariel";
    ctx.fillText("Hazard Button Pressed", 71, 86);
    
    // Off-To-Right
    ctx.font = "8px ariel";
    ctx.fillText("Handle Up", 185, 65);
    
    // Left-To-Off
    ctx.fillText("Handle Neutral", 10, 25);
    
    // Left-To-Both
    ctx.fillText("Hazard Button Pressed", 45, 116);
    
    // Left-To-Right
    ctx.fillText("Handle Up", 122, 132);
    
    // Both-To-Off
    ctx.font = "7px ariel";
    ctx.fillText("Hazard Button Pressed", 145, 86);
    
    // Both-To-Left
    ctx.font = "8px ariel";
    ctx.fillText("Hazard Button Pressed", 40, 106);
    
    // Both-To-Right
    ctx.fillText("Hazard Button Pressed", 185, 106);
    
    // Right-To-Off
    ctx.fillText("Handle Neutral", 240, 25);
    
    // Right-To-Left
    ctx.fillText("Handle Down", 119, 142);
    
    // Right-To-Both
    ctx.fillText("Hazard Button Pressed", 160, 116);
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
