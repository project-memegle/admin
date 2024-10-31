import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/',
    resolve: {
        alias: {
            '@memegle/assets': '/src/assets',
            '@memegle/styles': '/src/scss/common.scss',
        },
    },
});
