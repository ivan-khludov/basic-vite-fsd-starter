import { useEffect, useMemo, useState } from 'react';

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon
} from 'lucide-react';
import { Toaster as Sonner, type ToasterProps } from 'sonner';

type ToasterTheme = NonNullable<ToasterProps['theme']>;

const getThemeFromDocument = (): ToasterTheme => {
  if (typeof document === 'undefined') {
    return 'system';
  }

  const root = document.documentElement;

  if (root.classList.contains('dark')) {
    return 'dark';
  }

  if (root.classList.contains('light')) {
    return 'light';
  }

  return 'system';
};

export const Toaster = ({ ...props }: ToasterProps) => {
  const [theme, setTheme] = useState<ToasterTheme>(() =>
    getThemeFromDocument()
  );

  useEffect(() => {
    const root = document.documentElement;

    const handleChange = () => {
      setTheme(getThemeFromDocument());
    };

    const observer = new MutationObserver(handleChange);
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });

    return () => {
      observer.disconnect();
    };
  }, []);

  const icons = useMemo<NonNullable<ToasterProps['icons']>>(() => {
    return {
      success: <CircleCheckIcon className="size-4" />,
      info: <InfoIcon className="size-4" />,
      warning: <TriangleAlertIcon className="size-4" />,
      error: <OctagonXIcon className="size-4" />,
      loading: <Loader2Icon className="size-4 animate-spin" />
    };
  }, []);

  return (
    <Sonner
      theme={theme}
      icons={icons}
      toastOptions={{
        classNames: {
          toast: 'cn-toast'
        }
      }}
      className="group toaster"
      style={
        {
          '--normal-bg': 'var(--popover)',
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--border)',
          '--border-radius': 'var(--radius)'
        } as Record<string, string>
      }
      {...props}
    />
  );
};
