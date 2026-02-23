import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about.html'),
                products: resolve(__dirname, 'products.html'),
                industries: resolve(__dirname, 'industries.html'),
                sustainability: resolve(__dirname, 'sustainability.html'),
                whySwanneck: resolve(__dirname, 'why-swanneck.html'),
                contact: resolve(__dirname, 'contact.html'),
            },
        },
    },
});
