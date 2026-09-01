import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import { App } from '@/app/App';
import { setupHttpAuth } from '@/app/lib/setup-http-auth';

import './shared/styles/globals.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element with id "root" not found');
}

setupHttpAuth();

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
