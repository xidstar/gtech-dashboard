import React from 'react';
// import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject, Toolbar, Sort } from '@syncfusion/ej2-react-grids';
import { riskData } from '../data/dummy';
import { Header } from '../components';
import { Link } from 'react-router-dom';


const HighestRiskExposures = () => {

  return (
    <div className='mt-32 md:mt-12 p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg
    w-11/12 mr-auto ml-auto shadow-xl cursor-pointer'>
      <Header category="Dashboard" title="Highest Risk Exposures" />
      
      
      <table className='risk-table dark:bg-secondary-dark-bg !border-solid border-1 border-slate-200 e-control 
        e-grid e-lib e-gridhover e-device e-responsive e-default e-droppable e-tooltip e-keyboard
        overflow-y-scroll md:!table w-full'>
          <thead>
            <tr className='dark:text-slate-200'>
              <th className=' bg-gray-100 dark:bg-slate-700'>User Name</th>
              <th className=' bg-gray-100 dark:bg-slate-700'>Title</th>
              <th className=' bg-gray-100 dark:bg-slate-700 approver-title'>Change</th>
              <th className=' bg-gray-100 dark:bg-slate-700'>Score</th>
              <th className=' bg-gray-100 dark:bg-slate-700'>System Security</th>
              <th className=' bg-gray-100 dark:bg-slate-700'>Criminal</th>
              <th className=' bg-gray-100 dark:bg-slate-700'>Financial</th>
              <th className=' bg-gray-100 dark:bg-slate-700'>Productivity</th>
            </tr>
          </thead>
          
          <tbody>
            {riskData.map((user) => (
              <tr key={user.EmployeeID} className='bg-white dark:bg-slate-600'>
                
                <td><Link to="/user-profile">{user.Name}</Link></td>
                <td><Link to="/user-profile">{user.Title}</Link></td>
                <td className=''>
                  <div className='flex justify-center'>{user.Change}</div> 
                </td>
                <td>
                  <div className='flex justify-center' style={{backgroundColor: `${user.bgColor}`, color: `${user.Score === 1000 ? '#ccc' : '#000'}`}}>{user.Score}</div> 
                </td>
                <td>
                  <div className="w-4 h-4 border-1 border-slate-400 rounded-full mx-auto" style={{backgroundColor: `${user.SystemSecurity}`}}></div>
                </td>
                <td>
                  <div className="w-4 h-4 border-1 border-slate-400 rounded-full mx-auto" style={{backgroundColor: `${user.Criminal}`}}></div>
                </td>
                <td>
                <div className="w-4 h-4 border-1 border-slate-400 rounded-full mx-auto" style={{backgroundColor: `${user.Financial}`}}></div>
                </td>
                <td>
                <div className="w-4 h-4 border-1 border-slate-400 rounded-full mx-auto" style={{backgroundColor: `${user.Productivity}`}}></div>
                </td>
              </tr>
            ))}
          </tbody>
          
        </table>
      
      
    </div>
  )
}

export default HighestRiskExposures