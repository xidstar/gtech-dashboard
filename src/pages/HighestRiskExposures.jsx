import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject, Toolbar, Sort } from '@syncfusion/ej2-react-grids';
import { riskData, riskExposuresGrid } from '../data/dummy';
import { Header } from '../components';


const HighestRiskExposures = () => {
  return (
    <div className='mt-32 md:mt-12 p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg
    w-11/12 mr-auto ml-auto shadow-xl'>
      <Header category="Dashboard" title="Highest Risk Exposures" />
      <GridComponent 
        dataSource={riskData}
        allowPaging
        allowSorting
        width="auto"
      >
        <ColumnsDirective>
          {riskExposuresGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[ Page, Toolbar, Sort]} />
      </GridComponent>
    </div>
  )
}

export default HighestRiskExposures