import React, {createContext, useContext, useState} from 'react';

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
    const [rows, setRows] = useState([
        { id: 10248, title: 'Cisco Switch Catalyst 9400', status: 'pending...', approvers: '', actionApprove: "Approve", actionReject: "Reject" },
        { id: 345653, title: 'McAfee April 2023 Patch', status: 'pending...', approvers: '', actionApprove: "Approve", actionReject: "Reject" },
        { id: 390457, title: 'Oracle March 2022 Patch', status: 'pending...', approvers: '', actionApprove: "Approve", actionReject: "Reject" },
        { id: 946580, title: 'Deploy Firewall', status: 'pending...', approvers: '', actionApprove: "Approve", actionReject: "Reject" },
        { id: 6545378, title: 'Import Python Flask', status: 'pending...', approvers: '', actionApprove: "Approve", actionReject: "Reject" },
      ]);

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
                rows,
                setRows
            }}>
            {children}
        </StateContext.Provider>
    )
} 

export const useStateContext = () => useContext(StateContext);