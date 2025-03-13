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
											{ 
												label: 'unit',
												items: [
													{ 
														label: 'models',
														items: [
															{ label: 'ContactFormTest.php', slug: 'manual-tecnico/app-serviser/tests/unit/models/contact-form-test' },
															{ label: 'PasswordResetRequestFormTest.php', slug: 'manual-tecnico/app-serviser/tests/unit/models/password-reset-test' },
															{ label: 'ResendVerificationEmailFormTest.php', slug: 'manual-tecnico/app-serviser/tests/unit/models/resend-verification-test' },
															{ label: 'ResetPasswordFormTest.php', slug: 'manual-tecnico/app-serviser/tests/unit/models/reset-password-test' },
															{ label: 'SignupFormTest.php', slug: 'manual-tecnico/app-serviser/tests/unit/models/signup-form-test' },
															{ label: 'VerifyEmailFormTest.php', slug: 'manual-tecnico/app-serviser/tests/unit/models/verify-email-test' },
														],	
													},
													
												],
													
											},
											{ label: '_bootstrap.php', slug: 'manual-tecnico/app-serviser/tests/bootstrap' },
											{ label: 'acceptance.suite.yml.example', slug: 'manual-tecnico/app-serviser/tests/acceptance-suite-yml' },
											{ label: 'functional.suite.yml', slug: 'manual-tecnico/app-serviser/tests/functional-suite-yml' },
											{ label: 'unit.suite.yml', slug: 'manual-tecnico/app-serviser/tests/unit-suite-yml' },
											
										],	
									},
									{ 
										label: 'views',
										items: [
											{ 
												label: 'address',
												items: [
													{ label: '_form.php', slug: 'manual-tecnico/app-serviser/views/address/form' },
													{ label: '_search.php', slug: 'manual-tecnico/app-serviser/views/address/search' },
													{ label: 'create.php', slug: 'manual-tecnico/app-serviser/views/address/create' },
													{ label: 'index.php', slug: 'manual-tecnico/app-serviser/views/address/indexa' },
													{ label: 'update.php', slug: 'manual-tecnico/app-serviser/views/address/update' },
													{ label: 'view.php', slug: 'manual-tecnico/app-serviser/views/address/view' },
												],	
											},
											{ 
												label: 'course',
												items: [
													{ label: 'view.php', slug: 'manual-tecnico/app-serviser/views/course/view' },
												],	
											},
											{ 
												label: 'enrollment-message',
												items: [
													{ label: '_form', slug: 'manual-tecnico/app-serviser/views/enrollment-message/form' },
													{ label: '_search', slug: 'manual-tecnico/app-serviser/views/enrollment-message/search' },
													{ label: 'create', slug: 'manual-tecnico/app-serviser/views/enrollment-message/create' },
													{ label: 'index', slug: 'manual-tecnico/app-serviser/views/enrollment-message/indexa' },
													{ label: 'update', slug: 'manual-tecnico/app-serviser/views/enrollment-message/update' },
													{ label: 'view', slug: 'manual-tecnico/app-serviser/views/enrollment-message/view' },
												],	
											},
											{ 
												label: 'layouts',
												items: [
													{ label: 'footer.php', slug: 'manual-tecnico/app-serviser/views/layouts/footer' },
													{ label: 'header.php', slug: 'manual-tecnico/app-serviser/views/layouts/header' },
													{ label: 'main.php', slug: 'manual-tecnico/app-serviser/views/layouts/main' },
												],	
											},
											{ 
												label: 'lesson',
												items: [
													{ label: 'view.php', slug: 'manual-tecnico/app-serviser/views/lesson/view' },
												],	
											},
											{ 
												label: 'member',
												items: [
													{ label: 'index.php', slug: 'manual-tecnico/app-serviser/views/member/indexa' },
												],	
											},
											{ 
												label: 'profile',
												items: [
													{ label: '_form', slug: 'manual-tecnico/app-serviser/views/profile/form' },
													{ label: '_search', slug: 'manual-tecnico/app-serviser/views/profile/search' },
													{ label: 'create.php', slug: 'manual-tecnico/app-serviser/views/profile/create' },
													{ label: 'index.php', slug: 'manual-tecnico/app-serviser/views/profile/indexa' },
													{ label: 'update.php', slug: 'manual-tecnico/app-serviser/views/profile/update' },
													{ label: 'view.php', slug: 'manual-tecnico/app-serviser/views/profile/view' },
												],	
											},
											{ 
												label: 'profile-info',
												items: [
													{ label: '_form', slug: 'manual-tecnico/app-serviser/views/profile-info/form' },
													{ label: '_search', slug: 'manual-tecnico/app-serviser/views/profile-info/search' },
													{ label: 'create.php', slug: 'manual-tecnico/app-serviser/views/profile-info/create' },
													{ label: 'index.php', slug: 'manual-tecnico/app-serviser/views/profile-info/indexa' },
													{ label: 'update.php', slug: 'manual-tecnico/app-serviser/views/profile-info/update' },
													{ label: 'view.php', slug: 'manual-tecnico/app-serviser/views/profile-info/view' },
												],	
											},
											{ 
												label: 'site',
												items: [
													{ label: 'about.php', slug: 'manual-tecnico/app-serviser/views/site/about' },
													{ label: 'contact.php', slug: 'manual-tecnico/app-serviser/views/site/contact' },
													{ label: 'error.php', slug: 'manual-tecnico/app-serviser/views/site/error' },
													{ label: 'index.php', slug: 'manual-tecnico/app-serviser/views/site/indexa' },
													{ label: 'kpi.php', slug: 'manual-tecnico/app-serviser/views/site/kpi' },
													{ label: 'login.php', slug: 'manual-tecnico/app-serviser/views/site/login' },
													{ label: 'project.php', slug: 'manual-tecnico/app-serviser/views/site/project' },
													{ label: 'requestPasswordResetToken.php', slug: 'manual-tecnico/app-serviser/views/site/request-password' },
													{ label: 'resendVerificationEmail.php', slug: 'manual-tecnico/app-serviser/views/site/resend-verification' },
													{ label: 'resetPassword.php', slug: 'manual-tecnico/app-serviser/views/site/reset-password' },
													{ label: 'scientific.php', slug: 'manual-tecnico/app-serviser/views/site/scientific' },
													{ label: 'signup.php', slug: 'manual-tecnico/app-serviser/views/site/signup' },
												],	
											},
											{ 
												label: 'test',
												items: [
													{ label: 'course.php', slug: 'manual-tecnico/app-serviser/views/test/course' },
													{ label: 'index.php', slug: 'manual-tecnico/app-serviser/views/test/indexa' },
												],	
											},
											
										],	
									},
									{ 
										label: 'web',
										items: [
											{ 
												label: 'bootstrap',
												items: [
													{ 
														label: 'css',
														items: [
															{ label: 'bootstrap-grid.css', slug: 'manual-tecnico/app-serviser/web/bootstrap/css/bootstrap-grid' },
															{ label: 'bootstrap-grid.css.map', slug: 'manual-tecnico/app-serviser/web/bootstrap/css/bootstrap-grid-map' },
															{ label: 'bootstrap-grid.min.css', slug: 'manual-tecnico/app-serviser/web/bootstrap/css/bootstrap-grid-min' },
															{ label: 'bootstrap-grid.min.css.map', slug: 'manual-tecnico/app-serviser/web/bootstrap/css/bootstrap-grid-min-map' },
															{ label: 'bootstrap-grid.rtl.css', slug: 'manual-tecnico/app-serviser/web/bootstrap/css/bootstrap-grid-rtl' },
															{ label: 'bootstrap-grid.rtl.css.map', slug: 'manual-tecnico/app-serviser/web/bootstrap/css/bootstrap-grid-rtl-map' },
															{ label: 'bootstrap-grid.rtl.min.css', slug: 'manual-tecnico/app-serviser/web/bootstrap/css/bootstrap-grid-rtl-min' },
															{ label: 'bootstrap-grid.rtl.min.css.map', slug: 'manual-tecnico/app-serviser/web/bootstrap/css/bootstrap-grid-rtl-min-map' },
															{ label: 'bootstrap-reboot.css', slug: 'manual-tecnico/app-serviser/web/bootstrap/css/bootstrap-reboot' },
															{ label: 'bootstrap-reboot.css.map', slug: 'manual-tecnico/app-serviser/web/bootstrap/css/bootstrap-reboot-map' },
															{ label: 'bootstrap-reboot.min.css', slug: 'manual-tecnico/app-serviser/web/bootstrap/css/bootstrap-reboot-min' },
															{ label: 'bootstrap-reboot.min.css.map', slug: 'manual-tecnico/app-serviser/web/bootstrap/css/bootstrap-reboot-min-map' },
															{ label: 'bootstrap-reboot.rtl.css', slug: 'manual-tecnico/app-serviser/web/bootstrap/css/bootstrap-reboot-rtl' },
															{ label: 'bootstrap-reboot.rtl.css.map', slug: 'manual-tecnico/app-serviser/web/bootstrap/css/bootstrap-reboot-rtl-map' },
															{ label: 'bootstrap-reboot.rtl.min.css', slug: 'manual-tecnico/app-serviser/web/bootstrap/css/bootstrap-reboot-rtl-min' },
															{ label: 'bootstrap-reboot.rtl.min.css.map', slug: 'manual-tecnico/app-serviser/web/bootstrap/css/bootstrap-reboot-rtl-min-map' },
															{ label: 'bootstrap-utilities.css', slug: 'manual-tecnico/app-serviser/web/bootstrap/css/bootstrap-utilities' },
															{ label: 'bootstrap-utilities.css.map', slug: 'manual-tecnico/app-serviser/web/bootstrap/css/bootstrap-utilities-map' },
															{ label: 'bootstrap-utilities.min.css', slug: 'manual-tecnico/app-serviser/web/bootstrap/css/bootstrap-utilities-min' },
															{ label: 'bootstrap-utilities.min.css.map', slug: 'manual-tecnico/app-serviser/web/bootstrap/css/bootstrap-utilities-min-map' },
															{ label: 'bootstrap-utilities.rtl.css', slug: 'manual-tecnico/app-serviser/web/bootstrap/css/bootstrap-utilities-rtl' },
															{ label: 'bootstrap-utilities.rtl.css.map', slug: 'manual-tecnico/app-serviser/web/bootstrap/css/bootstrap-utilities-rtl-map' },
															{ label: 'bootstrap-utilities.rtl.min.css', slug: 'manual-tecnico/app-serviser/web/bootstrap/css/bootstrap-utilities-rtl-min' },
															{ label: 'bootstrap-utilities.rtl.min.css.map', slug: 'manual-tecnico/app-serviser/web/bootstrap/css/bootstrap-utilities-rtl-min-map' },
															{ label: 'bootstrap.css', slug: 'manual-tecnico/app-serviser/web/bootstrap/css/bootstrap' },
															{ label: 'bootstrap.css.map', slug: 'manual-tecnico/app-serviser/web/bootstrap/css/bootstrap-map' },
															{ label: 'bootstrap.min.css', slug: 'manual-tecnico/app-serviser/web/bootstrap/css/bootstrap-min' },
															{ label: 'bootstrap.min.css.map', slug: 'manual-tecnico/app-serviser/web/bootstrap/css/bootstrap-min-map' },
															{ label: 'bootstrap.rtl.css', slug: 'manual-tecnico/app-serviser/web/bootstrap/css/bootstrap-rtl' },
															{ label: 'bootstrap.rtl.css.map', slug: 'manual-tecnico/app-serviser/web/bootstrap/css/bootstrap-rtl-map' },
															{ label: 'bootstrap.rtl.min.css', slug: 'manual-tecnico/app-serviser/web/bootstrap/css/bootstrap-rtl-min' },
															{ label: 'bootstrap.rtl.min.css.map', slug: 'manual-tecnico/app-serviser/web/bootstrap/css/bootstrap-rtl-min-map' },
															 
														],	
													},
													{ 
														label: 'js',
														items: [
															{ label: 'bootstrap.bundle.js', slug: 'manual-tecnico/app-serviser/web/bootstrap/js/bootstrap-bundle' },
															{ label: 'bootstrap.bundle.js.map', slug: 'manual-tecnico/app-serviser/web/bootstrap/js/bootstrap-bundle-map' },
															{ label: 'bootstrap.bundle.min.js', slug: 'manual-tecnico/app-serviser/web/bootstrap/js/bootstrap-bundle-min' },
															{ label: 'bootstrap.bundle.min.js.map', slug: 'manual-tecnico/app-serviser/web/bootstrap/js/bootstrap-bundle-min-map' },
															{ label: 'bootstrap.esm.js', slug: 'manual-tecnico/app-serviser/web/bootstrap/js/bootstrap-esm' },
															{ label: 'bootstrap.esm.js.map', slug: 'manual-tecnico/app-serviser/web/bootstrap/js/bootstrap-esm-map' },
															{ label: 'bootstrap.esm.min.js', slug: 'manual-tecnico/app-serviser/web/bootstrap/js/bootstrap-esm-min' },
															{ label: 'bootstrap.esm.min.js.map', slug: 'manual-tecnico/app-serviser/web/bootstrap/js/bootstrap-esm-min-map' },
															{ label: 'bootstrap.js', slug: 'manual-tecnico/app-serviser/web/bootstrap/js/bootstrap' },
															{ label: 'bootstrap.js.map', slug: 'manual-tecnico/app-serviser/web/bootstrap/js/bootstrap-map' },
															{ label: 'bootstrap.min.js', slug: 'manual-tecnico/app-serviser/web/bootstrap/js/bootstrap-min' },
															{ label: 'bootstrap.min.js.map', slug: 'manual-tecnico/app-serviser/web/bootstrap/js/bootstrap-min-map' },
															
														],	
													},
												],	
											},
											{ 
												label: 'css',
												items: [
													{ label: 'custom.css', slug: 'manual-tecnico/app-serviser/web/css/custom' },
													{ label: 'site.css', slug: 'manual-tecnico/app-serviser/web/css/site' },
												],	
											},
											{ 
												label: 'images',
												items: [
													{ label: 'images', slug: 'manual-tecnico/app-serviser/web/images/images' },
													
												],	
											},
											{ label: '.htaccess', slug: 'manual-tecnico/app-serviser/web/htaccess' },
											{ label: 'favicon.ico', slug: 'manual-tecnico/app-serviser/web/favicon' },
											{ label: 'index-test.php', slug: 'manual-tecnico/app-serviser/web/index-test' },
											{ label: 'index.php', slug: 'manual-tecnico/app-serviser/web/indexa' },
											{ label: 'robots.txt', slug: 'manual-tecnico/app-serviser/web/robots' },
										],
											
									},
									{ label: 'codeception.yml', slug: 'manual-tecnico/app-serviser/codeception-yml' },
									{ label: 'Dockerfile', slug: 'manual-tecnico/app-serviser/dockerfile' },
									
								],
						},
						{
							label: 'AppServiserAdmin',
							items: [
								// Each item here is one entry in the navigation menu.
								{ 
									label: 'assets',
									items: [
										{ label: 'AppAsset', slug: 'manual-tecnico/app-serviser-admin/assets/app-asset' },
									],	
								},
								{ 
									label: 'config',
									items: [
										//{ label: 'AppAsset', slug: 'manual-tecnico/app-sennova-lab/asset/app-asset' },
										{ label: '.gitignore', slug: 'manual-tecnico/app-serviser-admin/config/gitignore' },
										{ label: 'bootstrap.php', slug: 'manual-tecnico/app-serviser-admin/config/bootstrap' },
										{ label: 'codeception-local.php', slug: 'manual-tecnico/app-serviser-admin/config/codeception-local' },
										{ label: 'i18n-config.php', slug: 'manual-tecnico/app-serviser-admin/config/i18n-config' },
										{ label: 'main-local.php', slug: 'manual-tecnico/app-serviser-admin/config/main-local' },
										{ label: 'main.php', slug: 'manual-tecnico/app-serviser-admin/config/main' },
										{ label: 'params-local.php', slug: 'manual-tecnico/app-serviser-admin/config/params-local' },
										{ label: 'params.php', slug: 'manual-tecnico/app-serviser-admin/config/params' },
										{ label: 'test-local.php', slug: 'manual-tecnico/app-serviser-admin/config/test-local' },
										{ label: 'test.php', slug: 'manual-tecnico/app-serviser-admin/config/test' },
									],	
								},
								{ 
									label: 'controllers',
									items: [
										{ label: 'AnnouncementController.php', slug: 'manual-tecnico/app-serviser-admin/controllers/announcement' },
										{ label: 'AuthAssignmentController.php', slug: 'manual-tecnico/app-serviser-admin/controllers/auth-assignment' },
										{ label: 'AuthItemController.php', slug: 'manual-tecnico/app-serviser-admin/controllers/auth-item' },
										{ label: 'CourseController.php', slug: 'manual-tecnico/app-serviser-admin/controllers/course' },
										{ label: 'CourseModuleController.php', slug: 'manual-tecnico/app-serviser-admin/controllers/course-module' },
										{ label: 'DiscussionForumController.php', slug: 'manual-tecnico/app-serviser-admin/controllers/discussion' },
										{ label: 'EnrollmentController.php', slug: 'manual-tecnico/app-serviser-admin/controllers/enrollment' },
										{ label: 'EnrollmentMessageController.php', slug: 'manual-tecnico/app-serviser-admin/controllers/enrollment-messages' },
										{ label: 'FeedbackController.php', slug: 'manual-tecnico/app-serviser-admin/controllers/feedback' },
										{ label: 'FileController.php', slug: 'manual-tecnico/app-serviser-admin/controllers/file' },
										{ label: 'GroupController.php', slug: 'manual-tecnico/app-serviser-admin/controllers/group' },
										{ label: 'LessonController.php', slug: 'manual-tecnico/app-serviser-admin/controllers/lesson' },
										{ label: 'LessonResourceController.php', slug: 'manual-tecnico/app-serviser-admin/controllers/lesson-resource' },
										{ label: 'MentorshipController.php', slug: 'manual-tecnico/app-serviser-admin/controllers/mentorship' },
										{ label: 'ProfileController.php', slug: 'manual-tecnico/app-serviser-admin/controllers/profile' },
										{ label: 'QuestionController.php', slug: 'manual-tecnico/app-serviser-admin/controllers/question' },
										{ label: 'SectionController.php', slug: 'manual-tecnico/app-serviser-admin/controllers/section' },
										{ label: 'SiteController.php', slug: 'manual-tecnico/app-serviser-admin/controllers/site' },
										{ label: 'SurveyController.php', slug: 'manual-tecnico/app-serviser-admin/controllers/survey' },
										{ label: 'UserController.php', slug: 'manual-tecnico/app-serviser-admin/controllers/user' },
										
									],	
								},
								
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
