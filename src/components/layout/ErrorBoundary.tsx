import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props { children: ReactNode }
interface State { hasError: boolean }

/** Catches render errors and shows a calm fallback instead of crashing the app. */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (import.meta.env.DEV) {
      console.error("ErrorBoundary caught:", error, info);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="grid min-h-screen place-items-center bg-background px-6 text-center">
          <div className="max-w-md">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Unexpected error</p>
            <h1 className="mt-4 font-serif text-3xl text-foreground">Something went off-script.</h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              The page encountered an unexpected issue. Please refresh — if it persists, get in touch.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-8 rounded-md border border-border bg-primary px-6 py-2 text-sm text-primary-foreground transition-colors hover:bg-primary-glow"
            >
              Reload
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
