import React, { useContext } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { actionsData, contextMenuItems, actionsGrid } from '../data/dummy';
import { Header } from '../components';
import { pdfExport } from '@syncfusion/ej2/pivotview';


const Actions = () => {
  return (
    // <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
    //   <Header category="Page" title="Orders" />
    //   <GridComponent 
    //     id="gridcomp"
    //     dataSource={ordersData}
    //     allowPaging
    //     allowSorting
    //   >
    //     <ColumnsDirective>
    //       {ordersGrid.map((item, index) => (
    //         <ColumnDirective key={index} {...item} />
    //       ))}
    //     </ColumnsDirective>
    //     <Inject services={[Resize, Sort, Filter, ContextMenu, Page, ExcelExport, Edit, PdfExport]} />
    //   </GridComponent>
    // </div>
    <div className='mt-32 md:mt-12 p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg
     w-11/12 mr-auto ml-auto shadow-xl'>
      <Header category="Page" title="Actions" />
      <GridComponent 
        id="gridcomp"
        dataSource={actionsData}
        allowPaging
        allowSorting
      >
        <ColumnsDirective  style={{display: "flex"}}>
          {actionsGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, Filter, ContextMenu, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
    </div>
  )
}

export default Actions;