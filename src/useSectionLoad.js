import { useEffect, useState } from 'react';
import { Route, Switch, Link, Redirect, useLocation } from 'react-router-dom';
import  {useChapterLoad} from "./useChapterLoad";

export const useSectionLoad = () => {
    const [section, setSection] = useState(0);
    const [savedBefore, setSavedBefore] = useState(false);
    const { pathname } = useLocation();
    const [chapter] = useChapterLoad();
    const [mountedComponentSection, setMountedComponentSection] = useState(false)

    const setCurr = mode => {
        window.localStorage.setItem('section', mode)
        setSection(mode);
    };

    const sectionChanger = (elem) => {
      console.log(elem);
        setCurr(elem)
    };

    const savedChanger = () => {
        setSCurr(true);
    }
    const setSCurr = mode => {
        window.localStorage.setItem('saved', mode)

        setSavedBefore(true);
    };

    useEffect(() => {
        const localSection = window.localStorage.getItem('section');
        const localSaved = window.localStorage.getItem('saved');
        const localChapter = window.localStorage.getItem('chapter');

        // if (pathname !== "/"){
            
            localSaved && setSavedBefore(localSaved);



            // if (pathname.slice(6) === localChapter.toString()){
            localSection && setSection(localSection);
            //localSection && setSection(0);

            // }
            // else{
            //     localSection && setSection(0);

            // }
        // }
        // else{
        // localSaved && setSavedBefore(localSaved)

        // localSection && setSection(localSection)
        // }
        setMountedComponentSection(true)

    }, []);
    return [section, savedBefore, sectionChanger, savedChanger,mountedComponentSection]
};