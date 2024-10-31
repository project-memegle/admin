import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import '@memegle/styles';

import router from './Router'; // Import default export
import { ProvideAuth } from './components/auth/ProvideAuth';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ProvideAuth>
            <RouterProvider router={router} />
        </ProvideAuth>
    </StrictMode>
);
