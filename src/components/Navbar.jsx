import React, {useEffect} from 'react';
import { AiOutlineMenu  } from 'react-icons/ai';
import { BsBellFill } from 'react-icons/bs';
import { RiSettings5Fill } from 'react-icons/ri';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg'
import {Cart, Chat, Notification, UserProfile} from '.';
import { useStateContext } from '../contexts/ContextProvider';

import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';

const NavButton = ({title, customFunc, icon, color, dotColor}) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button type='button' 
      onClick={customFunc} 
      style={{color}}
      className="relative text-xl rounded-full p-3 pr-5 hover:bg-light-gray">
        <span style={{background: dotColor}} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"/>
        {icon}
      </button>
  </TooltipComponent>
)

const Navbar = () => {
  const {activeMenu, setActiveMenu, isClicked, setIsClicked,
     handleClick, screenSize, setScreenSize, themeSettings,
      setThemeSettings, currentColor, currentMode} = useStateContext();

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
    <div className='flex justify-between md:h-20 p-3 pr-6 bg-gray-100 relative dark:bg-[#000d1c]'>
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
        <div className="nav-icons flex">
          <NavButton title="Settings" 
                      dotColor="#03c9d7"
                      color={currentColor} 
                      customFunc={() => setThemeSettings(true)} 
                      icon={<RiSettings5Fill />}/>
          <NavButton title="Notifications" 
                      dotColor="#03c9d7"
                      color={currentColor} 
                      customFunc={() => handleClick(('notification'))} 
                      icon={<BsBellFill />}/>
          <TooltipComponent content="Profile" position='BottomCenter'>
              <div className='flex items-center gap-2 cursor-pointer pt-1 hover:bg-light-gray rounded-lg'
                    onClick={() => handleClick('userProfile')}>
                    <img 
                      className='rounded-full w-8 h-8 min-w-[32px]'
                      src={avatar} />
                    <p>
                      <span className='text-gray-600 ml-1 text-14 dark:text-[#999] hidden md:block'>ITST</span>
                    </p>
              </div>
          </TooltipComponent>
        </div>
        
        {isClicked.notification && <Notification />}
        {isClicked.UserProfile && <UserProfile />}
      </div>
    </div>
  )
}

export default Navbar