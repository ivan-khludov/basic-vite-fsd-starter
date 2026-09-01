import { useRef } from 'react';

export const useComboboxAnchor = () => {
  return useRef<HTMLDivElement | null>(null);
};
