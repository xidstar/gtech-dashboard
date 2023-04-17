import React from 'react';
import ReactDOM from "react-dom";
import {Link, NavLink} from 'react-router-dom';
import {SiShopware} from 'react-icons/si';
import {MdOutlineCancel} from 'react-icons/md';
import {TooltipComponent}from '@syncfusion/ej2-react-popups';
import { AccordionComponent } from '@syncfusion/ej2-react-navigations';
import logo from '../data/logo.png'

import {links} from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const {activeMenu, setActiveMenu, screenSize, currentColor} = useStateContext();
  const handleCloseSidebar = () => {
    if(activeMenu && screenSize <= 900) {
      setActiveMenu(false)
    } 
  }
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    
    <div className='h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb10'>
      
      
    
      {activeMenu && (
        <>
          <div className="flex justify-between items-center dark:bg-[#000d1c] dark:text-gray-200 text-slate-900 bg-gray-200">
            <Link to='/' onClick={handleCloseSidebar} className="items-center gap-3 p-3 h-20 w-5/6 ml-0 flex text-xl
             font-extrabold tracking-tight">
              <img 
                className='rounded-full w-8 h-8'
                style={{width: '50px', height: 'auto'}}
                src={logo} /><span>Insider Threat Portal</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button type='button' 
                onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} 
                className="text-xl rounded-full p-3 hover:bg-light-gray block md:hidden
                dark:bg-[#000d1c] dark:text-gray-200 text-slate-900 bg-gray-200">
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>

          <AccordionComponent className='!border-none dark:text-gray-200 dark:bg-secondary-dark-bg'>
            {links.map((item) => (
              <div key={item.title} className="dark:text-gray-100 ">
                <p className='text-gray-400 m-3 mt-4 uppercase'>
                  {item.title}
                </p>
                <div className='w-100 divide-y dark:text-gray-600 '>
                  {item.links.map((link) => (
                    <NavLink to={`/${link.name}`} key={link.name} 
                      onClick={handleCloseSidebar}
                      style={({isActive}) => ({ color: isActive ? currentColor : ''})}
                      className={`flex items-center text-[16px] w-100 hover:bg-light-gray ${({isActive}) => isActive ? activeLink : normalLink}`}>
                       <span className=' ml-5'>{link.icon}</span>
                       <span className='capitalize m-3'>{link.name}</span> 
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </AccordionComponent>



          {/* <div className='mt-10'>
            {links.map((item) => (
              <div key={item.title}>
                <p className='text-gray-400 m-3 mt-4 uppercase'>
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink to={`/${link.name}`} key={link.name} onClick={handleCloseSidebar}
                  className={({isActive}) => isActive ? activeLink : normalLink}>
                     {link.icon}
                     <span className='capitalize'>{link.name}</span> 
                  </NavLink>
                ))}
              </div>
            ))}
          </div> */}
        </>
      )}
    </div>
  )
}

export default Sidebar