import React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';
import { earningData, highlightsData, kanbanGrid } from '../../data/dummy';

const KanbanCards = () => {
    const highlightCards = (props) => {
        return (
          <div className='flex mt-3 mb-3 flex-wrap justify-around items-center'>
              <div className="bg-slate-100 dark:text-gray-200 dark:bg-secondary-dark-bg w-full text-center
                  p-4 pt-9 mb-2 rounded-2xl md:m-2 hover:cursor-pointer drop-shadow-xl">
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
    <div>
        {/* Kanban */}

        <div className='mt-12 p-2 md:p-10 bg-white rounded-3xl hidden lg:block dark:text-gray-200 dark:bg-slate-600'> 
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
            <div key={item.title} className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg
              p-4 pt-9 mb-2 rounded-2xl lg:w-1/5 min-w-[30%] md:m-2 hover:drop-shadow-xl hover:cursor-pointer hover:scale-110">
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
  )
}

export default KanbanCards