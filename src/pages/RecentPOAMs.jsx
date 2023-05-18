import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject, Toolbar, Sort } from '@syncfusion/ej2-react-grids';
import { recentPOAMS, poamsData } from '../data/dummy';
import { Header } from '../components';

const RecentPOAMs = () => {
  return (
    <div className='mt-32 md:mt-12 p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg
    w-11/12 mr-auto ml-auto shadow-xl'>
      <Header category="Dashboard" title="Recent POA&Ms" />
      <GridComponent 
        dataSource={poamsData}
        allowPaging
        allowSorting
        width="auto"
      >
        <ColumnsDirective>
          {recentPOAMS.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[ Page, Toolbar, Sort]} />
      </GridComponent>
    </div>
  )
}

export default RecentPOAMs