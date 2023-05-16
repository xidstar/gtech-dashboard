import React from 'react'
import {BiRadioCircle} from 'react-icons/bi';
import { earningData } from '../../data/dummy';
import CardTemplate from './CardTemplate';

const Card1 = () => {
  const colors = ['#8be78b', '#ff5c8e','#dd8adb', '#03c9d7', '#fb9678'];

    <CardTemplate /> 

    return ( 
      <CardTemplate title="Summary" bgColor="#faf6c5" content={(
        <div>
          {earningData.slice(0, 5).map((item, index) => (
              <button key={index} className={`hover:bg-slate-200 hover:dark:text-gray-600 w-full pr-2 pl-2 rounded-xl`} >
                <div className='flex justify-between p-4 border-b-1'>
                    <div className="text flex items-center">
                        <BiRadioCircle />
                        <p className="text-bold pl-2">{item.title}</p>
                    </div>
                    <div className="text">
                        <p className={`num rounded-xl p-1 pl-2 pr-2 text-sm`}
                        style={{backgroundColor: colors[index]}}>{item.amount}</p>
                    </div>
                </div>
              </button>
          ))}
        </div>
      )} />       
    )
}

export default Card1;