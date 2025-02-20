import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
	if (command === 'build')
		return {
			plugins: [react()],
			resolve: {
				alias: {
					'./runtimeConfig': './runtimeConfig.browser',
					'~': path.resolve(__dirname, 'node_modules'),
					'@': path.resolve(__dirname, 'src'),
				},
			},
			build: { chunkSizeWarningLimit: 5000 },
		};

	return { define: { global: {} }, plugins: [react()] };
});
