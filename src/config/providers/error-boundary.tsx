import type { PropsWithChildren, ReactNode } from "react";
import React from "react";

import { GENERAL_CONSTANTS } from "@constants";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

const FallbackComponent = () => {
  const onReset = () => (window.location.href = window.location.origin);
  return <div onClick={onReset}>{GENERAL_CONSTANTS.RUNTIME_ERROR_MESSAGE}</div>;
};

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  static componentDidCatch(error: Error) {
    console.log("runtime-error:", error);
  }

  render() {
    return this.state.hasError ? <FallbackComponent /> : this.props.children;
  }
}

const ErrorBoundaryProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <ErrorBoundary>{children}</ErrorBoundary>;
};

export default ErrorBoundaryProvider;
