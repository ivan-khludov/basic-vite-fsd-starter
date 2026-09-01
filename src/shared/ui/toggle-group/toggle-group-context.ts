import { createContext } from 'react';

import { type ToggleVariants } from '@/shared/ui/toggle';

export type ToggleGroupContextValue = ToggleVariants & {
  spacing?: number;
  orientation?: 'horizontal' | 'vertical';
};

export const ToggleGroupContext = createContext<ToggleGroupContextValue>({
  size: 'default',
  variant: 'default',
  spacing: 2,
  orientation: 'horizontal'
});
