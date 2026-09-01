import { type ComponentPropsWithoutRef } from 'react';

import { Panel } from 'react-resizable-panels';

type ResizablePanelProps = ComponentPropsWithoutRef<typeof Panel>;

export const ResizablePanel = (rest: ResizablePanelProps) => {
  return <Panel data-slot="resizable-panel" {...rest} />;
};
