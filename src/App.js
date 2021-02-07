import './App.css';
import  {useDarkMode} from "./useDarkMode";
import  {useChapterLoad} from "./useChapterLoad";
import  {useSectionLoad} from "./useSectionLoad";
import Main from './routes';

import React, {useState,useRef, useEffect} from 'react';


function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}
export default App;
