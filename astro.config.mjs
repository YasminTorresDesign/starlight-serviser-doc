// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Documentación',
			logo: {
				src: './src/assets/logo-TI.jpeg',
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
							label: 'AppSennovaLab',
							items: [
								{ 
									label: 'assets',
									items: [
										{ label: 'AppAsset', slug: 'manual-tecnico/app-sennova-lab/asset/app-asset' },
									],	
								},
								{
									label: 'config',
									items: [
									  { label: 'main', slug: 'manual-tecnico/app-sennova-lab/config/main' },
									  { label: 'main-local', slug: 'manual-tecnico/app-sennova-lab/config/main-local' },
									  { label: 'gitignore', slug: 'manual-tecnico/app-sennova-lab/config/gitignore' },
									  { label: 'appAsset', slug: 'manual-tecnico/app-sennova-lab/asset/app-asset' },
									  { label: 'gitignore-original', slug: 'manual-tecnico/app-sennova-lab/config/gitignore-original' },
									  { label: 'bootstrap', slug: 'manual-tecnico/app-sennova-lab/config/bootstrap' },
									  { label: 'codeception-local', slug: 'manual-tecnico/app-sennova-lab/config/codeception-local' },
									  { label: 'test-php', slug: 'manual-tecnico/app-sennova-lab/config/test-php' },
									  
									],
								},
								
								
							],
						},
						{
							label: 'AppServiser',
							items: [
								// Each item here is one entry in the navigation menu.
								
							],
						},
						{
							label: 'AppServiserAdmin',
							items: [
								// Each item here is one entry in the navigation menu.
								
							],
						},
						

						
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
