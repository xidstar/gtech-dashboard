import React from 'react';
import CardTemplate from './CardTemplate';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject, Toolbar, Sort } from '@syncfusion/ej2-react-grids';
import { recordsCard, recordsGrid, reportsGrid, incidentFactors } from '../../data/dummy';
import { Header } from '../../components'

const Card6 = () => {
    <CardTemplate />  
    const pageOptions = {
        pageSize: 5,
    };
    
    return (
      <CardTemplate title="General" bgColor="#bfb194" content={(
        <div className='card-reports relative flex flex-col xl:flex-row items-center justify-center'>
            <div className="records p-5 pt-0 w-full xl:w-1/2">
                <Header title="Records" />
                <GridComponent 
                    dataSource={recordsCard}
                    allowPaging
                    allowSorting
                    width="auto"
                    height={275}
                    pageSettings={pageOptions}
                >
                    <ColumnsDirective>
                    {recordsGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item} />
                    ))}
                    </ColumnsDirective>
                    <Inject services={[Page, Toolbar, Sort]} />
                </GridComponent>
            </div>
            <div className="reports p-5 pt-0 w-full xl:w-1/2">
                <Header title="Reports" />
                <GridComponent 
                    dataSource={incidentFactors}
                    allowPaging
                    allowSorting
                    width="auto"
                    height={275}
                    pageSettings={pageOptions}
                >
                    <ColumnsDirective>
                    {reportsGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item} />
                    ))}
                    </ColumnsDirective>
                    <Inject services={[Page, Toolbar, Sort]} />
                </GridComponent>
            </div>
        </div>
        )} /> 
              
    )
}

export default Card6