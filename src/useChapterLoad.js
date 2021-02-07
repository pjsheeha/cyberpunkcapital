import { useEffect, useState } from 'react';
import { Route, Switch, Link, Redirect, useLocation } from 'react-router-dom';

export const useChapterLoad = () => {
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
        setCurr(elem)
    };

    useEffect(() => {
        console.log(pathname);
        const localChapter = window.localStorage.getItem('chapter');
        // if (pathname !== "/"){
        //     console.log(pathname.slice(6));
        //     setChapter(chapters[Math.min(parseInt(pathname.slice(6)),chapters.length-1)]);
        // }
        // else {
        localChapter && setChapter(localChapter)
        
        setMountedComponentChapter(true)

    }, []);
    return [chapter, chapterChanger,mountedComponentChapter]
};