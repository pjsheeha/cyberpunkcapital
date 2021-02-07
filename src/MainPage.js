import ChapPage  from './ChapPage'
import React, {useState,useRef, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
function MainPage(){
  console.log("Ku");
  let { id } = useParams();

  console.log(id);
  let rid = -1;
  if (id ==="chap-0"){
    rid = 0;
  }
  if (id ==="chap-1"){
    rid = 1;
  }

  return (
    <ChapPage myUrl={rid !== -1?rid:(window.localStorage.getItem('chapter')||0)} ></ChapPage>
  )
}

export default MainPage