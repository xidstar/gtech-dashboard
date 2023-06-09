import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {Navbar, Sidebar, ThemeSettings, Notification, Profile} from './components';
import {Highlights, Editor, Team, Kanban, Actions, ManageTeam, ColorPicker, Calendar,
   Area, Bar, ColorMapping, GeoMaps, UserProfile, Line, Pie, Stacked, HighestRiskExposures, RecentPOAMs, Indicators, IncidentFactors } from './pages'
import './App.css';

import { useStateContext } from './contexts/ContextProvider';

const App = () => {
  const {activeMenu, themeSettings, notification, currentMode, profile} = useStateContext();

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
          <div className={`dark:bg-slate-700 bg-main-bg min-h-screen w-full 
          ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar />
            </div>
          
          <div className=''>
            
            {themeSettings && <ThemeSettings />}
            {notification && <Notification />}
            {profile && <Profile />}

            <Routes>
              {/* Dashboard  */}
              <Route path="/" element={<Highlights />} />
              <Route path="/highlights" element={<Highlights />} />
              <Route path="/highest-risk-exposures" element={<HighestRiskExposures />} />
              <Route path="/recent-POA&Ms" element={<RecentPOAMs />} />
              <Route path="/incident-factors" element={<IncidentFactors />} />

              {/* Pages */}
              <Route path="/actions" element={<Actions />} />
              <Route path="/indicators" element={<Indicators />} />
              <Route path="/team" element={<Team />} />
              <Route path="/manage-team" element={<ManageTeam />} />
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