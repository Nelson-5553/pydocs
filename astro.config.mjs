// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import sitemap from '@astrojs/sitemap';

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
	site: 'https://www.pydocs.site',
    integrations: [starlight({
        customCss: [
            // Ruta relativa a tu archivo CSS personalizado
            './src/styles/starlight.css',
        ],
        title: 'PyDocs',
        logo: {
            // Aquí puedes colocar directamente la imagen (opcional si usas slot)
            src: '@assets/pydocs.png',
            alt: 'Logo de la documentación'
        },
        favicon: '/favicon.ico',
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

        social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Nelson-5553/pydocs' }],
        sidebar: [
            {
              translations: {
                en: "Introduction",
              },
                label: 'Introducción',
                autogenerate: { directory: 'introduction' },
            },
            {
              translations: {
                en: "Basic Syntax",
              },
                label: 'Sintaxis Básica',
                autogenerate: { directory: 'syntax-basic' },
            },
            {
                translations: {
                  en: "Data Stuctures"
                },
                label: 'Estructuras de Datos',
                autogenerate: { directory: 'data-structure' },
            },

            {
              translations: {
                en: "Control Structures"
              },
                label: 'Estructuras de Control',
                autogenerate: { directory: 'control-structures' },
            },
            {
              translations: {
                en: "Functions"
              },
                label: 'Funciones',
                autogenerate: { directory: 'functions' },
            },
            {
              translations: {
                en: "Native Functions"
              },
                label: 'Funciones Nativas',
                autogenerate: { directory: 'native-functions' },
            },
            {
              translations: {
                en: "File Management"
              },
                label: 'Manejo de Archivos',
                autogenerate: { directory: 'file-management' },
            },
            {
              translations: {
                en: "Error Handling"
              },
                label: 'Manejo de Errores',
                autogenerate: { directory: 'error-handling' },
            },
            {
              translations: {
                en: "Object-Oriented Programming"
              },
                label: 'Programacion Orientada a Objetos',
                autogenerate: { directory: 'POO' },
            },
            {
              translations: {
                en: "Modules and Packages"
              },
                label: 'Módulos y Paquetes',
                autogenerate: { directory: 'modules-packages' },
            },
            // {
            // 	label: 'Manejo de Librerías Estándar',
            // 	autogenerate: { directory: 'StandardLibraries' },
            // },
            {
              translations: {
                en: "Virtual Environments and Package Management"
              },
                label: 'Entornos Virtuales y Gestión de Paquetes',
                autogenerate: { directory: 'venv-packages' },
            },
        ],
		}),
		sitemap()],
});
