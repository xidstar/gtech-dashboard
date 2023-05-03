import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Edit, Inject, Toolbar, Sort } from '@syncfusion/ej2-react-grids';
import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';
import { pdfExport } from '@syncfusion/ej2/pivotview';


const Employees = () => {
  return (
    <div className='mt-32 md:mt-12 p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg
    w-11/12 mr-auto ml-auto'>
      <Header category="Page" title="Employees" />
      <GridComponent 
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Search, Page, Toolbar, Sort]} />
      </GridComponent>
    </div>
  )
}

export default Employees