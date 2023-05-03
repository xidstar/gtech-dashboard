import React from 'react';

import { Header, Stacked as StackedChart } from '../../components';

const Stacked = () => (
  <div className="m-4 md:m-5 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <Header category="Stacked" title="Incidents Breakdown" />
    <div className="w-full">
      <StackedChart />
    </div>
  </div>
);

export default Stacked;