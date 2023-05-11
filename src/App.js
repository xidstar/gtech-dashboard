import React, {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import {Navbar, Footer, Sidebar, ThemeSettings, Notification} from './components';
import {Highlights, Editor, Employees, Kanban, Actions, Users, ColorPicker, Calendar,
   Area, Bar, ColorMapping, GeoMaps, UserProfile, Line, Pie, Stacked} from './pages'
import './App.css';

import { useStateContext } from './contexts/ContextProvider';

const App = () => {
  const {activeMenu, themeSettings, setThemeSettings, notification, setNotification, currentMode} = useStateContext();

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          
          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              <Sidebar />
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar />
            </div>
          )}
          <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full 
          ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar />
            </div>
          
          <div>
            
            {themeSettings && <ThemeSettings />}
            {notification && <Notification />}

            <Routes>
              {/* Dashboard  */}
              <Route path="/" element={<Highlights />} />
              <Route path="/highlights" element={<Highlights />} />

              {/* Pages */}
              <Route path="/actions" element={<Actions />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/users" element={<Users />} />
              <Route path="/user-profile" element={<UserProfile />} />

              {/* Apps */}
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/color-picker" element={<ColorPicker />} />

              {/* Charts */}
              <Route path="/line" element={<Line />} />
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/color-mapping" element={<ColorMapping />} />
              <Route path="/stacked" element={<Stacked />} />

              {/* Maps */}
              <Route path="/geo-maps" element={<GeoMaps />} />
            </Routes>
          </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App