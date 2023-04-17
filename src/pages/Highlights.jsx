import React from 'react';
import {GoPrimitiveDot} from 'react-icons/go'
import {Stacked, Pie, Button, SparkLine} from '../components';
import { earningData, SparklineAreaData, ecom } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import Background from '../data/hero.jpg'
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';
import { highlightsData, kanbanGrid } from '../data/dummy';

const Highlights = () => {
  const {currentColor} = useStateContext();

  const highlightCards = (props) => {
    return (
      <div className='flex mt-3 mb-3 flex-wrap justify-around items-center'>
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg w-full md:w-fit
              p-4 pt-9 mb-2 rounded-2xl md:m-2 hover:cursor-pointer">
              <button type="button" style={{color: props.iconColor, backgroundColor: props.iconBg}}
              className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'>
                {props.icon}
              </button>
                <p className='text-lf font-semibold mt-1'>
                  {props.title}
                  <span className={`p-1.5 hover:drop-shadow-xl rounded-full text-white text-xs bg-red-400 ml-3`}>
                    {props.percentage} 
                  </span>
                </p>
                <p className='mt-3'>
                  <span className='text-lf font-semibold text-green-600'>
                    {props.amount}
                  </span>
                  <span className='text-sm text-gray-400 mt-1 ml-1'>
                     new updates
                  </span>
                </p>
            </div>
        </div>
    )
  }

  return (
    <div className='mt-20 md:mt-12 w-4/5 mr-auto ml-auto lg:max-w-screen-xl'>
      <div className='flex flex-wrap flex-col lg:flex-nowrap justify-center m-3'>

        {/* Hero */}

        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-64 md:h-44 rounded-xl w-full md:ml-auto md:mr-auto
          p-8 pt-9 mt-3 bg-hero-pattern bg-no-repeat bg-cover bg-center" style={{backgroundImage: `url(${Background})`}}>
          <div className='flex justify-between h-full items-end md:items-center'>
            <div className=''>
              <p className='font-bold text-gray-500'>Report</p>
              <p className='text-2xl'>1,439 Updates</p>
            </div>
            <div className=''>
              <Button color="white" bgColor={currentColor} text="Download" borderRadius="10px" size="md"/>
            </div>
          </div>
        </div>

        {/* Kanban */}

        <div className='mt-24 p-2 md:p-10 bg-white rounded-3xl hidden lg:block dark:text-gray-200 dark:bg-secondary-dark-bg'> 
          <KanbanComponent
            id='kanban'
            dataSource={highlightsData}
            cardSettings={{contentField: 'icon', headerField: 'Id', template: highlightCards.bind(this)}}
            keyField="Status"
            style={{borderRadius: '10px', paddingTop: '10px'}}
          >
            <ColumnsDirective>
              {kanbanGrid.map((item, index) => (
                <ColumnDirective key={index} {...item} />
              ))}
            </ColumnsDirective>
          </KanbanComponent>
        </div>

        {/* Cards */}

        <div className='flex mt-3 mb-3 flex-wrap justify-around items-center lg:hidden'>
          {earningData.map((item) => (
            <div key={item.title} className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg w-full md:w-fit
              p-4 pt-9 mb-2 rounded-2xl lg:w-1/5 min-w-[30%] md:m-2 hover:drop-shadow-xl hover:cursor-pointer">
              <button type="button" style={{color: item.iconColor, backgroundColor: item.iconBg}}
              className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'>
                {item.icon}
              </button>
                <p className='text-lf font-semibold mt-1'>
                  {item.title}
                  <span className={`p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white text-xs bg-red-400 ml-3`}>
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

      {/* Alerts */}

      <div className='flex gap-10 frex-wrap justify-center'>
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
            <div className='flex justify-between'>
              <p className='font-semibold text-xl'>Alerts</p>
              <div className='flex items-center gap-4'>
                <p className='fex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                  <span><GoPrimitiveDot /></span>
                  <span>Risk Score</span>
                </p>
                <p className='fex items-center gap-2 text-green-400 hover:drop-shadow-xl'>
                  <span><GoPrimitiveDot /></span>
                  <span>Sentiment Analysis</span>
                </p>
              </div>
            </div>
            <div className='mt-10 flex gap-10 flex-wrap justify-center'>
              <div className='border-r-1 border-color m-4 pr-10'>
                <div>
                  <p>
                    <span className='text-3xl font-semibold'>Financial</span>
                    <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white text-xs bg-green-400 ml-3'>21%</span>
                  </p>
                  <p className='text-gray-500 mt-1'>
                    40%
                  </p>
                </div>
                <div className='mt-8'>
                  <p>
                    <span className='text-3xl font-semibold'>IP Theft</span>
                    <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white text-xs bg-red-400 ml-3'>3%</span>
                  </p>
                  <p className='text-gray-500 mt-1'>
                    25%
                  </p>
                </div>

                <div className="mt-5">
                  {/* <SparkLine 
                    currentClor="blue"
                    id="line-sparkline"
                    type="Line"
                    height="80px"
                    width="250px"
                    data={SparklineAreaData}
                    color="blue"
                  /> */}
                </div>
                <div className='mt-10'>
                  <Button 
                    color="white"
                    bgColor={currentColor}
                    text="Download Report"
                    borderRadius="10px"
                  />
                </div>
              </div>
              <div className=''>
                <Stacked 
                  width="320px" height="360px"
                />
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Highlights