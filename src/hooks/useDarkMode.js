import React, {useEffect} from 'react';

import useLocalStorage from './useLocalStorage';


const useDarkMode = (key) => {
    const [value, setValue] = useLocalStorage(key, false);
    useEffect(() => {
        const item = window.localStorage.getItem(key)
        const body = document.getElementbyId('body');
        
        if (item === false) {
            //remove dark mode class from body element
            body.classList.remove('dark-mode')
        }else {
            //add dark mode class from body element
            body.classList.add('dark-mode')
        }
    })
    return [value, setValue];
}

export default useDarkMode;