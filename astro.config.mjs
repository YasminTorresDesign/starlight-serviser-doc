// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Documentación',
			logo: {
				src: './src/assets/logos.png',
			},
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guia de Instalación',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Ejemplo de Instalación', slug: 'guides/example' },
					],
				},
				{
					label: 'Manual Tecnico',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Ejemplo de Manual Técnico', slug: 'manuales/manual' },
					],
				},
				{
					label: 'Manual de Usuario',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
