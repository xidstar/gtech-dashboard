import React from 'react'
import CardTemplate from './CardTemplate';
import { PolarArea } from 'react-chartjs-2'


const Card7 = () => {
    <CardTemplate />  
    
    
    return (
      <CardTemplate title="Alerts" bgColor="darkgray" height={550} content={(
        <div className='card-chart h-full relative flex items-center justify-center'>
            <div style={{ width: "100%" }}>
            <PolarArea
                data={{
                labels: ['RiskScore', 'Espionage/IP Theft', 'Sentimental Analysis', 'Criminal', 'Financial'],
                datasets: [
                    {
                    label: 'Criminal',
                    data: [12, 19, 11, 14, 20],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(255, 206, 86, 0.7)',
                        'rgba(75, 192, 192, 0.7)',
                        'rgba(153, 102, 255, 0.7)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                    ],
                    borderWidth: 1,
                    },
                    // {
                    //   label: 'Financial',
                    //   data: [47, 52, 67, 58, 9, 50],
                    //   backgroundColor: 'orange',
                    //   borderColor: 'red',
                    // },
                ],
                }}
                height={400}
                width={600}
                options={{
                maintainAspectRatio: false,
                scales: {
                    yAxes: [
                    {
                        ticks: {
                        beginAtZero: true,
                        },
                    },
                    ],
                },
                legend: {
                    labels: {
                    fontSize: 25,
                    },
                },
                }}
            />
            </div>
          
        </div>
          
        )} /> 
              
    )
}

export default Card7