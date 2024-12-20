import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './Router';

import '@memegle/styles';
import './utils/i18n/locales/i18n';
import { ProvideAuth } from './components/auth/ProvideAuth';

async function startApp() {
    if (import.meta.env.VITE_NODE_ENV === 'development') {
        const { worker } = await import('./mocks/browser');
        worker.start({
            onUnhandledRequest: 'bypass',
            serviceWorker: {
                url: '/admin/mockServiceWorker.js',
            },
        });
    }

    createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <ProvideAuth>
                <RouterProvider router={router} />
            </ProvideAuth>
        </StrictMode>
    );
}

startApp();