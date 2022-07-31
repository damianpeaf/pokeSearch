import { useEffect, useState } from 'react';
import { MdDarkMode } from 'react-icons/md';



const stringToBoolean = (value: string | null) => {
    if (!value) return true;

    if (value === 'true') {
        return true
    } else {
        return false;
    }
}
const initialValue = stringToBoolean(localStorage.getItem('darkmode'));

export const useThemeMode = () => {

    const [darkModeEnabled, setdarkModeEnabled] = useState(initialValue);

    useEffect(() => {
        if (darkModeEnabled) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkModeEnabled])


    const toogleDarkMode = () => {
        localStorage.setItem('darkmode', !darkModeEnabled ? 'true' : 'false')

        setdarkModeEnabled((darkMode) => {
            return (!darkMode)
        })
    }

    return {
        toogleDarkMode,
        darkModeEnabled
    }


}