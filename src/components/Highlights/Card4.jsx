import React from 'react';
import CardTemplate from './CardTemplate';
import { chatData } from '../../data/dummy';
import {BsChat} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Card4 = () => {
    <CardTemplate /> 

    return (
      <CardTemplate title="Indicators" bgColor="#b0d2c2" height={450} content={(
          <div>
            {chatData.slice(0,5).map((item, index) => (
              <button 
                key={index} 
                className='hover:bg-slate-200 hover:dark:text-gray-600 w-full pr-2 pl-2 rounded-xl'
                onClick={() => {}}
              >
                <Link to="/indicators" className="flex justify-between px-4 py-3 border-b-1">
                  <img className="rounded-full h-8 mr-3 max-w-6" src={item.image} alt="" />
                  <p className='flex items-center text-left'>{item.message} {item.chat ? <span className='pl-1'><BsChat style={{marginLeft: "10px"}} /></span> : ''}  </p>
                  <p className='mr-0 ml-auto text-xs text-right w-[80px]'>{item.time}</p>
                </Link>
            </button>
            ))}
          </div>
        )} />       
    )
}

export default Card4