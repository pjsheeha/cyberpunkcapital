import React, { useState } from "react";
import Switch  from "react-switch";

import './App.css';

const SwitchExample = (props) =>{
  const [checked,setChecked]=  useState(false);
  const [onColor,setColor] = useState('#777214');
  const [height,setHeight] = useState(18);
  const [width,setWidth] =  useState(36);

  
 
  function handleChange() {
    setChecked( !checked );
  }


    return (
      <label>
        <Switch  uncheckedIcon ={<div><span className = "icon">&nbsp;☽</span></div>}checkedIcon={<div><span className = "icon">&nbsp;☀</span></div>} onChange={()=>{handleChange();props.onChange();}} checked={checked} onColor={props.color}width={width} height={height}/>
      </label>
    );
  
}

export default SwitchExample;