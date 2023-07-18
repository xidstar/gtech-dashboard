import React from 'react';

import Card1 from '../components/Highlights/Card1';
import Card2 from '../components/Highlights/Card2';
import Card4 from '../components/Highlights/Card4';
import Card6 from '../components/Highlights/Card6';
import Card7 from '../components/Highlights/Card7';
import Card8 from '../components/Highlights/Card8';

const Highlights = () => {
  

  return (
    <div className='highlights dark:bg-slate-700 h-full'>
        <div className='h-full w-[90%] mx-auto'>
            <div className='card-wrapper flex flex-wrap justify-around items-start'>
                <Card1 />
                <Card4 />
                <Card2 /> 
            </div>
            <div className='card-wrapper flex flex-wrap justify-around items-start'>
                <Card6 />
            </div>
            <div className='card-wrapper flex flex-wrap justify-between items-start'>
              <div className="w-full xl:w-[49%]"><Card7 /></div>
              <div className="w-full xl:w-[49%]"><Card8 /></div> 
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