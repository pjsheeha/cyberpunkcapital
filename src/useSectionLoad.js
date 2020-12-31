import { useEffect, useState } from 'react';
export const useSectionLoad = () => {
    const [section, setSection] = useState(0);
    const [savedBefore, setSavedBefore] = useState(false);

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
        localSaved && setSavedBefore(localSaved)

        localSection && setSection(localSection)
        setMountedComponentSection(true)

    }, []);
    return [section, savedBefore, sectionChanger, savedChanger,mountedComponentSection]
};