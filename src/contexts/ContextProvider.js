import React, {createContext, useContext, useState} from 'react';
import { BsFlagFill } from 'react-icons/bs';
import { FaCheckCircle } from 'react-icons/fa';

const StateContext = createContext();

const initialState = {
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true);

    const [isClicked, setIsClicked] = useState(initialState);

    const [screenSize, setScreenSize] = useState(undefined);

    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Dark');
    const [themeSettings, setThemeSettings] = useState(false);
    const [notification, setNotification] = useState(false);
    const [profile, setProfile] = useState(false);
    
    const [show, setShow] = useState(true);
    const [userIcon, setUserIcon] = useState();

    const setColor = (color) => {
        setCurrentColor(color); 

        localStorage.setItem('colorMode', color);

        setThemeSettings(false);

        setNotification(false);

        setProfile(false);
    }

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        
        localStorage.setItem('themeMode', e.target.value);

        setThemeSettings(false);

        setNotification(false);

        setProfile(false);
    }

    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]: true})
    }

    return (
        <StateContext.Provider 
            value={{
                activeMenu, 
                setActiveMenu, 
                isClicked, 
                setIsClicked, 
                handleClick, 
                screenSize, 
                setScreenSize,
                currentColor,
                currentMode,
                setColor,
                setMode,
                themeSettings,
                setThemeSettings,
                notification,
                setNotification,
                show,
                setShow,
                profile,
                setProfile,
                userIcon,
                setUserIcon,
            }}>
            {children}
        </StateContext.Provider>
    )
} 

export const useStateContext = () => useContext(StateContext);