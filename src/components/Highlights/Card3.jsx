import React from 'react';
import CardTemplate from './CardTemplate';
import activity from '../../data/application-activity.png'


const Card3 = () => {
    <CardTemplate />  

    return (
      <CardTemplate title="Compliance" bgColor="#2d2d2e" content={(
        <div className='card-chart h-full relative flex items-center'>
            <img src={activity} className='w-full h-auto rounded-xl max-h-[360px]' alt="" />
            {/* <svg style={{height: "100%", width: "100%"}}>
              <circle cx="220" cy="190" r="100"></circle>
            </svg>
            <p className='header-text text-center'>Total Score</p>
            <p class="value">93%</p> */}
        </div>
        )} />       
    )
}

export default Card3