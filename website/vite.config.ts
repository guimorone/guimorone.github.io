import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import type { ConfigEnv, UserConfig } from 'vite';

export default defineConfig(({ command }: ConfigEnv): UserConfig => {
	const config: UserConfig = {
		plugins: [react()],
		resolve: {
			alias: {
				'~': path.resolve(__dirname, 'node_modules'),
				'@': path.resolve(__dirname, 'src'),
			},
		},
	};

	if (command === 'build') {
		config.resolve.alias['./runtimeConfig'] = './runtimeConfig.browser';
		config.build = { chunkSizeWarningLimit: 5000 };
	} else config.define = { global: {} };

	return config;
});
