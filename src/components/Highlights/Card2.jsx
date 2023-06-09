import React from 'react';
import CardTemplate from './CardTemplate';
import { actionsData } from '../../data/dummy';
import { Link } from 'react-router-dom';

const Card2 = () => {

    <CardTemplate /> 

  return (
    <CardTemplate title="Actions" bgColor="#bab7c0" height={450} content={(
        <div>
          {actionsData.map((item, index) => (
                <button key={index} className='hover:bg-slate-200 hover:dark:text-gray-600 w-full pr-2 pl-2 rounded-xl'>
                    <Link to="/actions" className='flex justify-between p-4 border-b-1'>
                      <p className='text-left'>{item.Title}</p>
                      <span 
                        className='ml-5 p-1 pr-2 pl-2 rounded-2xl text-white text-xs' 
                        style={{background: item.StatusBg}}>
                        {item.Status}
                      </span>
                    </Link>
                </button>
            ))}
        </div>
      )} />       
  )
}

export default Card2