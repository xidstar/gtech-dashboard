import React from 'react'
import { employeesData } from '../data/dummy';
import { Header } from '../components';
import Area from './Charts/Area';
import GeoMaps from './GeoMaps';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject, Sort } from '@syncfusion/ej2-react-grids';
import { actionsData, actionsGrid } from '../data/dummy';
import {HiOutlineArrowsExpand} from 'react-icons/hi'

import Card3 from '../components/Highlights/Card3';
import Card5 from '../components/Highlights/Card5';
import { Link } from 'react-router-dom';

const UserProfile = () => {

  return (
    <div className='user-profile mt-32 lg:mt-12 p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg
     mr-auto ml-auto shadow-xl xl:h-5/6'>
      <Header category="Page" title="User Profile" />
        <div className="profile-wrapper flex flex-col justify-center">
            <div className="web rounded-3xl w-full dark:bg-slate-600 drop-shadow-2xl">
                <div className="p-5 pt-0 flex justify-center">
                    <Card5 />
                </div>
                <div className='p-5 pt-0 flex justify-center'>
                    <Card3 />
                </div>
            </div> 
                
            {employeesData.slice(2,3).map((user, index) => {
                
                const { Name, EmployeeID, Title, HireDate, ReportsTo, Country, EmployeeImage, Score } = user;

                function getInitialAndLastName(Name) {
                    // Split the full name into an array of words
                    var words = Name.trim().split(' ');
                  
                    // Extract the first initial (first character of the first word)
                    var initial = words[0].charAt(0);
                  
                    // Extract the last name (last word in the array)
                    var lastName = words[words.length - 1];
                  
                    // Combine the initial and last name
                    var result = initial + lastName;
                  
                    // Return the result
                    return result;
                  }

                var initials = getInitialAndLastName(Name);

                return (
                    <div key={index} className="profile mt-10 mb-10 lg:mt-0 lg:mb-0 lg:ml-5 lg:mr-5 p-10 bg-white dark:bg-slate-600
                    dark:text-white rounded-3xl flex flex-col justify-between h-auto  drop-shadow-2xl">
                        <div className=' drop-shadow-2xl'>
                            <Header title={initials} />

                            <div className='flex mb-10 flex-col sm:flex-row justify-between w-full max-w-md mx-auto'>
                                <img className='rounded-full w-40 h-40' src={EmployeeImage} alt="" />

                                <div className='info ml-2'>
                                    <p className='font-bold text-2xl mb-3'>{Name}</p>
                                    <p className='w-[150px] flex justify-between mb-3'>Employee#: <span className="ml-5">{EmployeeID}</span></p> 
                                    <p className='w-[150px] flex justify-between mb-3'>Title: <span className="ml-5">{Title}</span></p> 
                                    <p className='w-[150px] flex justify-between mb-3'>HireDate: <span className="ml-5">{HireDate}</span></p> 
                                    <p className='w-[150px] flex justify-between mb-3'>ReportsTo: <span className="ml-5">{ReportsTo}</span></p> 
                                    <p className='w-[150px] flex justify-between mb-3'>Country: <span className="ml-5">{Country}</span></p> 
                                </div>
                            </div>
                        </div>

                        <div className="border-t-1 text-center mb-5 xl:mb-3 3xl:mb-0 ">
                            <p className='py-5'>Score:</p>

                            <Link to="/highest-risk-exposures" className='bg-red-700 p-3 px-10 text-white hover:bg-red-600 hover:cursor-pointer'>
                                {Score}
                            </Link>
                        </div>
                        
                        <div className='chart h-3/6 overflow-hidden rounded-3xl drop-shadow-2xl relative'>
                            
                            <GeoMaps style={{height: "400px !important"}} className='z-0' />
                            <Link to="/geo-maps" className='btn-expand absolute top-10 right-10 text-cyan-600 text-3xl'>
                                <HiOutlineArrowsExpand />
                            </Link>
                        </div>
                        
                    </div>
                )
            } )}  

            <div className="network rounded-3xl w-full dark:bg-slate-600 ">
                <div className="bg-white rounded-3xl dark:bg-slate-600 pb-5">
                    <div className="chart network-activity">
                        <Area />
                    </div>
                    <div className="recent-alerts m-5 lg:m-5 dark:bg-secondary-dark-bg
                        dark:text-white drop-shadow-2xl">
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