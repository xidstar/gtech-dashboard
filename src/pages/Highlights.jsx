import React from 'react';

import Cards from '../components/Highlights/Cards';
import Card1 from '../components/Highlights/Card1';
import Card2 from '../components/Highlights/Card2';
import Card3 from '../components/Highlights/Card3';
import Card4 from '../components/Highlights/Card4';
import KanbanCards from '../components/Highlights/KanbanCards';
import Hero from '../components/Highlights/Hero';
import Line from './Charts/Line';
import Bar from './Charts/Bar';
import Pie from './Charts/Pie';

const Highlights = () => {
  

  return (
    <div className='highlights dark:bg-slate-700 h-full'>
        <div className='h-full'>
        
            <div className='card-wrapper flex flex-wrap justify-around items-start '>
                <Card1 />
                <Card4 />
                <Card2 /> 
            </div>
            <div className='card-wrapper flex flex-wrap justify-around items-start'>
              <div className='grow h-full'>
                <Line />
              </div>
              <div className='grow h-full'>
                <Pie />
              </div>
            </div>
        </div>
      {/*
      <Hero />
      <KanbanCards /> */}
      
      {/* <Cards /> */}
      {/* <KanbanCards /> */}
      

      
              
      
    </div>
  )
}

export default Highlights