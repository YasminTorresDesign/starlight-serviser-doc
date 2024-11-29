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
										{ label: 'gitignore', slug: 'manual-tecnico/app-sennova-lab/config/gitignore' },
										{ label: 'gitignore-original', slug: 'manual-tecnico/app-sennova-lab/config/gitignore-original' },
										{ label: 'bootstrap.php', slug: 'manual-tecnico/app-sennova-lab/config/bootstrap' },
										{ label: 'codeception-local.php', slug: 'manual-tecnico/app-sennova-lab/config/codeception-local' },
										{ label: 'main-local.php', slug: 'manual-tecnico/app-sennova-lab/config/main-local' },
									    { label: 'main.php', slug: 'manual-tecnico/app-sennova-lab/config/main' },
									    { label: 'test.php', slug: 'manual-tecnico/app-sennova-lab/config/test-php' },
									  
									],
								},
								{ 
									label: 'controllers',
									items: [
										{ label: 'SiteController.php', slug: 'manual-tecnico/app-sennova-lab/controllers/site-controller' },
									],	
								},
								{ 
									label: 'mail',
									items: [
										{ label: 'layouts/html.php', slug: 'manual-tecnico/app-sennova-lab/mail/layouts-html' },
										{ label: 'layouts/text.php', slug: 'manual-tecnico/app-sennova-lab/mail/layouts-text' },
										{ label: 'contactForm-html.php', slug: 'manual-tecnico/app-sennova-lab/mail/contact-form-html' },
										{ label: 'contactForm-text.php', slug: 'manual-tecnico/app-sennova-lab/mail/contact-form-text' },
										{ label: 'emailVerify-html.php', slug: 'manual-tecnico/app-sennova-lab/mail/email-verify-html' },
										{ label: 'emailVerify-text.php', slug: 'manual-tecnico/app-sennova-lab/mail/email-verify-text' },
										{ label: 'passwordResetToken-html.php', slug: 'manual-tecnico/app-sennova-lab/mail/password-reset-token-html' },
										{ label: 'passwordResetToken-text.php', slug: 'manual-tecnico/app-sennova-lab/mail/password-reset-token-text' },
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
