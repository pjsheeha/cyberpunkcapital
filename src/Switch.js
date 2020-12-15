import React, { Component } from "react";
import Switch from "react-switch";
import sun from "./images/sun.png";
import moon from "./images/moon.png";
import './App.css';

class SwitchExample extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false,onColor:'#777214',height:18, width:36 };
    this.handleChange = this.handleChange.bind(this);

  }
 
  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <label>
        <Switch uncheckedIcon ={<div><span className = "icon">&nbsp;☽</span></div>}checkedIcon={<div><span className = "icon">&nbsp;☀</span></div>} onChange={this.handleChange} checked={this.state.checked} onColor={this.state.onColor}width={this.state.width} height={this.state.height}/>
      </label>
    );
  }
}

export default SwitchExample;