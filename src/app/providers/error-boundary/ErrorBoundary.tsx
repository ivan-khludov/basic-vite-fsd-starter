import { Component, type ErrorInfo, type ReactNode } from 'react';

import { reportError } from '@/shared/utils';

type ErrorResetHandler = () => void;

type ErrorBoundaryFallback =
  | ReactNode
  | ((reset: ErrorResetHandler, error: Error | null) => ReactNode);

interface ErrorBoundaryProps {
  fallback: ErrorBoundaryFallback;
  children: ReactNode;
  onReset?: ErrorResetHandler;
}

interface ErrorBoundaryState {
  error: Error | null;
  hasError: boolean;
}

/**
 * Top-level safety net for render errors thrown outside the router, such as in
 * providers. Route-level errors are handled by RouteErrorBoundary.
 */
export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  public state: ErrorBoundaryState = { error: null, hasError: false };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error, hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    reportError('Unhandled render error', {
      context: 'error-boundary',
      payload: {
        message: error.message,
        componentStack: errorInfo.componentStack
      }
    });
  }

  private handleReset = () => {
    this.props.onReset?.();
    this.setState({ error: null, hasError: false });
  };

  public render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    const { fallback } = this.props;

    if (typeof fallback === 'function') {
      return fallback(this.handleReset, this.state.error);
    }

    return fallback;
  }
}
