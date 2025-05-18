// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({

	vite: {
		resolve: {
			alias: {
				'@docs': '/content/docs',
				'@es': '/content/docs/es',
				'@assets': '/src/assets',
				'@components': '/src/components',
			}
		}
	},
	redirects: {
				'/': '/es', // Redirección a español como idioma por defecto
			},
	integrations: [
		starlight({
			customCss: [
				// Ruta relativa a tu archivo CSS personalizado
				'./src/styles/starlight.css',
			],
			title: '',
			logo: {
				// Aquí puedes colocar directamente la imagen (opcional si usas slot)
				src: '@assets/pydocs.png',
				alt: 'Logo de la documentación'
			},
			favicon: 'src/assets/python.png',
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
				{
					label: 'Sintaxis Básica',
					autogenerate: { directory: 'SyntaxBasic' },
				},

				{
					label: 'Estructuras de Control',
					autogenerate: { directory: 'ControlStructures' },
				},
				{
					label: 'Funciones',
					autogenerate: { directory: 'Funtions' },
				},
				{
					label: 'Funciones Nativas',
					autogenerate: { directory: 'NativeFunctions' },
				},
				{
					label: 'Estructuras de Datos',
					autogenerate: { directory: 'DataStructure' },
				},
				{
					label: 'Módulos y Paquetes',
					autogenerate: { directory: 'ModulesPackages' },
				},
				{
					label: 'Excepciones',
					autogenerate: { directory: 'ErrorHandling' },
				},
				{
					label: 'Progrmacion Orientada a Objetos',
					autogenerate: { directory: 'POO' },
				},
				{
					label: 'Manejo de Archivos',
					autogenerate: { directory: 'FileManagement' },
				},
				{
					label: 'Manejo de Librerías Estándar',
					autogenerate: { directory: 'StandardLibraries' },
				},
				{
					label: 'Entornos Virtuales y Gestión de Paquetes',
					autogenerate: { directory: 'VenvPackages' },
				},
			],
		}),
	],
});
