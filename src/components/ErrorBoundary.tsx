import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, RotateCcw, X } from 'lucide-react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallbackTitle?: string;
  fallbackDescription?: string;
  isModal?: boolean;
  onReset?: () => void;
  fallback?: ReactNode | ((props: { error: Error; resetError: () => void }) => ReactNode);
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  public resetError = () => {
    if (this.props.onReset) {
      this.props.onReset();
    }
    this.setState({ hasError: false, error: null });
  };

  public handleReload = () => {
    try {
      sessionStorage.removeItem('atlas_chunk_retry_reloaded');
    } catch {}
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      if (typeof this.props.fallback === 'function') {
        return this.props.fallback({
          error: this.state.error || new Error('Unknown error'),
          resetError: this.resetError,
        });
      }

      if (this.props.fallback) {
        return this.props.fallback;
      }

      const {
        fallbackTitle = 'No se pudo cargar este módulo',
        fallbackDescription = 'Ocurrió un problema al descargar los recursos necesarios. Puede deberse a una actualización reciente o una desconexión momentánea.',
        isModal = false,
      } = this.props;

      if (isModal) {
        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
            <div className="bg-[#141414] border border-amber-500/30 rounded-3xl p-6 sm:p-8 max-w-md w-full text-center shadow-2xl space-y-4 relative">
              <button
                onClick={this.resetError}
                aria-label="Cerrar modal de error"
                className="absolute top-4 right-4 text-neutral-400 hover:text-white p-1 rounded-full hover:bg-neutral-800 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="w-12 h-12 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-2xl flex items-center justify-center mx-auto">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                {fallbackTitle}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {fallbackDescription}
              </p>
              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={this.resetError}
                  className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white font-medium text-xs rounded-full transition-all inline-flex items-center gap-2 cursor-pointer border border-white/10"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Cerrar</span>
                </button>
                <button
                  onClick={this.handleReload}
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs rounded-full transition-all inline-flex items-center gap-2 cursor-pointer shadow-md shadow-amber-500/10"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Recargar</span>
                </button>
              </div>
            </div>
          </div>
        );
      }

      return (
        <div className="bg-[#141414] border border-amber-500/20 rounded-[2.5rem] p-8 sm:p-12 text-center max-w-lg mx-auto my-8 shadow-2xl space-y-4">
          <div className="w-12 h-12 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-2xl flex items-center justify-center mx-auto">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-white tracking-tight">
            {fallbackTitle}
          </h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            {fallbackDescription}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={this.resetError}
              className="px-4 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-xs rounded-full transition-all inline-flex items-center gap-2 cursor-pointer border border-white/10"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reintentar</span>
            </button>
            <button
              onClick={this.handleReload}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs rounded-full transition-all inline-flex items-center gap-2 cursor-pointer shadow-md shadow-amber-500/10"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Recargar página</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
