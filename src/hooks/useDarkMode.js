import React, {useEffect} from 'react';

import useLocalStorage from './useLocalStorage';


const useDarkMode = () => {
    const [value, setValue] = useLocalStorage(darkMode, false);

}

export default useDarkMode;