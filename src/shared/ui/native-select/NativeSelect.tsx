import { forwardRef, type SelectHTMLAttributes } from 'react';

import { ChevronDownIcon } from 'lucide-react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '@/shared/utils';

const nativeSelectVariants = tv({
  base: [
    'h-9 w-full min-w-0 appearance-none rounded-md border border-input bg-transparent py-1 pr-8 pl-2.5 text-sm shadow-xs transition-[color,box-shadow] outline-none select-none',
    'focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50',
    'disabled:pointer-events-none disabled:cursor-not-allowed',
    'placeholder:text-muted-foreground',
    'aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20',
    'dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40',
    'selection:bg-primary selection:text-primary-foreground'
  ],
  variants: {
    uiSize: {
      default: 'h-9',
      sm: 'h-8'
    }
  },
  defaultVariants: {
    uiSize: 'default'
  }
});
type NativeSelectAttributesOmit = 'disabled' | 'hidden' | 'autoFocus' | 'size';
type NativeSelectVariants = VariantProps<typeof nativeSelectVariants>;
interface NativeSelectProps
  extends
    Omit<SelectHTMLAttributes<HTMLSelectElement>, NativeSelectAttributesOmit>,
    NativeSelectVariants {
  isDisabled?: boolean;
  isHidden?: boolean;
  hasAutoFocus?: boolean;
}
export const NativeSelect = forwardRef<HTMLSelectElement, NativeSelectProps>(
  ({ uiSize, isDisabled, isHidden, hasAutoFocus, className, ...rest }, ref) => {
    return (
      <div
        data-slot="native-select-wrapper"
        data-size={uiSize}
        className={cn(
          'group/native-select relative w-fit has-[select:disabled]:opacity-50',
          className
        )}
      >
        <select
          ref={ref}
          disabled={isDisabled}
          hidden={isHidden}
          autoFocus={hasAutoFocus}
          data-slot="native-select"
          data-size={uiSize}
          className={nativeSelectVariants({ uiSize })}
          {...rest}
        />
        <ChevronDownIcon
          aria-hidden="true"
          data-slot="native-select-icon"
          className="pointer-events-none absolute top-1/2 right-2.5 size-4 -translate-y-1/2 text-muted-foreground select-none"
        />
      </div>
    );
  }
);
NativeSelect.displayName = 'NativeSelect';
