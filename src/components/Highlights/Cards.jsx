import React from 'react'
import { earningData } from '../../data/dummy'

const Cards = () => {

  return (
    <div className='h-screen'>
        <div className='flex flex-wrap justify-around items-center h-full'>
                {earningData.map((item) => (
                    <div key={item.title} className={`bg-${item.bgColor} text-gray-700 p-4 pt-9 rounded-[15%]
                     lg:w-1/5 min-w-[30%] md:m-2 drop-shadow-xl hover:cursor-pointer hover:scale-105 h-2/6`}>
                        <button type="button" style={{color: item.iconColor, backgroundColor: item.iconBg}}
                        className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'>
                            {item.icon}
                        </button>
                        <p className='text-lf font-semibold mt-1'>
                            {item.title}
                            <span className={`p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white text-xs bg-${item.pcColor} ml-3`}>
                                {item.percentage} 
                            </span>
                        </p>
                        <p className='mt-3'>
                            <span className='text-lf font-semibold text-green-600'>
                                {item.amount}
                            </span>
                            <span className='text-sm text-gray-400 mt-1 ml-1'>
                                new updates
                            </span>
                        </p>
                    </div>
                ))}
            
            </div>
    </div>
  )
}

export default Cards