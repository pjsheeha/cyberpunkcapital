import ChapPage  from './ChapPage.jsx'
import React, {useState,useRef, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
function Chap0(){

  return (

    <ChapPage myUrl={0}></ChapPage>
  )
}

export default Chap0