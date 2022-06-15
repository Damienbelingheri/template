import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import symfonyPlugin from 'vite-plugin-symfony';

/* if you're using React */

export default defineConfig({
    plugins: [
        react(), // if you're using React */
        symfonyPlugin(),
    ],
    root: '.' /* DO NOT CHANGE */,
    resolve: {
        alias: {
            changeMe: path.resolve(__dirname, './assets'),
        },
    },
    optimizeDeps: {
        include: ['react/jsx-runtime'],
    },
    build: {
        rollupOptions: {
            input: {
                app: './assets/app.tsx',
                kerberos: './assets/kerberos/kerberos.js',
            },
            output: {
                manualChunks: undefined,
                // sourcemap: true,
            },
        },
        outDir: './public/build/',

        manifest: true /* DO NOT CHANGE */,
        emptyOutDir: true /* DO NOT CHANGE */,
        assetsDir: '' /* DO NOT CHANGE */,
    },
    server: {
        origin: 'https://localhost:3005',
        port: 3005,
        https: {
            key: '/opt/homebrew/etc/nginx/ssl/spark.key',
            cert: '/opt/homebrew/etc/nginx/ssl/spark.crt',
            maxSessionMemory: 300,
            peerMaxConcurrentStreams: 600,
        },
        cors: true,
    },

    /* your outDir prefix relative to web path */
    base: '/build/',
});
