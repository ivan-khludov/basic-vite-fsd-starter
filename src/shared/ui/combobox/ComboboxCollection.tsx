import { Combobox as ComboboxPrimitive } from '@base-ui/react';

export const ComboboxCollection = (
  props: ComboboxPrimitive.Collection.Props
) => {
  return (
    <ComboboxPrimitive.Collection data-slot="combobox-collection" {...props} />
  );
};
