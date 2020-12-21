import logo from './images/logo.png';
import logo2 from './images/logo2.png';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { lightTheme, darkTheme } from "./Themes"
import './App.css';
import  {useDarkMode} from "./useDarkMode";

import React, {useState,useRef, useEffect} from 'react';
import sections from './chapters';
import SwitchExample from './Switch';
function App() {
//TODO:
//Make Select a Chapter -> Select a section, allows user to select a section in their chapter
//Save chapter Progression-> autoputs you on the chosen chapter based on the user's local storage


  const [theme, themeToggler,mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const [elem, setElem]= useState(0); //todo: save your chapter progression
  const chapters = sections.sections;
  const [darkMode, setdarkMode] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }

  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
      

    };
  }, []);
  if(!mountedComponent) return <div/>
  return (
    <ThemeProvider theme={themeMode}>
      <>
      <GlobalStyles/>
    <div>
      
      <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>

        <div ><ul className="sticky-inner"><li><SwitchExample on = {theme!=='light'}onChange={()=>{themeToggler()}} color={'#777214'}/></li><li>{chapters[elem][0].title}</li><li><a href="#chapters" class="grey">Select a Chapter</a></li></ul></div> 
  
</div>
    <section className="ua__content">
        <img src={theme==='dark'?logo2:logo} className="App-logo" alt="Cyberpunk Capital V.1" />

      <div className="wrapper">
      <h1>CYBERPUNK CAPITAL</h1>
      <span class="ua__last-update">Last updated: December 21, 2020</span>
      <p class="ua__text">Welcome and thanks for your interest in Cyberpunk Capital! Karl Marx created Capital Volume 1 to explain commodities, the value-form, and capitalist production. We have it, here, together, as simply as we could organize it, with some informal short summaries to help you understand what it means. The short summaries on the right have been handled by Johnny Silverhand, a Rockerboy, a real cyberpunk who knows what’s what when it comes to translating disgust-at-capitalism. But, just so you know, it’s the full text on the left that’s important/well thought out. </p>
      <div class="ua__item"><div class="ua__item-content"><div class="ua__item-content-left"><h6 class="ua__item-column-title">FULL TEXT</h6></div><div class="ua__item-content-right"><h6 class="ua__item-column-title">QUICK SUMMARY</h6></div></div></div>
      
      </div>
    </section>
    <footer className="l-footer__platforms">
      <div className = "l-content">
        <div>
          <ul className="l-footer__top-nav wide__platforms">
            <li className="l-footer__top-nav-cond"><h1 className="yellow">Select a Section</h1></li>
            <li></li>

  

          <li className="l-footer__top-nav-cond">
            {chapters[elem-1]?(  <button onClick={()=>{setElem(elem-1)}} className="l-footer_button-present" ><span>← Prev Chapter </span></button>):(<span className="faded-yellow">...</span>)}
            </li>
            <li className="l-footer__top-nav-cond">
            {chapters[elem+1]?(  <button onClick={()=>{setElem(elem+1)}} className="l-footer_button-present" ><span>Next Chapter →</span></button>):(<span className="faded-yellow">More coming soon!</span>)}
            </li>
          </ul>
          <ul className="l-footer__logos" id ="chapters">
          
          {chapters.map((chapter,index)=><li><button className ="l-footer_button-present"onClick={()=>{setElem(index)}}><h2 className={elem === index?'faded-yellow':'yellow'}>{chapter[0].title}</h2></button></li>)}
          </ul>
          <ul className="l-footer__links">
            <li><a className = "yellow" target="_blank"href="https://paypal.me/pools/c/8vbGkmm37Q">send a tip!</a></li>
            <li><a className = "yellow" target="_blank"href="https://perebite.com/">my other stuff</a></li>
            <li><a className = "yellow" target="_blank"href="https://www.instagram.com/cyberpunk.capital/">insta</a></li>
            <li><a className = "yellow" target="_blank"href="https://twitter.com/cyberpunkapital/">twitter</a></li>

            <li><a className = "yellow" target="_blank"href="https://www.marxists.org/archive/index.htm">marxists.org</a></li>



          </ul>
        </div>
        <div>

        </div>
      </div>
    </footer>
    
    </div>
    </>
    </ThemeProvider>
    
  );
}

export default App;
