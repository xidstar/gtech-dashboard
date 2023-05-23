import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/avatar5.png';
import {FaSignOutAlt, FaQuestionCircle, FaInfoCircle, FaTools} from 'react-icons/fa';

const Profile = () => {
    const {setProfile} = useStateContext();

    return (
        <div className='bg-half-transparent w-screen fixed nav-item top-0 right-0'>
          <div className='float-right h-screen dark:text-gray-200 dark:bg-slate-600 bg-white dark:[#484b52] w-400'>
            <div className='flex justify-between items-center p-4 ml-4'>
             <div className="flex items-center">
             <img 
                  className='rounded-full w-10 h-10'
                  src={avatar} />
                  <p className="pl-3 font-semibold text-xl">Hi, Chris!</p>
             </div>
              <button
                type="button"
                onClick={() => setProfile(false)}
                style={{
                  color: 'rgb(153, 171, 180)',
                  borderRadius: '50%'
                }}
                className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray'
              >
                  <MdOutlineCancel />
              </button>
            </div>
            <div className="flex-col border-t-1 border-color dark:border-slate-200 p-4 ml-4 mr-4">
                <button className='hover:bg-slate-200 hover:dark:text-gray-600 w-full rounded-xl text-lg flex'>
                <p className="flex items-center p-3"><FaQuestionCircle style={{fontSize: "20px"}} /> <span className="pl-3">Preferences</span> </p>
                </button>
            </div>
            <div className="flex-col border-t-1 border-color dark:border-slate-200 p-4 ml-4 mr-4">
                <button className='hover:bg-slate-200 hover:dark:text-gray-600 w-full rounded-xl text-lg flex'>
                <p className="flex items-center p-3"><FaTools style={{fontSize: "20px"}} /> <span className="pl-3">Support</span> </p>
                </button>
            </div>
            <div className="flex-col border-t-1 border-color dark:border-slate-200 p-4 ml-4 mr-4">
                <button className='hover:bg-slate-200 hover:dark:text-gray-600 w-full rounded-xl text-lg flex'>
                <p className="flex items-center p-3"><FaInfoCircle style={{fontSize: "20px"}} /> <span className="pl-3">About</span> </p>
                </button>
            </div>
            <div className="flex-col border-t-1 border-color dark:border-slate-200 p-4 ml-4 mr-4">
                <button className='hover:bg-slate-200 hover:dark:text-gray-600 w-full rounded-xl text-lg flex'>
                <p className="flex items-center hover:text-red-600 p-3"><FaSignOutAlt style={{fontSize: "20px"}} /> <span className="pl-3">Sign Out</span> </p>
                </button>
                
            </div>
          </div>
        </div>
      )
}

export default Profile