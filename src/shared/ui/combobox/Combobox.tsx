import { Combobox as ComboboxPrimitive } from '@base-ui/react';

export const Combobox = <Value, Multiple extends boolean | undefined = false>(
  props: ComboboxPrimitive.Root.Props<Value, Multiple>
) => {
  return <ComboboxPrimitive.Root data-slot="combobox" {...props} />;
};

Combobox.displayName = 'Combobox';
