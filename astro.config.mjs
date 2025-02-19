// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Documentación',
			logo: {
				src: './src/assets/favicon-32x32.png',
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
								{ 
									label: 'models',
									items: [
										{ label: 'ContactForm.php', slug: 'manual-tecnico/app-sennova-lab/models/contact-form' },
										{ label: 'PasswordResetRequestForm.php', slug: 'manual-tecnico/app-sennova-lab/models/password-reset-request' },
										{ label: 'ResendVerificationEmailForm.php', slug: 'manual-tecnico/app-sennova-lab/models/resend-verification-email' },
										{ label: 'ResetPasswordForm.php', slug: 'manual-tecnico/app-sennova-lab/models/reset-password' },
										{ label: 'SignupForm.php', slug: 'manual-tecnico/app-sennova-lab/models/signup-form' },
										{ label: 'VerifyEmailForm.php', slug: 'manual-tecnico/app-sennova-lab/models/verify-email-form' },
										//{ label: 'AppAsset', slug: 'manual-tecnico/app-serviser/assets/app-asset' },
									],	
								},
								{ 
									label: 'runtime',
									items: [
										{ label: '.gitignore', slug: 'manual-tecnico/app-sennova-lab/runtime/gitignore' },
										//{ label: 'AppAsset', slug: 'manual-tecnico/app-serviser/assets/app-asset' },
									],	
								},
								{ 
									label: 'tests',
									items: [
										//{ label: 'AppAsset', slug: 'manual-tecnico/app-serviser/assets/app-asset' },

										{ 
											label: '_data',
											items: [
												{ label: 'login_data.php', slug: 'manual-tecnico/app-sennova-lab/tests/data/login-data' },
											],	
										},
										{ 
											label: '_output',
											items: [
												{ label: '.gitignore', slug: 'manual-tecnico/app-sennova-lab/tests/output/gitignore' },
											],	
										},
										{ 
											label: '_support',
											items: [
												{ label: '.gitignore', slug: 'manual-tecnico/app-sennova-lab/tests/support/gitignore' },
												{ label: 'FunctionalTester.php', slug: 'manual-tecnico/app-sennova-lab/tests/support/functional-tester' },
												{ label: 'UnitTester.php', slug: 'manual-tecnico/app-sennova-lab/tests/support/unit-tester' },
											],	
											
										},
										{ 
											label: 'acceptance',
											items: [
												{ label: '_bootstrap.php', slug: 'manual-tecnico/app-sennova-lab/tests/acceptance/bootstrap' },
												{ label: 'HomeCest.php', slug: 'manual-tecnico/app-sennova-lab/tests/acceptance/home-cest' },
											],	
										},
										{ 
											label: 'functional',
											items: [
												{ label: '_bootstrap.php', slug: 'manual-tecnico/app-sennova-lab/tests/functional/bootstrap' },
												{ label: 'AboutCest.php', slug: 'manual-tecnico/app-sennova-lab/tests/functional/about-cest' },
												{ label: 'ContactCest.php', slug: 'manual-tecnico/app-sennova-lab/tests/functional/contact-cest' },
												{ label: 'HomeCest.php', slug: 'manual-tecnico/app-sennova-lab/tests/functional/home-cest' },
												{ label: 'LoginCest.php', slug: 'manual-tecnico/app-sennova-lab/tests/functional/login-cest' },
												{ label: 'ResendVerificationEmailCest.php', slug: 'manual-tecnico/app-sennova-lab/tests/functional/resend-verification-email-cest' },
												{ label: 'SignupCest.php', slug: 'manual-tecnico/app-sennova-lab/tests/functional/signup-cest' },
												{ label: 'VerifyEmailCest.php.php', slug: 'manual-tecnico/app-sennova-lab/tests/functional/verify-email-cest' },
												
											],	
										},
										{ 
											label: 'unit',
											items: [
												{ label: '_bootstrap.php', slug: 'manual-tecnico/app-sennova-lab/tests/unit/bootstrap' },
												
											],	
										},

										//{ label: 'AppAsset', slug: 'manual-tecnico/app-serviser/assets/app-asset' },
										{ label: 'acceptance.suite.yml.example', slug: 'manual-tecnico/app-sennova-lab/tests/acceptance-suite' },
										{ label: 'functional.suite.yml', slug: 'manual-tecnico/app-sennova-lab/tests/functional-suite' },
										{ label: 'unit.suite.yml', slug: 'manual-tecnico/app-sennova-lab/tests/unit-suite' },
										
									],	
								},
								{ 
									label: 'views',
									items: [
										//{ label: 'AppAsset', slug: 'manual-tecnico/app-serviser/assets/app-asset' },
										{ 
											label: 'layouts',
											items: [
												{ label: 'footer.php', slug: 'manual-tecnico/app-sennova-lab/views/layouts/footer' },
												{ label: 'header.php', slug: 'manual-tecnico/app-sennova-lab/views/layouts/header' },
												{ label: 'main.php', slug: 'manual-tecnico/app-sennova-lab/views/layouts/main' },
												
											],	
										},
										{ 
											label: 'site',
											items: [
												{ label: 'about.php', slug: 'manual-tecnico/app-sennova-lab/views/site/about' },
												{ label: 'contact.php', slug: 'manual-tecnico/app-sennova-lab/views/site/contact' },
												{ label: 'error.php', slug: 'manual-tecnico/app-sennova-lab/views/site/error' },
												{ label: 'index.php', slug: 'manual-tecnico/app-sennova-lab/views/site/index-php' },
												{ label: 'login.php', slug: 'manual-tecnico/app-sennova-lab/views/site/login' },
												{ label: 'portfolio.php', slug: 'manual-tecnico/app-sennova-lab/views/site/portfolio' },
												{ label: 'requestPasswordResetToken.php.php', slug: 'manual-tecnico/app-sennova-lab/views/site/request-password' },
												{ label: 'resendVerificationEmail.php.php', slug: 'manual-tecnico/app-sennova-lab/views/site/resend-verification' },
												{ label: 'resetPassword.php.php', slug: 'manual-tecnico/app-sennova-lab/views/site/reset-password' },
												{ label: 'signup.php', slug: 'manual-tecnico/app-sennova-lab/views/site/signup' },
												
											],	
										},
									],	
								},
								{ 
									label: 'web',
									items: [
										//{ label: 'AppAsset', slug: 'manual-tecnico/app-serviser/assets/app-asset' },
										{ 
											label: 'css',
											items: [
												{ label: 'custom.php', slug: 'manual-tecnico/app-sennova-lab/web/css/custom' },
												{ label: 'site.php', slug: 'manual-tecnico/app-sennova-lab/web/css/site' },
											],	
										},
										{ 
											label: 'images',
											items: [
												{ label: 'images.php', slug: 'manual-tecnico/app-sennova-lab/web/images/images' },
												
												
											],	
										},
										{ label: 'favicon.ico', slug: 'manual-tecnico/app-sennova-lab/web/favicon' },
										{ label: 'index.php', slug: 'manual-tecnico/app-sennova-lab/web/index-php' },
										{ label: 'index-test.php', slug: 'manual-tecnico/app-sennova-lab/web/index-test' },
										{ label: 'robots.txt', slug: 'manual-tecnico/app-sennova-lab/web/robots' },
									],	
								},

								{ label: 'codeception.yml', slug: 'manual-tecnico/app-sennova-lab/codeception-yml' },
								{ label: 'Dockerfile', slug: 'manual-tecnico/app-sennova-lab/dockerfile' },
								
								
							],
						},
						{
							label: 'AppServiser',
								items: [
									{ label: 'Inicio', slug: 'manual-tecnico/app-serviser/manual-tecnico-serviser' },
									{ 
										label: 'assets',
										items: [
											{ label: 'AppAsset', slug: 'manual-tecnico/app-serviser/assets/app-asset' },
										],	
									},
									{ 
										label: 'config',
										items: [
											//{ label: 'AppAsset', slug: 'manual-tecnico/app-sennova-lab/asset/app-asset' },
											{ label: 'gitignore', slug: 'manual-tecnico/app-serviser/config/gitignore' },
											{ label: 'gitignore-original', slug: 'manual-tecnico/app-serviser/config/gitignore-original' },
											{ label: 'bootstrap.php', slug: 'manual-tecnico/app-serviser/config/bootstrap' },
											{ label: 'codeception-local.php', slug: 'manual-tecnico/app-serviser/config/codeception-local' },
											{ label: 'i18n-config.php', slug: 'manual-tecnico/app-serviser/config/i18n-config' },
											{ label: 'main-local.php', slug: 'manual-tecnico/app-serviser/config/main-local' },
											{ label: 'main.php', slug: 'manual-tecnico/app-serviser/config/main' },
											{ label: 'test.php', slug: 'manual-tecnico/app-serviser/config/test' },
										],	
									},
									{ 
										label: 'controllers',
										items: [
											{ label: 'Definicion', slug: 'manual-tecnico/app-serviser/controllers/1-definicion-controllers' },
											{ label: 'AddressController.php', slug: 'manual-tecnico/app-serviser/controllers/address-controller' },
											{ label: 'CourseController.php', slug: 'manual-tecnico/app-serviser/controllers/course-controller' },
											{ label: 'EnrollmentMessageController.php', slug: 'manual-tecnico/app-serviser/controllers/enrollment-message' },
											{ label: 'LessonController.php', slug: 'manual-tecnico/app-serviser/controllers/lesson-controller' },
											{ label: 'MemberController.php', slug: 'manual-tecnico/app-serviser/controllers/member-controller' },
											{ label: 'ProfileController.php', slug: 'manual-tecnico/app-serviser/controllers/profile-controller' },
											{ label: 'ProfileInfoController.php', slug: 'manual-tecnico/app-serviser/controllers/profile-info-controller' },
											{ label: 'SiteController.php', slug: 'manual-tecnico/app-serviser/controllers/site-controller' },
											{ label: 'TestController.php', slug: 'manual-tecnico/app-serviser/controllers/test-controller' },
										],	
									},
									{ 
										label: 'mail',
										items: [

											{ 
												label: 'layouts',
												items: [
													{ label: 'html.php', slug: 'manual-tecnico/app-serviser/mail/layouts/html' },
													{ label: 'text.php', slug: 'manual-tecnico/app-serviser/mail/layouts/text' },
												],	
											},
											
											{ label: 'emailVerify-html.php', slug: 'manual-tecnico/app-serviser/mail/email-verify-html' },
											{ label: 'emailVerify-text.php', slug: 'manual-tecnico/app-serviser/mail/email-verify-text' },
											{ label: 'passwordResetToken-html.php', slug: 'manual-tecnico/app-serviser/mail/password-reset-html' },
											{ label: 'passwordResetToken-text.php', slug: 'manual-tecnico/app-serviser/mail/password-reset-text' },
										],	
									},
									{ 
										label: 'messages/es-CO',
										items: [
											{ label: 'app.php', slug: 'manual-tecnico/app-serviser/messages/app-php' },
										],	
									},
									{ 
										label: 'models',
										items: [
											{ label: 'ContactForm.php', slug: 'manual-tecnico/app-serviser/models/contact-form' },
											{ label: 'PasswordResetRequestForm.php', slug: 'manual-tecnico/app-serviser/models/password-reset-form' },
											{ label: 'ResendVerificationEmailForm.php', slug: 'manual-tecnico/app-serviser/models/resend-verification-form' },
											{ label: 'ResetPasswordForm.php', slug: 'manual-tecnico/app-serviser/models/reset-password-form' },
											{ label: 'SignupForm.php', slug: 'manual-tecnico/app-serviser/models/signup-form' },
											{ label: 'VerifyEmailForm.php', slug: 'manual-tecnico/app-serviser/models/verify-email-form' },
										],	
									},
									{ 
										label: 'runtime',
										items: [
											{ label: '.gitignore', slug: 'manual-tecnico/app-serviser/runtime/gitignore' },
										],	
									},
									{ 
										label: 'tests',
										items: [
											{ 
												label: '_data',
												items: [
													{ label: 'login_data.php', slug: 'manual-tecnico/app-serviser/tests/data/login-data' },
													{ label: 'user.php', slug: 'manual-tecnico/app-serviser/tests/data/user' },
												],	
											},
											{ 
												label: '_output',
												items: [
													{ label: '.gitignore', slug: 'manual-tecnico/app-serviser/tests/output/gitignore' },
												],	
											},
											{ 
												label: '_support',
												items: [
													{ label: '.gitignore', slug: 'manual-tecnico/app-serviser/tests/support/gitignore' },
													{ label: 'FunctionalTester.php', slug: 'manual-tecnico/app-serviser/tests/support/functional-tester' },
													{ label: 'UnitTester.php', slug: 'manual-tecnico/app-serviser/tests/support/unit-tester' },
												],	
											},
											{ 
												label: 'acceptance',
												items: [
													{ label: '_bootstrap.php', slug: 'manual-tecnico/app-serviser/tests/acceptance/bootstrap' },
													{ label: 'HomeCest.php', slug: 'manual-tecnico/app-serviser/tests/acceptance/home-cest' },
												],	
											},
											{ 
												label: 'functional',
												items: [
													{ label: '_bootstrap.php', slug: 'manual-tecnico/app-serviser/tests/functional/bootstrap' },
													{ label: 'AboutCest.php', slug: 'manual-tecnico/app-serviser/tests/functional/about-cest' },
													{ label: 'ContactCest.php', slug: 'manual-tecnico/app-serviser/tests/functional/contact-cest' },
													{ label: 'HomeCest.php', slug: 'manual-tecnico/app-serviser/tests/functional/home-cest' },
													{ label: 'LoginCest.php', slug: 'manual-tecnico/app-serviser/tests/functional/login-cest' },
													{ label: 'ResendVerificationEmailCest.php', slug: 'manual-tecnico/app-serviser/tests/functional/resend-verification-cest' },
													{ label: 'SignupCest.php', slug: 'manual-tecnico/app-serviser/tests/functional/signup-cest' },
													{ label: 'VerifyEmailCest.php', slug: 'manual-tecnico/app-serviser/tests/functional/verify-email-cest' },
												],	
											},
											//{ label: 'AppAsset', slug: 'manual-tecnico/app-serviser/assets/app-asset' },
										],	
									},
									{ 
										label: 'views',
										items: [
											//{ label: 'AppAsset', slug: 'manual-tecnico/app-serviser/assets/app-asset' },
										],	
									},
									{ 
										label: 'web',
										items: [
											//{ label: 'AppAsset', slug: 'manual-tecnico/app-serviser/assets/app-asset' },
										],	
									},
									
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
					autogenerate: { directory: 'manual-usuario' },
				},
			],
		}),
	],
});
