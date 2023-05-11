import React from 'react';

import Cards from '../components/Highlights/Cards';
import Card1 from '../components/Highlights/Card1';
import Card2 from '../components/Highlights/Card2';
import KanbanCards from '../components/Highlights/KanbanCards';
import Hero from '../components/Highlights/Hero';
import Line from './Charts/Line';

const Highlights = () => {
  

  return (
    <div className='highlights dark:bg-slate-700'>
        <div className=''>
        
            <div className='flex flex-wrap justify-around items-start '>
            
                 <Card1 />
                <Card2 />
                <Card1 /> 
                {/* <Card1 />
                <Card1 />
                <Card1 /> */}
            </div>
        </div>
      {/*
      <Hero />
      <KanbanCards /> */}
      
      {/* <Cards /> */}
      {/* <KanbanCards /> */}
      <Line />

      
      
    </div>
  )
}

export default Highlights