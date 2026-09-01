import { type ComponentPropsWithoutRef, type ReactNode } from 'react';

import { MessageScroller as MessageScrollerPrimitive } from '@shadcn/react/message-scroller';
import { ArrowDownIcon } from 'lucide-react';

import { Button } from '@/shared/ui/button';
import { cn } from '@/shared/utils';

type MessageScrollerButtonProps = ComponentPropsWithoutRef<
  typeof MessageScrollerPrimitive.Button
> &
  Pick<ComponentPropsWithoutRef<typeof Button>, 'variant' | 'size'> & {
    label?: string;
  };

const DEFAULT_END_LABEL = 'Scroll to end';
const DEFAULT_START_LABEL = 'Scroll to start';

export const MessageScrollerButton = ({
  direction = 'end',
  variant = 'secondary',
  size = 'icon-sm',
  label,
  className,
  children,
  render,
  ...rest
}: MessageScrollerButtonProps) => {
  const scrollLabel =
    label ?? (direction === 'end' ? DEFAULT_END_LABEL : DEFAULT_START_LABEL);
  const content: ReactNode = children ?? (
    <>
      <ArrowDownIcon />
      <span className="sr-only">{scrollLabel}</span>
    </>
  );

  return (
    <MessageScrollerPrimitive.Button
      direction={direction}
      data-slot="message-scroller-button"
      data-direction={direction}
      data-variant={variant}
      data-size={size}
      render={render ?? <Button variant={variant} size={size} />}
      className={cn(
        'absolute inset-s-1/2 -translate-x-1/2 border-border bg-background text-foreground transition-[translate,scale,opacity] duration-200 hover:bg-muted hover:text-foreground data-[active=false]:pointer-events-none data-[active=false]:scale-95 data-[active=false]:opacity-0 data-[active=false]:duration-400 data-[active=false]:ease-[cubic-bezier(0.7,0,0.84,0)] data-[active=true]:translate-y-0 data-[active=true]:scale-100 data-[active=true]:opacity-100 data-[active=true]:ease-[cubic-bezier(0.23,1,0.32,1)] data-[direction=end]:bottom-4 data-[direction=end]:data-[active=false]:translate-y-full data-[direction=start]:top-4 data-[direction=start]:data-[active=false]:-translate-y-full rtl:translate-x-1/2 data-[direction=start]:[&_svg]:rotate-180',
        className
      )}
      {...rest}
    >
      {content}
    </MessageScrollerPrimitive.Button>
  );
};
