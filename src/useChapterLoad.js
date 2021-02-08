import { useEffect, useState } from 'react';
import { Route, Switch, Link, Redirect, useLocation } from 'react-router-dom';

export function useChapterLoad (curr) {
    const chapters = [0,1];
    const [chapter, setChapter] = useState(0);
    const [mountedComponentChapter, setMountedComponentChapter] = useState(false)
    const { pathname } = useLocation();

    const setCurr = mode => {
        window.localStorage.setItem('chapter', mode)
        setChapter(mode)
    };

    const chapterChanger = (elem) => {
      console.log(elem);
      if (curr){
        if (curr !== -1){
        setCurr(curr);
        }
    }
    else{
       setCurr(elem);
    }
    };

    useEffect(() => {
        const localChapter = window.localStorage.getItem('chapter');
        // if (pathname !== "/"){
        //     console.log(pathname.slice(6));
        //     setChapter(chapters[Math.min(parseInt(pathname.slice(6)),chapters.length-1)]);
        // }
        // else {
        if (curr){
            if (parseInt(curr) !== localChapter){
            console.log(curr);

            localChapter && setChapter(curr);
            console.log(chapter);
            }
        }
        else{
            console.log("OK");
            localChapter && setChapter(localChapter)

        }
        setMountedComponentChapter(true)

    }, []);
    return [chapter, chapterChanger,mountedComponentChapter]
};