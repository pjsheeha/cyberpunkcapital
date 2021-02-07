import logo from './images/logo.png';
import logo2 from './images/logo2.png';
import 'react-toastify/dist/ReactToastify.css';
import DOMPurify from "dompurify";
import ReactTooltip from 'react-tooltip';
import { Route, Switch, Link, Redirect, useLocation } from 'react-router-dom';


import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { lightTheme, darkTheme } from "./Themes"
import './App.css';
import  {useDarkMode} from "./useDarkMode";
import  {useChapterLoad} from "./useChapterLoad";
import  {useSectionLoad} from "./useSectionLoad";

import gF from "./images/generalformofvalue.png";
import mF from "./images/moneyformofvalue.png";
import gF2 from "./images/generalformofvaluedark.png";
import mF2 from "./images/moneyformofvaluedark.png";

import { ToastContainer, toast } from 'react-toastify';
import React, {useState,useRef, useEffect} from 'react';
import sections from './chapters';
import SwitchExample from './Switch';
function App() {
//TODO:
//Make Select a Chapter -> Select a section, allows user to select a section in their chapter
//Save Section https://codesandbox.io/s/github/codedailyio/StickyHeaderSections

  const [theme, themeToggler,mountedComponent] = useDarkMode();
  const [chapter, chapterChanger,mountedComponentChapter] = useChapterLoad();
  const [section, savedBefore,sectionChanger, savedChanger,mountedComponentSection] = useSectionLoad();
  const { pathname } = useLocation();
  const imgs = {'chap-1':{'light':[gF, mF],'dark':[gF2, mF2]}};
  const [imgVal, setimgVal] = useState(0);
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const elem = parseInt(chapter) || 0;
  const subelem = parseInt(section) || 0;
  const sB4 = savedBefore || false;
  const [down,setDown] = useState("down");

//  const [elem, setElem]= useState(0); //todo: save your chapter progression
  const chapters = sections;

  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);


   const executeScroll = () => ref.current.scrollIntoView()    
  function Capitalize(str){
    return str.toUpperCase() ;
    }
  function addLinks() {
    return (    
      <ul>
      {chapters[elem].map((sect, index)=><li><a href={"#"+sect.name}>{sect.sectHeader}</a></li>)}  
    

    </ul>);
  }
  function chapterSection(){
    function dollar(index,len){
      if (len > 1 && index !== len-1){
        return (<div><h3  className="faded-yellow center no-space">----------</h3><br></br></div>);
      }
    }
    function scrubImg(t){
      let ind= 0;
      let re = t;
      while (ind < 10){
      re = re.replace('img'+ind.toString(),'')
      ind+=1;
      }
      return re;

    }
    function imgChecker(t){
      if (t.text.includes("img")){
        let im = imgs['chap-'+(elem).toString()][theme][parseInt(t.text[t.text.indexOf("img")+3])];
        let str= '<img className="img-logic" style="    max-width: 100%;position: relative;max-height: 300px;min-height: 100px;padding: 0px;margin: 0 auto;" src='+im+'></img></>';
        return str;

      }
      else{
        return "";
      }
    }
    return (chapters[elem].map((sect, index)=>
    
    <><div className="ua__item-title" id = {sect.name} ><h6 className="title" >{Capitalize(sect.header)}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6><a className="save-button inline-button" tabindex="0" onClick={()=>{sectionChanger(index); chapterChanger(elem);notifSave(index);savedChanger();}} onKeyPress={()=>{sectionChanger(index);notifSave(index);chapterChanger(elem);savedChanger();} } data-tip="click - save spot"><b>⎘</b></a></div>
    {sect.text.map((t,index)=>
    <div>
    <div class="ua__item-content">

      <div class="ua__item-content-left paragraph-space" dangerouslySetInnerHTML={{ __html: imgChecker(t)+DOMPurify.sanitize(scrubImg(t.text))}} >

      </div>
      <div class="ua__item-content-right paragraph-space" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(t.altText)}}></div>

    </div>{dollar(index, sect.text.length)
    }
    </div>
    )}

    </>));
  }
  function createChapSections() {
    return (    
      <>
      <ol>
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
    </ol>
    </>);
  }

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
const notify = () => toast(<p>Load State Successful: {chapters[elem][subelem].header} <br></br><sub>note- click here to warp there</sub></p>);
const notify2 = () => toast(<p>Click a '⎘' next to a section heading to save your progress. Auto-saves at chapter progression. Clearing your browser cache will delete your save!</p>);
const notify3 = (newSect) => toast(<p>Save-state successful </p>);

  useEffect(() => {
    if (mountedComponentChapter){
      sB4 && (pathname==="/" || pathname.slice(6)===elem.toString())?notify(): notify2()
      
    };
  }, [mountedComponentChapter]);
  function notifSave(sect){
    sectionChanger(sect);

    notify3(sect);
  }


  if(!mountedComponent && !mountedComponentChapter && !mountedComponentSection) return <div/>
  return (
    <ThemeProvider theme={themeMode}>
      <>
      <GlobalStyles/>
    <div>
      
      <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>

        <div ><ul className={down==="down"?"sticky-inner":"sticky-inner "+down}>{down==="up"?<li>o</li>:<SwitchExample on = {theme!=='light'}onChange={()=>{themeToggler()}} color={'#777214'}/>}<li><a href="#select-chapter" className="grey">{elem===0?'Selected Prefaces':'Chapter '+elem}</a></li><li><a class="grey">
<div class="dropdown">
  <button class="dropbtn">Select a Section</button>
  <div class="dropdown-content">
    {addLinks()}

  </div>
</div></a></li></ul></div> 
  
</div>
    <section className="ua__content">
        <img src={theme==='dark'?logo2:logo} className="App-logo" alt="Cyberpunk Capital V.1" />

      <div className="wrapper">
      <h1 >CYBERPUNK CAPITAL</h1>
      <span class="ua__last-update">Last updated: February 7th, 2021</span>
      <p class="ua__text">Welcome and thanks for your interest in Cyberpunk Capital! Karl Marx created Capital Volume 1 to explain commodities, the value-form, and capitalist production. We have it, here, together, as simply as we could organize it, with some informal short summaries to help you understand what it means. The short summaries on the right have been handled by Johnny Silverhand, a Rockerboy, a real cyberpunk who knows what’s what when it comes to translating disgust-at-capitalism. But, just so you know, it’s the full text on the left that’s important/well thought out. This version of Capital Volume 1 was translated by Hans Ehrbar. <sub>Note: This is not corpo approved and we are not endorsed or affiliated with CDProjektRed.</sub>  </p>
      <h2 id="top" className="center">{(chapters[elem][0].title).toUpperCase()}</h2>
      <h2  className="faded-yellow center no-space">――――――――――――</h2>
      <br></br>
      <div class="ua__item"><div class="ua__item-content"><div class="ua__item-content-left"><h6 class="ua__item-column-title">FULL TEXT</h6></div><div class="ua__item-content-right"><h6 class="ua__item-column-title">QUICK SUMMARY</h6></div></div></div>
      <div class="ua__item-title"></div>
      {chapterSection()}
      </div>

    </section>
    <footer className="l-footer__platforms">
      <div className = "l-content">
        <div>
          <ul className="l-footer__top-nav wide__platforms">
            <li className="l-footer__top-nav-cond"><h1 className="yellow">Select a Chapter</h1></li>
            <li></li>

  

          <li className="l-footer__top-nav-cond" id="select-chapter">
            {chapters[elem-1] ?(  <a className = "save-button" href="#top" onClick={()=>{chapterChanger(elem-1); notifSave(0);}} >← Previous Chapter </a>):(<span className="faded-yellow">...</span>)}
            </li>
            <li className="l-footer__top-nav-cond">
            {chapters[elem+1]?(  <a className = "save-button" href="#top" onClick={()=>{chapterChanger(elem+1);notifSave(0);}} >Next Chapter →</a>):(<span className="faded-yellow">More coming soon!</span>)}
            </li>
          </ul>
          <ul className="l-footer__logos" id ="chapters">
          
          {chapters.map((chap,index)=><li><a href="#top"className ="l-footer_button-present"onClick={()=>{chapterChanger(index);notifSave(0);}}><h2 className={ elem === index?'faded-yellow':'yellow'}>{Capitalize(chap[0].title)}</h2></a></li>)}
          </ul>
          <ul className="l-footer__links">
            <li><a className = "yellow" target="_blank"href="https://paypal.me/pools/c/8vbGkmm37Q">send a tip!</a></li>
            <li><a className = "yellow" target="_blank"href="https://perebite.com/">my other stuff</a></li>
            <li><a className = "yellow" target="_blank"href="https://www.instagram.com/cyberpunk.capital/">insta</a></li>
            <li><a className = "yellow" target="_blank"href="https://twitter.com/cyberpunkapital/">twitter</a></li>

            <li><a className = "yellow" target="_blank"href="https://www.marxists.org/archive/index.htm">marxists.org</a></li>
            <li><a className = "yellow" target="_blank"href="https://content.csbs.utah.edu/~ehrbar/akmc.htm">hans ehrbar translation</a></li>
            <li><a className = "yellow" target="_blank"href="mailto:peter@perebite.com">email me</a></li>



          </ul>
        </div>
        <div>

        </div>
      </div>
    </footer>
    
    </div>
    </>
    <div>
    <ReactTooltip />

    <ToastContainer closeOnClick={false} onClick={(e) => {
      e.preventDefault();
      window.location.href='#'+chapters[elem][subelem].name;
      }} />

      </div>
    </ThemeProvider>
    
  );
}

export default App;
