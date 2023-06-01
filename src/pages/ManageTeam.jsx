import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids/src';
import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

const ManageTeam = () => {
  return (
    <div className='mt-32 md:mt-12 p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg
    w-11/12 mr-auto ml-auto shadow-xl'>
      <Header category="Page" title="Manage Team" />
      <GridComponent 
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={['Delete']}
        editSettings={{allowDeleting: true, allowEditing: true}}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[ Page, Toolbar, Sort, Selection, Edit, Filter]} />
      </GridComponent>
    </div>
  )
}

export default ManageTeam