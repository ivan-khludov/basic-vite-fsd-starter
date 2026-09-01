import { createContext, useContext } from 'react';

import { type ChartConfig } from './chart-config';

type ChartContextValue = {
  config: ChartConfig;
};

export const ChartContext = createContext<ChartContextValue | null>(null);

export const useChart = () => {
  const context = useContext(ChartContext);

  if (!context) {
    throw new Error('useChart must be used within a <ChartContainer />');
  }

  return context;
};
