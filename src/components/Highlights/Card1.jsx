import React from 'react'
import {BiRadioCircle} from 'react-icons/bi';
import { earningData } from '../../data/dummy';
import CardTemplate from './CardTemplate';

const Card1 = () => {

    <CardTemplate /> 

    return ( 
      <CardTemplate title="Summary" content={(
        <ul>
          {earningData.slice(0, 5).map((item, index) => (
              <li key={index} className={`bg-${item.bgColor} flex justify-between items-center p-3 mb-3 rounded-2xl`}>
                  <div className="text flex items-center">
                      <BiRadioCircle />
                      <p className="text-bold pl-2">{item.title}</p>
                  </div>
                  <div className="text">
                      <p className="num bg-slate-100 rounded-xl p-1 pl-2 pr-2 text-sm">{item.amount}</p>
                  </div>
              </li>
          ))}
        </ul>
      )} />       
    )
}

export default Card1;