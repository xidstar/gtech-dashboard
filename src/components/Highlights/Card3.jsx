import React, {useState} from 'react';
import CardTemplate from './CardTemplate';
import { WebData } from '../../data/dummy';
import DoughnutChart from './DoughnutChart';



const Card3 = () => {

  

    <CardTemplate />  

    const [webData, setWebData] = useState({
      labels: WebData.map((data) => data.application),
      datasets: [
        {
          label: "Web Activity",
          data: WebData.map((data) => data.timeSpent),
          backgroundColor: [
            "#26517c",
            "#ff4ced",
            "#f2562f",
            "#a1da1d",
            "#24a859",
            "#402354",
          ],
          borderColor: "#33373e",
          borderWidth: 1,
        }
      ],
    });
    
    
    return (
      <CardTemplate title="Web" bgColor="#33373e" height={450} content={(
        <div className='card-chart h-full relative flex items-center justify-center'>
            <div style={{ width: "100%", maxWidth: 350 }}>
              <DoughnutChart chartData={webData} />
            </div>
          
        </div>
          
        )} /> 
              
    )
}

export default Card3