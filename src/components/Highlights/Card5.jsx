import React, {useState} from 'react';
import CardTemplate from './CardTemplate';
import { ApplicationData } from '../../data/dummy';
import BarChart from './BarChart';

const Card5 = () => {
    <CardTemplate />  

    const [applicationData, setApplicationData] = useState({
      labels: ApplicationData.map((data) => data.application),
      datasets: [
        {
          label: "Application Activity",
          data: ApplicationData.map((data) => data.timeSpent),
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
      <CardTemplate title="Applications" bgColor height={450} content={(
        <div className='card-chart h-full relative flex items-center justify-center'>
            <div style={{ width: "100%" }}>
              <BarChart chartData={applicationData} />
            </div>
          
        </div>
          
        )} /> 
              
    )
}

export default Card5