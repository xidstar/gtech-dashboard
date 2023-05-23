import React from 'react'
import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';
import Area from './Charts/Area';
import Pie from './Charts/Pie';
import Bar from './Charts/Bar';
import Stacked from './Charts/Stacked';
import GeoMaps from './GeoMaps';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject, Sort } from '@syncfusion/ej2-react-grids';
import { actionsData, contextMenuItems, actionsGrid } from '../data/dummy';

import Card3 from '../components/Highlights/Card3';
import Card5 from '../components/Highlights/Card5';



const UserProfile = () => {
  return (
    <div className='user-profile mt-32 lg:mt-12 p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg
     mr-auto ml-auto shadow-xl xl:h-5/6'>
      <Header category="Page" title="User Profile" />
        <div className="profile-wrapper flex flex-col justify-center">
            <div className="web rounded-3xl w-full dark:bg-slate-600">
                <div className="p-5 pt-0 flex justify-center">
                    <Card5 />
                </div>
                <div className='p-5 pt-0 flex justify-center'>
                    <Card3 />
                </div>
            </div> 
                
            {employeesData.slice(2,3).map((user, index) => {
                
                const { Name, EmployeeID, Title, HireDate, ReportsTo, Country, EmployeeImage, Score } = user;

                return (
                    <div key={index} className="profile mt-10 mb-10 lg:mt-0 lg:mb-0 lg:ml-5 lg:mr-5 p-10 bg-white dark:bg-slate-600
                    dark:text-white rounded-3xl flex flex-col justify-between h-auto drop-shadow-xl">
                        <div>
                            <Header category="User" title={Name} />

                            <div className='flex mb-10 flex-col sm:flex-row justify-between w-full max-w-md mx-auto'>
                                <img className='rounded-full w-40 h-40' src={EmployeeImage} alt="" />

                                <div className='info ml-2'>
                                    <p className='font-bold text-2xl'>{Name}</p>
                                    <p className='w-[150px] flex justify-between mb-3'>Employee#: <span className="ml-5">{EmployeeID}</span></p> 
                                    <p className='w-[150px] flex justify-between mb-3'>Title: <span className="ml-5">{Title}</span></p> 
                                    <p className='w-[150px] flex justify-between mb-3'>HireDate: <span className="ml-5">{HireDate}</span></p> 
                                    <p className='w-[150px] flex justify-between mb-3'>ReportsTo: <span className="ml-5">{ReportsTo}</span></p> 
                                    <p className='w-[150px] flex justify-between mb-3'>Country: <span className="ml-5">{Country}</span></p> 
                                </div>
                            </div>
                        </div>

                        <div className="border-t-1 text-center mb-3 3xl:mb-0 ">
                            <p className='pt-5'>Score:</p>
                            <button type='button' className='bg-red-700 p-3 pr-5pl-5 w-[100px] text-white hover:bg-red-600
                            hover:cursor-pointer'>{Score}</button>
                        </div>
                        
                        <div className='chart h-3/6 overflow-hidden rounded-3xl'>
                            <GeoMaps style={{height: "400px !important"}} />
                        </div>
                        
                    </div>
                )
            } )}  

            <div className="network rounded-3xl w-full dark:bg-slate-600  drop-shadow-2xl">
                <div className="bg-white rounded-3xl dark:bg-slate-600 pb-5">
                    <div className="chart network-activity">
                        <Area />
                    </div>
                    <div className="recent-alerts m-5 lg:m-5 dark:bg-secondary-dark-bg
                        dark:text-white">
                        <GridComponent 
                            id="gridcomp"
                            dataSource={actionsData}
                            allowPaging
                            allowSorting
                        >
                            <ColumnsDirective  style={{display: "flex"}}>
                            {actionsGrid.slice(0, 2).map((item, index) => (
                                <ColumnDirective key={index} {...item} />
                            ))}
                            </ColumnsDirective>
                            <Inject services={[ Sort, Page]} />
                        </GridComponent>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserProfile