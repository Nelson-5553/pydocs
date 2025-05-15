// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'PyDocs',
			// Establece el inglés como el idioma predeterminado para este sitio.
			defaultLocale: 'es',
			locales: {
				// Documentación en inglés en `src/content/docs/en/`
				en: {
					label: 'English',
				},
				// Documentación en español en `src/content/docs/es/`
				es: {
					label: 'Español',
				},
			},

			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Introducción',
					autogenerate: { directory: 'Introduccion' },
				},
			],
		}),
	],
});
