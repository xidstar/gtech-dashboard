import React, {useEffect} from 'react';
import { AiOutlineMenu  } from 'react-icons/ai';
import { BsBellFill } from 'react-icons/bs';
import { RiSettings5Fill } from 'react-icons/ri';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg'
import {Cart, Chat, Notification, UserProfile, Profile} from '.';
import { useStateContext } from '../contexts/ContextProvider';

import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';

const NavButton = ({title, customFunc, icon, color, dotColor}) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button type='button' 
      onClick={customFunc} 
      style={{color}}
      className="relative text-xl rounded-full p-4 hover:bg-light-gray">
        <span style={{background: dotColor}} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"/>
        {icon}
      </button>
  </TooltipComponent>
)

const Navbar = () => {
  const {activeMenu, setActiveMenu, isClicked, setIsClicked,
     handleClick, screenSize, setScreenSize, themeSettings,
      setThemeSettings, notification, setNotification, currentColor, currentMode, profile, setProfile} = useStateContext();

  const pageData = [
    { Id: 'Page1', Page: 'Highlights' },
    { Id: 'Page2', Page: 'Actions' },
    { Id: 'Page3', Page: 'Customers' },
    { Id: 'Page4', Page: 'Users' },
    { Id: 'Page5', Page: 'Calendar' },
    { Id: 'Page6', Page: 'Kanban' },
    { Id: 'Page7', Page: 'Charts' },
    { Id: 'Page8', Page: 'Maps' }
  ];
  const fields = { value: 'Page' };

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [])

  useEffect(() => {
    if(screenSize <= 900 ) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  
  return (
    <div className='flex justify-between md:h-20 p-5 bg-gray-100 relative dark:bg-[#000d1c]'>
      <NavButton title="Menu" 
                  customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} 
                  color={currentColor} 
                  icon={<AiOutlineMenu />}/>
      <div className='flex justify-between w-full'>
        <div className="search w-4/5">
          <AutoCompleteComponent 
            id="atcelement"   
            dataSource={pageData} 
            fields={fields} 
            placeholder="Search..." 
            autofill={true}
            style={{color: '#999', height: '50px'}}
            className="bg-gray-100 dark::placeholder-gray-500 placeholder:text-xl placeholder:italic w-full dark:bg-[#000d1c]"
          />
        </div>
        <div className="nav-icons flex items-center">
          <NavButton title="Settings" 
                      dotColor="#03c9d7"
                      color={currentColor} 
                      customFunc={() => setThemeSettings(true)} 
                      icon={<RiSettings5Fill />}/>
          <NavButton title="Notifications" 
                      dotColor="#03c9d7"
                      color={currentColor} 
                      customFunc={() => setNotification(true)} 
                      icon={<BsBellFill />}/>
          <TooltipComponent content="Profile" position='BottomCenter'>
              <div className='flex items-center gap-2 ml-2 cursor-pointer hover:scale-105  w-10 h-10'
                    onClick={() => setProfile(true)}>
                    <img 
                      className='rounded-full'
                      src={avatar} />
              </div>
          </TooltipComponent>
        </div>
        
        {isClicked.notification && <Notification />}
        {isClicked.profile && <Profile />}
      </div>
    </div>
  )
}

export default Navbar