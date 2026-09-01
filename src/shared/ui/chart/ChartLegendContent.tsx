import { type ComponentPropsWithoutRef } from 'react';

import { type DefaultLegendContentProps } from 'recharts';

import { cn } from '@/shared/utils';

import { getPayloadConfigFromPayload } from './get-payload-config-from-payload';
import { useChart } from './useChart';

type ChartLegendContentProps = ComponentPropsWithoutRef<'div'> & {
  hideIcon?: boolean;
  nameKey?: string;
} & DefaultLegendContentProps;

export const ChartLegendContent = ({
  hideIcon = false,
  payload,
  verticalAlign = 'bottom',
  nameKey,
  className
}: ChartLegendContentProps) => {
  const { config } = useChart();

  if (!payload?.length) {
    return null;
  }

  return (
    <div
      className={cn(
        'flex items-center justify-center gap-4',
        verticalAlign === 'top' ? 'pb-3' : 'pt-3',
        className
      )}
    >
      {payload
        .filter((item) => item.type !== 'none')
        .map((item, index) => {
          const key = `${nameKey ?? item.dataKey ?? 'value'}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);

          return (
            <div
              key={index}
              className="flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
            >
              {itemConfig?.icon && !hideIcon ? (
                <itemConfig.icon />
              ) : (
                <div
                  className="h-2 w-2 shrink-0 rounded-[2px]"
                  style={{
                    backgroundColor: item.color
                  }}
                />
              )}
              {itemConfig?.label}
            </div>
          );
        })}
    </div>
  );
};
