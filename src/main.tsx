import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import { ErrorBoundary } from './components/ErrorBoundary';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary
      fallbackTitle="Error al iniciar AtlasCanino"
      fallbackDescription="Se detectó una discrepancia en los scripts o recursos cargados en el navegador. Haz clic en recargar para obtener la versión más reciente."
    >
      <App />
    </ErrorBoundary>
  </StrictMode>,
);

