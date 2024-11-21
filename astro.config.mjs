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
				github: 'https://github.com/miguelcmo/Sennova/tree/main',
			},
			sidebar: [
				{
					label: 'Inicio',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introducción', slug: 'inicio/introduccion' },
					],
				},
				{
					label: 'Manual Tecnico',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Inicio', slug: 'manual-tecnico/manual-tecnico-inicio' },

						// Carpeta adicional dentro de "Manual Técnico"
						{
							label: 'Clases',
							items: [
							  { label: 'main', slug: 'manual-tecnico/clases/main' },
							  { label: 'main-local', slug: 'manual-tecnico/clases/main-local' },
							  { label: 'gitignore', slug: 'manual-tecnico/clases/gitignore' },
							  { label: 'appAsset', slug: 'manual-tecnico/clases/app-asset' },
							  { label: 'gitignore-original', slug: 'manual-tecnico/clases/gitignore-original' },
							  { label: 'bootstrap', slug: 'manual-tecnico/clases/bootstrap' },
							  { label: 'codeception-local', slug: 'manual-tecnico/clases/codeception-local' },
							  
							],
						}
					],
									
				},
				{
					label: 'Instalación',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Guia de Instalación', slug: 'instalacion/guia-instalacion' },
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
