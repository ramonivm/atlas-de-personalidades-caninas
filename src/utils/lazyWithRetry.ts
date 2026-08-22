import React, { ComponentType, LazyExoticComponent } from 'react';

interface RetryOptions {
  retries?: number;
  interval?: number;
}

/**
 * Enhanced React.lazy with automated retry mechanism and deployment chunk invalidation handling.
 * 
 * Prevents white/black-screen crashes caused by:
 * 1. Temporary network fluctuations when fetching dynamic chunk files.
 * 2. New production deployments where previous chunk file hashes no longer exist on the server (404s).
 */
export function lazyWithRetry<T extends ComponentType<any>>(
  componentImport: () => Promise<{ default: T }>,
  options: RetryOptions = {}
): LazyExoticComponent<T> {
  const { retries = 2, interval = 800 } = options;

  return React.lazy(() => {
    return new Promise<{ default: T }>((resolve, reject) => {
      const attemptImport = (attemptsLeft: number) => {
        componentImport()
          .then((module) => {
            resolve(module);
          })
          .catch((error: any) => {
            const errorMessage = error?.message || String(error);
            const isChunkLoadFailed =
              errorMessage.includes('Failed to fetch dynamically imported module') ||
              errorMessage.includes('Loading chunk') ||
              errorMessage.includes('error loading dynamically imported module') ||
              errorMessage.includes('Importing a module script failed');

            if (attemptsLeft > 0) {
              // Retry after interval with slight backoff
              setTimeout(() => {
                attemptImport(attemptsLeft - 1);
              }, interval);
              return;
            }

            // If we ran out of retries and it's a chunk loading failure (likely a new production deployment)
            if (isChunkLoadFailed && typeof window !== 'undefined') {
              const sessionKey = 'atlas_chunk_retry_reloaded';
              const hasAlreadyReloaded = sessionStorage.getItem(sessionKey);

              // If we haven't forced a reload in this tab session yet, do it once to get fresh assets
              if (!hasAlreadyReloaded) {
                sessionStorage.setItem(sessionKey, 'true');
                window.location.reload();
                return;
              }
            }

            // Otherwise, pass the error to ErrorBoundary
            reject(error);
          });
      };

      attemptImport(retries);
    });
  });
}
