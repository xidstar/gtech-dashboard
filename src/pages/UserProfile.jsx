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
    <div className='mt-32 md:mt-12 p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg
    w-11/12 mr-auto ml-auto '>
      <Header category="Page" title="User Profile" />
      <div className="flex justify-center h-5/6">
        <div className="web w-1/3 rounded-3xl h-full dark:bg-slate-600">
            <div className="web-activity">
                <Bar />
            </div>
            {/* <div className="application-activity">
                <Pie />
            </div>   */}
            <div className="activity">
                <Stacked />
            </div>
        </div> 
            
        {employeesData.slice(2,3).map((user, index) => {
            
            const { Name, EmployeeID, Title, HireDate, ReportsTo, Country, EmployeeImage } = user;

            return (
                <div key={index} className="profile md:ml-5 md:mr-5 p-10 bg-white dark:bg-slate-600
                 dark:text-white rounded-3xl h-full flex flex-col justify-between">
                    <Header category="User" title={Name} />

                    <div className='flex'>
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
                    <div className='h-3/6 overflow-hidden rounded-3xl'>
                        <GeoMaps style={{height: "400px !important"}} />
                    </div>
                    
                </div>
            )
        } )}  

        <div className="network w-1/3 rounded-3xl dark:bg-slate-600">
            <div className="network-activity">
                <Area />
            </div>
            <div className="recent-alerts md:m-5 dark:bg-secondary-dark-bg
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
  )
}

export default UserProfile