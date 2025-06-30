// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({

    vite: {
        
        plugins: [tailwindcss()],

        resolve: {
            alias: {
                '@docs': '/content/docs',
                '@es': '/content/docs/es',
                '@assets': '/src/assets',
                '@components': '/src/components',
            }
        },

        
    },
    site: 'https://www.pydocs.site',
    integrations: [
        starlight({
            customCss: ['./src/styles/global.css'],
            title: 'PyDocs',
            logo: {
                src: '@assets/pydocs.png',
                alt: 'Logo de la documentación'
            },
            favicon: '/favicon.ico',
            defaultLocale: 'es',
            locales: {
                en: { label: 'English' },
                es: { label: 'Español' },
            },
            social: [
                {
                    icon: 'github',
                    label: 'GitHub',
                    href: 'https://github.com/Nelson-5553/pydocs'
                }
            ],
            sidebar: [
                {
                    label: 'Introducción',
                    translations: { en: "Introduction" },
                    autogenerate: { directory: 'introduction' },
                },
                {
                    label: 'Sintaxis Básica',
                    translations: { en: "Basic Syntax" },
                    autogenerate: { directory: 'syntax-basic' },
                },
                {
                    label: 'Estructuras de Datos',
                    translations: { en: "Data Structures" },
                    autogenerate: { directory: 'data-structure' },
                },
                {
                    label: 'Estructuras de Control',
                    translations: { en: "Control Structures" },
                    autogenerate: { directory: 'control-structures' },
                },
                {
                    label: 'Funciones',
                    translations: { en: "Functions" },
                    autogenerate: { directory: 'functions' },
                },
                {
                    label: 'Funciones Nativas',
                    translations: { en: "Native Functions" },
                    autogenerate: { directory: 'native-functions' },
                },
                {
                    label: 'Manejo de Archivos',
                    translations: { en: "File Management" },
                    autogenerate: { directory: 'file-management' },
                },
                {
                    label: 'Manejo de Errores',
                    translations: { en: "Error Handling" },
                    autogenerate: { directory: 'error-handling' },
                },
                {
                    label: 'Programación Orientada a Objetos',
                    translations: { en: "Object-Oriented Programming" },
                    autogenerate: { directory: 'POO' },
                },
                {
                    label: 'Módulos y Paquetes',
                    translations: { en: "Modules and Packages" },
                    autogenerate: { directory: 'modules-packages' },
                },
                {
                    label: 'Entornos Virtuales y Gestión de Paquetes',
                    translations: { en: "Virtual Environments and Package Management" },
                    autogenerate: { directory: 'venv-packages' },
                },
            ],
        }),
        sitemap()
    ],
});