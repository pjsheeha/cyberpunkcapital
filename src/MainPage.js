import ChapPage  from './ChapPage'
import React, {useState,useRef, useEffect} from 'react';

function MainPage(){
  console.log("Ku");
  return (
    <ChapPage myUrl={window.localStorage.getItem('chapter')||0} ></ChapPage>
  )
}

export default MainPage