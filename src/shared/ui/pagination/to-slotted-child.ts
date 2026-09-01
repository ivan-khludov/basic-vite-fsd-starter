import { cloneElement, isValidElement, type ReactNode } from 'react';

export const toSlottedChild = (
  asChild: boolean,
  children: ReactNode,
  content: ReactNode
) => {
  if (asChild && isValidElement(children)) {
    return cloneElement(children, undefined, content);
  }

  return content;
};
