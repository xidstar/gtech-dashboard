import React from 'react';
import CardTemplate from './CardTemplate';


const Card3 = () => {
    <CardTemplate />  

    return (
      <CardTemplate title="Compliance" content={(
        <div className='card-chart'>
            <p className='header-text text-center'>Total Score</p>
            <svg>
              <circle cx="170" cy="170" r="100"></circle>
            </svg>
            <p class="value">93%</p>
        </div>
        )} />       
    )
}

export default Card3