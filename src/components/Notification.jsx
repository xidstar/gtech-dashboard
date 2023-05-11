import React from 'react'
import { MdOutlineCancel } from 'react-icons/md';
import { chatData, actionsData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Notification = () => {
  const {setColor, setMode, currentMode, currentColor, setNotification} = useStateContext();

  return (
    <div className='bg-half-transparent w-screen fixed nav-item top-0 right-0'>
      <div className='float-right h-screen dark:text-gray-200 dark:bg-slate-600 bg-white dark:[#484b52] w-400'>
        <div className='flex justify-between items-center p-4 ml-4'>
          <p className='font-semibold text-xl'>Notifications</p>
          <button
            type="button"
            onClick={() => setNotification(false)}
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
            <p className='font-semibold text-lg flex items-center'>
              Chats 
              <span 
                className=' flex items-center justify-center bg-orange-400 w-7 h-7 ml-2 rounded-full text-white text-sm'>
                  {chatData.length}+
              </span>
            </p>
            {chatData.map((item, index) => (
              <button 
                key={index} 
                className='hover:bg-slate-200 hover:dark:text-gray-600 w-full pr-2 pl-2 rounded-xl'
                onClick={() => setNotification(false)}
              >
                <div className="flex items-center justify-left cursor-pointer h-12 w-full">
                  <img className="rounded-full h-10 mr-3 max-w-6" src={item.image} alt="" />
                  <p>{item.message}</p>
                  <p className='mr-0 ml-auto'>{item.time}</p>
                </div>
            </button>
            ))}
        </div>
        <div className="flex-col border-t-1 border-color dark:border-slate-200 p-4 ml-4 mr-4">
            <p className='font-semibold text-lg flex items-center'>
              Actions 
              <span 
                className=' flex items-center justify-center bg-orange-400 w-7 h-7 ml-2 rounded-full text-white text-sm'>
                  {actionsData.length}+
              </span>
            </p>
            <div className=' gap-3'>
                {actionsData.map((item, index) => (
                    <button key={index} className='hover:bg-slate-200 hover:dark:text-gray-600 w-full pr-2 pl-2 rounded-xl'>
                      <p className='flex justify-between p-4'>
                        {item.Title}
                        <span 
                          className='ml-5 p-1 pr-2 pl-2 rounded-2xl text-white text-xs' 
                          style={{background: item.StatusBg}}>
                            {item.Status}
                          </span>
                      </p>
                    </button>
                ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Notification