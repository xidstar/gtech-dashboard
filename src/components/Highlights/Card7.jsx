import React from 'react'
import CardTemplate from './CardTemplate';
import { Line } from 'react-chartjs-2'

// defaults.global.tooltips.enabled = false
// defaults.global.legend.position = 'bottom'

const Card7 = () => {
    <CardTemplate />  
    
    
    return (
      <CardTemplate title="Incidents" bgColor="#c3c3ab" height={550} style={{margin: 0}} content={(
        <div className='card-chart h-full relative flex items-center justify-center'>
            <div style={{ width: "100%" }}>
            <Line
                data={{
                labels: ['RiskScore', 'Espionage', 'IP Theft', 'Sentimental Analysis', 'Criminal', 'Financial'],
                datasets: [
                    {
                    label: 'Criminal',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                    ],
                    borderWidth: 1,
                    },
                    {
                      label: 'Financial',
                      data: [47, 52, 67, 58, 9, 50],
                      backgroundColor: '#02692d',
                      borderColor: '#62b599',
                    },
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