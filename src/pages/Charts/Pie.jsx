import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, 
  AccumulationTooltip, Inject, AccumulationLegend } from '@syncfusion/ej2-react-charts';
import { pieChartData } from '../../data/dummy';
import { Header} from '../../components';

const Pie = () => {

  const tooltipRender = (args) => {
    if (args.point.index === 3) {
        args.text = args.point.x + '' + ': ' + args.point.y + '' + ' ' + "' Urgent!'";
        args.textStyle.color = '#f48042';
    }
  };

  return (
    <div className="m-4 md:m-5 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl drop-shadow-xl">
        <Header category="Pie" title="Incident Factors" />
        <div className="w-full">
          <AccumulationChartComponent id='charts' tooltip={{ enable: true }} tooltipRender={tooltipRender}>
            <Inject services={[AccumulationLegend, AccumulationTooltip]}/>
            <AccumulationSeriesCollectionDirective>
              <AccumulationSeriesDirective dataSource={pieChartData} xName='x' yName='y'>
              </AccumulationSeriesDirective>
            </AccumulationSeriesCollectionDirective>
          </AccumulationChartComponent>
        </div>
      </div>
    )

}
 

  


export default Pie;