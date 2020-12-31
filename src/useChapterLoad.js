import { useEffect, useState } from 'react';
export const useChapterLoad = () => {
    const [chapter, setChapter] = useState(0);
    const [mountedComponentChapter, setMountedComponentChapter] = useState(false)

    const setCurr = mode => {
        window.localStorage.setItem('chapter', mode)
        setChapter(mode)
    };

    const chapterChanger = (elem) => {
      console.log(elem);
        setCurr(elem)
    };

    useEffect(() => {
        const localChapter = window.localStorage.getItem('chapter');
        localChapter && setChapter(localChapter)
        setMountedComponentChapter(true)

    }, []);
    return [chapter, chapterChanger,mountedComponentChapter]
};