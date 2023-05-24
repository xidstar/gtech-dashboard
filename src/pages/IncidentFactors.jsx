import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject, Toolbar, Sort } from '@syncfusion/ej2-react-grids';
import { incidentFactors, incidentGrid } from '../data/dummy';
import { Header } from '../components';

const IncidentFactors = () => {
  return (
    <div className='mt-32 md:mt-12 p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg
    w-11/12 mr-auto ml-auto shadow-xl'>
      <Header category="Dashboard" title="Incident Factors" />
      <GridComponent 
        dataSource={incidentFactors}
        allowPaging
        allowSorting
        width="auto"
      >
        <ColumnsDirective>
          {incidentGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Sort]} />
      </GridComponent>
    </div>
  )
}

export default IncidentFactors