import { useId, type ComponentPropsWithoutRef } from 'react';

import { ResponsiveContainer } from 'recharts';

import { cn } from '@/shared/utils';

import { INITIAL_DIMENSION, type ChartConfig } from './chart-config';
import { ChartStyle } from './ChartStyle';
import { ChartContext } from './useChart';

type ChartContainerProps = ComponentPropsWithoutRef<'div'> & {
  config: ChartConfig;
  children: ComponentPropsWithoutRef<typeof ResponsiveContainer>['children'];
  initialDimension?: {
    width: number;
    height: number;
  };
};

export const ChartContainer = ({
  id,
  config,
  initialDimension = INITIAL_DIMENSION,
  className,
  children,
  ...rest
}: ChartContainerProps) => {
  const uniqueId = useId();
  const chartId = `chart-${id ?? uniqueId.replace(/:/g, '')}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-slot="chart"
        data-chart={chartId}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
          className
        )}
        {...rest}
      >
        <ChartStyle id={chartId} config={config} />
        <ResponsiveContainer initialDimension={initialDimension}>
          {children}
        </ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
};
