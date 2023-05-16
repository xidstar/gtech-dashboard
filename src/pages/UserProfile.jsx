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
import { pdfExport } from '@syncfusion/ej2/pivotview';



const UserProfile = () => {
  return (
    <div className='user-profile mt-32 lg:mt-12 p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg
    w-11/12 mr-auto ml-auto '>
      <Header category="Page" title="User Profile" />
      <div className="flex flex-col lg:flex-row justify-center h-5/6">
        <div className="web lg:w-1/3 rounded-3xl w-full dark:bg-slate-600">
            <div className="chart activity">
                <Bar />
            </div>
        </div> 
            
        {employeesData.slice(2,3).map((user, index) => {
            
            const { Name, EmployeeID, Title, HireDate, ReportsTo, Country, EmployeeImage, Score } = user;

            return (
                <div key={index} className="profile mt-10 mb-10 lg:mt-0 lg:mb-0 lg:ml-5 lg:mr-5 p-10 bg-white dark:bg-slate-600
                 dark:text-white rounded-3xl flex flex-col justify-between lg:w-1/3 h-auto drop-shadow-xl">
                    <div>
                        <Header category="User" title={Name} />

                        <div className='flex mb-10 flex-col md:flex-row lg:flex-col xl:flex-row'>
                            <img className='rounded-full w-36 h-36 ' src={EmployeeImage} alt="" />

                            <div className='info ml-2'>
                                <p>Name: {Name}</p> 
                                <p>EmployeeID: {EmployeeID}</p> 
                                <p>Title: {Title}</p> 
                                <p>HireDate: {HireDate}</p> 
                                <p>ReportsTo: {ReportsTo}</p> 
                                <p>Country: {Country}</p> 
                            </div>
                        </div>
                    </div>

                    <div className="border-t-1 text-center">
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

        <div className="network lg:w-1/3 rounded-3xl w-full dark:bg-slate-600  drop-shadow-2xl">
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