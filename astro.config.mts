import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://haighd.github.io',
	base: 'golden-paws-photography',
	vite: {
		plugins: [tailwindcss()],
	},
});
