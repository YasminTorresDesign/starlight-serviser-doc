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
								{ 
									label: 'messages/es-CO',
									items: [
										{ label: 'app_original.php', slug: 'manual-tecnico/app-serviser-admin/messages/app-original' },
										{ label: 'app.php', slug: 'manual-tecnico/app-serviser-admin/messages/app' },
									],	
								},
								{ 
									label: 'models',
									items: [
										{ label: '.gitkeep', slug: 'manual-tecnico/app-serviser-admin/models/gitkeep' },
									],	
								},
								{ 
									label: 'runtime',
									items: [
										{ label: '.gitignore.php', slug: 'manual-tecnico/app-serviser-admin/runtime/gitignore' },
									],	
								},
								{ 
									label: 'tests',
									items: [
										{ 
											label: '_data',
											items: [
												{ label: '.gitignore.php', slug: 'manual-tecnico/app-serviser-admin/tests/data/gitignore' },
												{ label: 'login_data.php', slug: 'manual-tecnico/app-serviser-admin/tests/data/login-data' },
											],	
										},
										{ 
											label: '_output',
											items: [
												{ label: '.gitignore', slug: 'manual-tecnico/app-serviser-admin/tests/output/gitignore' },
											],	
										},
										{ 
											label: '_support',
											items: [
												{ label: '.gitignore', slug: 'manual-tecnico/app-serviser-admin/tests/support/gitignore' },
												{ label: 'FunctionalTester.php', slug: 'manual-tecnico/app-serviser-admin/tests/support/functional-tester' },
												{ label: 'UnitTester.php', slug: 'manual-tecnico/app-serviser-admin/tests/support/unit-tester' },
											],	
										},
										{ 
											label: 'functional',
											items: [
												{ label: '_bootstrap.php', slug: 'manual-tecnico/app-serviser-admin/tests/functional/bootstrap' },
												{ label: 'LoginCest.php', slug: 'manual-tecnico/app-serviser-admin/tests/functional/login-cest' },
											],	
										},
										{ 
											label: 'unit',
											items: [
												{ label: '_bootstrap.php', slug: 'manual-tecnico/app-serviser-admin/tests/unit/bootstrap' },
											],	
										},
										{ label: 'functional.suite.yml', slug: 'manual-tecnico/app-serviser-admin/tests/functional-suite-yml' },
										{ label: 'unit.suite.yml', slug: 'manual-tecnico/app-serviser-admin/tests/unit-suite-yml' },
									],	
								},
								{ 
									label: 'views',
									items: [
										{ 
											label: 'auth-assignment',
											items: [
												{ label: '_form.php', slug: 'manual-tecnico/app-serviser-admin/views/auth-assignment/form' },
												{ label: '_search.php', slug: 'manual-tecnico/app-serviser-admin/views/auth-assignment/search' },
												{ label: 'create.php', slug: 'manual-tecnico/app-serviser-admin/views/auth-assignment/create' },
												{ label: 'index.php', slug: 'manual-tecnico/app-serviser-admin/views/auth-assignment/indexa' },
												{ label: 'update.php', slug: 'manual-tecnico/app-serviser-admin/views/auth-assignment/update' },
												{ label: 'view.php', slug: 'manual-tecnico/app-serviser-admin/views/auth-assignment/view' },
											],	
										},
										{ 
											label: 'auth-item',
											items: [
												{ label: '_form.php', slug: 'manual-tecnico/app-serviser-admin/views/auth-item/form' },
												{ label: '_search.php', slug: 'manual-tecnico/app-serviser-admin/views/auth-item/search' },
												{ label: 'create.php', slug: 'manual-tecnico/app-serviser-admin/views/auth-item/create' },
												{ label: 'index.php', slug: 'manual-tecnico/app-serviser-admin/views/auth-item/indexa' },
												{ label: 'update.php', slug: 'manual-tecnico/app-serviser-admin/views/auth-item/update' },
												{ label: 'view.php', slug: 'manual-tecnico/app-serviser-admin/views/auth-item/view' },
											],	
										},
										{ 
											label: 'course',
											items: [
												{ label: '_form.php', slug: 'manual-tecnico/app-serviser-admin/views/course/form' },
												{ label: '_formmini.php', slug: 'manual-tecnico/app-serviser-admin/views/course/formmini' },
												{ label: '_search.php', slug: 'manual-tecnico/app-serviser-admin/views/course/search' },
												{ label: 'create.php', slug: 'manual-tecnico/app-serviser-admin/views/course/create' },
												{ label: 'index.php', slug: 'manual-tecnico/app-serviser-admin/views/course/indexa' },
												{ label: 'update.php', slug: 'manual-tecnico/app-serviser-admin/views/course/update' },
												{ label: 'view.php', slug: 'manual-tecnico/app-serviser-admin/views/course/view' },
											],	
										},
										{ 
											label: 'course-module',
											items: [
												{ label: '_form.php', slug: 'manual-tecnico/app-serviser-admin/views/course-module/form' },
												{ label: '_formmini.php', slug: 'manual-tecnico/app-serviser-admin/views/course-module/formmini' },
												{ label: '_search.php', slug: 'manual-tecnico/app-serviser-admin/views/course-module/search' },
												{ label: 'create.php', slug: 'manual-tecnico/app-serviser-admin/views/course-module/create' },
												{ label: 'index.php', slug: 'manual-tecnico/app-serviser-admin/views/course-module/indexa' },
												{ label: 'update.php', slug: 'manual-tecnico/app-serviser-admin/views/course-module/update' },
												{ label: 'view.php', slug: 'manual-tecnico/app-serviser-admin/views/course-module/view' },
											],	
										},
										{ 
											label: 'enrollment',
											items: [
												{ label: '_form-enroll.php', slug: 'manual-tecnico/app-serviser-admin/views/enrollment/form-enroll' },
												{ label: '_form-unenroll.php', slug: 'manual-tecnico/app-serviser-admin/views/enrollment/form-unenroll' },
												{ label: 'enroll.php', slug: 'manual-tecnico/app-serviser-admin/views/enrollment/enroll' },
												{ label: 'indexa.php', slug: 'manual-tecnico/app-serviser-admin/views/enrollment/indexa' },
												{ label: 'unenroll.php', slug: 'manual-tecnico/app-serviser-admin/views/enrollment/unenroll' },
												{ label: 'view.php', slug: 'manual-tecnico/app-serviser-admin/views/enrollment/view' },
											],	
										},
										{ 
											label: 'enrollment-message',
											items: [
												{ label: '_form.php', slug: 'manual-tecnico/app-serviser-admin/views/enrollment-message/form' },
												{ label: '_search.php', slug: 'manual-tecnico/app-serviser-admin/views/enrollment-message/search' },
												{ label: 'create.php', slug: 'manual-tecnico/app-serviser-admin/views/enrollment-message/create' },
												{ label: 'indexa.php', slug: 'manual-tecnico/app-serviser-admin/views/enrollment-message/indexa' },
												{ label: 'update.php', slug: 'manual-tecnico/app-serviser-admin/views/enrollment-message/update' },
												{ label: 'view.php', slug: 'manual-tecnico/app-serviser-admin/views/enrollment-message/view' },
											],	
										},
										{ 
											label: 'group',
											items: [
												{ label: '_form.php', slug: 'manual-tecnico/app-serviser-admin/views/group/form' },
												{ label: '_search.php', slug: 'manual-tecnico/app-serviser-admin/views/group/search' },
												{ label: 'create.php', slug: 'manual-tecnico/app-serviser-admin/views/group/create' },
												{ label: 'indexa.php', slug: 'manual-tecnico/app-serviser-admin/views/group/indexa' },
												{ label: 'update.php', slug: 'manual-tecnico/app-serviser-admin/views/group/update' },
												{ label: 'view.php', slug: 'manual-tecnico/app-serviser-admin/views/group/view' },
											],	
										},
										{ 
											label: 'layouts',
											items: [
												{ label: 'blank.php', slug: 'manual-tecnico/app-serviser-admin/views/layouts/blank' },
												{ label: 'content.php', slug: 'manual-tecnico/app-serviser-admin/views/layouts/content' },
												{ label: 'control-sidebar.php', slug: 'manual-tecnico/app-serviser-admin/views/layouts/control-sidebar' },
												{ label: 'footer.php', slug: 'manual-tecnico/app-serviser-admin/views/layouts/footer' },
												{ label: 'main-login.php', slug: 'manual-tecnico/app-serviser-admin/views/layouts/main-login' },
												{ label: 'main.php', slug: 'manual-tecnico/app-serviser-admin/views/layouts/main' },
												{label: 'navbar.php', slug: 'manual-tecnico/app-serviser-admin/views/layouts/navbar' },
												{label: 'sidebar.php', slug: 'manual-tecnico/app-serviser-admin/views/layouts/sidebar' },
											],	
										},
										{ 
											label: 'lesson',
											items: [
												{ label: '_form.php', slug: 'manual-tecnico/app-serviser-admin/views/lesson/form' },
												{ label: '_search.php', slug: 'manual-tecnico/app-serviser-admin/views/lesson/search' },
												{ label: 'create.php', slug: 'manual-tecnico/app-serviser-admin/views/lesson/create' },
												{ label: 'indexa.php', slug: 'manual-tecnico/app-serviser-admin/views/lesson/indexa' },
												{ label: 'preview.php', slug: 'manual-tecnico/app-serviser-admin/views/lesson/preview' },
												{ label: 'update.php', slug: 'manual-tecnico/app-serviser-admin/views/lesson/update' },
												{ label: 'view.php', slug: 'manual-tecnico/app-serviser-admin/views/lesson/view' },
											],	
										},
										{ 
											label: 'mentorship',
											items: [
												{ label: '_form.php', slug: 'manual-tecnico/app-serviser-admin/views/mentorship/form' },
												{ label: '_search.php', slug: 'manual-tecnico/app-serviser-admin/views/mentorship/search' },
												{ label: 'create.php', slug: 'manual-tecnico/app-serviser-admin/views/mentorship/create' },
												{ label: 'indexa.php', slug: 'manual-tecnico/app-serviser-admin/views/mentorship/indexa' },
												{ label: 'update.php', slug: 'manual-tecnico/app-serviser-admin/views/mentorship/update' },
												{ label: 'view.php', slug: 'manual-tecnico/app-serviser-admin/views/mentorship/view' },
											],	
										},
										{ 
											label: 'profile',
											items: [
												{ label: '_form.php', slug: 'manual-tecnico/app-serviser-admin/views/profile/form' },
												{ label: '_search.php', slug: 'manual-tecnico/app-serviser-admin/views/profile/search' },
												{ label: 'create.php', slug: 'manual-tecnico/app-serviser-admin/views/profile/create' },
												{ label: 'indexa.php', slug: 'manual-tecnico/app-serviser-admin/views/profile/indexa' },
												{ label: 'update.php', slug: 'manual-tecnico/app-serviser-admin/views/profile/update' },
												{ label: 'view.php', slug: 'manual-tecnico/app-serviser-admin/views/profile/view' },
											],	
										},
										{ 
											label: 'question',
											items: [
												{ label: '_form.php', slug: 'manual-tecnico/app-serviser-admin/views/question/form' },
												{ label: '_search.php', slug: 'manual-tecnico/app-serviser-admin/views/question/search' },
												{ label: 'create.php', slug: 'manual-tecnico/app-serviser-admin/views/question/create' },
												{ label: 'indexa.php', slug: 'manual-tecnico/app-serviser-admin/views/question/indexa' },
												{ label: 'update.php', slug: 'manual-tecnico/app-serviser-admin/views/question/update' },
												{ label: 'view.php', slug: 'manual-tecnico/app-serviser-admin/views/question/view' },
											],	
										},
										{ 
											label: 'section',
											items: [
												{ label: '_form.php', slug: 'manual-tecnico/app-serviser-admin/views/section/form' },
												{ label: '_search.php', slug: 'manual-tecnico/app-serviser-admin/views/section/search' },
												{ label: 'create.php', slug: 'manual-tecnico/app-serviser-admin/views/section/create' },
												{ label: 'indexa.php', slug: 'manual-tecnico/app-serviser-admin/views/section/indexa' },
												{ label: 'update.php', slug: 'manual-tecnico/app-serviser-admin/views/section/update' },
												{ label: 'view.php', slug: 'manual-tecnico/app-serviser-admin/views/section/view' },
											],	
										},
										{ 
											label: 'site',
											items: [
												{ label: 'error.php', slug: 'manual-tecnico/app-serviser-admin/views/site/error' },
												{ label: 'index-original.php', slug: 'manual-tecnico/app-serviser-admin/views/site/index-original' },
												{ label: 'indexa.php', slug: 'manual-tecnico/app-serviser-admin/views/site/indexa' },
												{ label: 'login.php', slug: 'manual-tecnico/app-serviser-admin/views/site/login' },
											],	
										},
										{ 
											label: 'survey',
											items: [
												{ label: '_form.php', slug: 'manual-tecnico/app-serviser-admin/views/survey/form' },
												{ label: '_search.php', slug: 'manual-tecnico/app-serviser-admin/views/survey/search' },
												{ label: 'create.php', slug: 'manual-tecnico/app-serviser-admin/views/survey/create' },
												{ label: 'indexa.php', slug: 'manual-tecnico/app-serviser-admin/views/survey/indexa' },
												{ label: 'update.php', slug: 'manual-tecnico/app-serviser-admin/views/survey/update' },
												{ label: 'view.php', slug: 'manual-tecnico/app-serviser-admin/views/survey/view' },
											],	
										},
										{ 
											label: 'user',
											items: [
												{ label: '_form.php', slug: 'manual-tecnico/app-serviser-admin/views/user/form' },
												{ label: '_search.php', slug: 'manual-tecnico/app-serviser-admin/views/user/search' },
												{ label: 'create.php', slug: 'manual-tecnico/app-serviser-admin/views/user/create' },
												{ label: 'indexa.php', slug: 'manual-tecnico/app-serviser-admin/views/user/indexa' },
												{ label: 'update.php', slug: 'manual-tecnico/app-serviser-admin/views/user/update' },
												{ label: 'view.php', slug: 'manual-tecnico/app-serviser-admin/views/user/view' },
											],	
										},
									],	
								},
								{ 
									label: 'web',
									items: [
										{ 
											label: 'ckeditor',
											items: [
												{ 
													label: 'ckeditor5',
													items: [
														{ 
															label: 'traslations',
															items: [
																{ label: 'af.d.ts', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/af-d-ts' },
																{ label: 'af.js', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/af-js' },
																{ label: 'af.umd.js', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/af-umd-js' },
																{ label: 'ar.d.ts', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/ar-d-ts' },
																{ label: 'ar.js', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/ar-js' },
																{ label: 'ar.umd.js', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/ar-umd-js' },
																{ label: 'ast.d.ts', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/ast-d-ts' },
																{ label: 'ast.js', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/ast-js' },
																{ label: 'ast.umd.js', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/ast-umd-js' },
																{ label: 'az.d.ts', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/az-d-ts' },
																{ label: 'az.js', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/az-js' },
																{ label: 'az.umd.js', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/az-umd-js' },
																{ label: 'bg.d.ts', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/bg-d-ts' },
																{ label: 'bg.js', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/bg-js' },
																{ label: 'bg.umd.js', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/bg-umd-js' },
																{ label: 'bn.d.ts', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/bn-d-ts' },
																{ label: 'bn.js', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/bn-js' },
																{ label: 'bn.umd.js', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/bn-umd-js' },
																{ label: 'bs.d.ts', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/bs-d-ts' },
																{ label: 'bs.js', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/bs-js' },
																{ label: 'bs.umd.js', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/bs-umd-js' },
																{ label: 'ca.d.ts', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/ca-d-ts' },
																{ label: 'ca.js', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/ca-js' },
																{ label: 'ca.umd.js', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/ca-umd-js' },
																{ label: 'cs.d.ts', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/cs-d-ts' },
																{ label: 'cs.js', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/cs-js' },
																{ label: 'cs.umd.js', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/cs-umd-js' },
																{ label: 'da.d.ts', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/da-d-ts' },
																{ label: 'da.js', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/da-js' },
																{ label: 'da.umd.js', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/da-umd-js' },
																{ label: 'de-ch.d.ts', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/de-ch-d-ts' },
																{ label: 'de-ch.js', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/de-ch-js' },
																{ label: 'de-ch.umd.js', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/de-ch-umd-js' },
																{ label: 'de.d.ts', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/de-d-ts' },
																{ label: 'de.js', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/de-js' },
																{ label: 'de.umd.js', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/de-umd-js' },
																{ label: 'el.d.ts', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/el-d-ts' },
																{ label: 'el.js', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/el-js' },
																{ label: 'el.umd.js', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/el-umd-js' },
																{ label: 'en-au.d.ts', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/en-au-d-ts' },
																{ label: 'en-au.js', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/en-au-js' },
																{ label: 'en-au.umd.js', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/en-au-umd-js' },
																{ label: 'en-gb.d.ts', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/en-gb-d-ts' },
																{ label: 'en-gb.js', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/en-gb-js' },
																{ label: 'en-gb.umd.js', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/en-gb-umd-js' },
																{ label: 'eo.d.ts', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/eo-d-ts' },
																{ label: 'eo.js', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/ckeditor5/translations/eo-js' },
																
																
															],	
														},
														
														
													],	
												},
												{ label: 'editor.js', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/editor-js' },
												{ label: 'index-html', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/index-html' },
												{ label: 'LICENSE.md', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/license' },
												{ label: 'README.md', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/readme' },
												{ label: 'upload.php', slug: 'manual-tecnico/app-serviser-admin/web/ckeditor/upload' },
											],	
										},
										{ 
											label: 'css',
											items: [
												{ label: 'site.css', slug: 'manual-tecnico/app-serviser-admin/web/css/site' },
												
											],	
										},
										{ 
											label: 'images',
											items: [
												{ label: 'images', slug: 'manual-tecnico/app-serviser-admin/web/images/images' },
												
											],	
										},
										{ label: 'favicon.ico', slug: 'manual-tecnico/app-serviser-admin/web/favicon' },
										{ label: 'index-test.php', slug: 'manual-tecnico/app-serviser-admin/web/index-test' },
										{ label: 'index.php', slug: 'manual-tecnico/app-serviser-admin/web/indexa' },
										{ label: 'robots.txt', slug: 'manual-tecnico/app-serviser-admin/web/robots' },
										
									],	
								},
								{ label: 'codeception.yml', slug: 'manual-tecnico/app-serviser-admin/codeception-yml' },
								{ label: 'Dockerfile', slug: 'manual-tecnico/app-serviser-admin/dockerfile' },
							],
						},
						{ 
							label: 'common',
							items: [
								{ 
									label: 'components',
									items: [
										{ label: 'ActivityLogger.php', slug: 'manual-tecnico/common/components/activity-logger' },
										{ label: 'TimestampBehavior.php', slug: 'manual-tecnico/common/components/timestamp-behavior' },
									],	
								},
								{ 
									label: 'config',
									items: [
										{ label: '_Copy.gitignore', slug: 'manual-tecnico/common/config/copy-gitignore' },
										{ label: '_autocomplete.php', slug: 'manual-tecnico/common/config/autocomplete' },
										{ label: '.gitignore.php', slug: 'manual-tecnico/common/config/gitignore' },
										{ label: 'bootstrap.php', slug: 'manual-tecnico/common/config/bootstrap' },
										{ label: 'codeception-local.php', slug: 'manual-tecnico/common/config/codeception-local' },
										{ label: 'i18n-config.php', slug: 'manual-tecnico/common/config/i18n-config' },
										{ label: 'main-local.php', slug: 'manual-tecnico/common/config/main-local' },
										{ label: 'main.php', slug: 'manual-tecnico/common/config/main' },
										{ label: 'params-local.php', slug: 'manual-tecnico/common/config/params-local' },
										{ label: 'params-local.php', slug: 'manual-tecnico/common/config/params-local' },
										{ label: 'test-local.php', slug: 'manual-tecnico/common/config/test-local' },
										{ label: 'test.php', slug: 'manual-tecnico/common/config/test' },
									],	
								},
								{ 
									label: 'fixtures',
									items: [
										{ label: 'UserFixture.php', slug: 'manual-tecnico/common/fixtures/user-fixture' },
									],	
								},
								{ 
									label: 'mail',
									items: [
										{ 
											label: 'layouts',
											items: [
												{ label: 'html.php', slug: 'manual-tecnico/common/mail/layouts/html' },
												{ label: 'text.php', slug: 'manual-tecnico/common/mail/layouts/text' },
											],	
										},
										{ label: 'emailVerify-html.php', slug: 'manual-tecnico/common/mail/email-verify-html' },
										{ label: 'emailVerify-text.php', slug: 'manual-tecnico/common/mail/email-verify-text' },
										{ label: 'passwordResetToken-html.php', slug: 'manual-tecnico/common/mail/password-reset-token-html' },
										{ label: 'passwordResetToken-text.php', slug: 'manual-tecnico/common/mail/password-reset-token-text' },
									],	
								},
								{ 
									label: 'messages\es-CO',
									items: [
										{ label: 'app.php', slug: 'manual-tecnico/common/messages/app' },
									],	
								},
								{ 
									label: 'models',
									items: [
										{ label: 'Activitylog.php', slug: 'manual-tecnico/common/models/activity-log' },
										{ label: 'ActivityLogQuery.php', slug: 'manual-tecnico/common/models/activity-log-query' },
										{ label: 'Address.php', slug: 'manual-tecnico/common/models/address' },
										{ label: 'AddressQuery.php', slug: 'manual-tecnico/common/models/address-query' },
										{ label: 'AddressSearch.php', slug: 'manual-tecnico/common/models/address-search' },
										{ label: 'AuthAssignment.php', slug: 'manual-tecnico/common/models/auth-assignment' },
										{ label: 'AuthAssignmentQuery.php', slug: 'manual-tecnico/common/models/auth-assignment-query' },
										{ label: 'AuthAssignmentSearch.php', slug: 'manual-tecnico/common/models/auth-assignment-search' },
										{ label: 'AuthItem.php', slug: 'manual-tecnico/common/models/auth-item' },
										{ label: 'AuthItemQuery.php', slug: 'manual-tecnico/common/models/auth-item-query' },
										{ label: 'AuthItemSearch.php', slug: 'manual-tecnico/common/models/auth-item-search' },
										{ label: 'Course.php', slug: 'manual-tecnico/common/models/course' },
										{ label: 'CourseQuery.php', slug: 'manual-tecnico/common/models/course-query' },
										{ label: 'CourseSearch.php', slug: 'manual-tecnico/common/models/course-search' },
										{ label: 'CourseModule.php', slug: 'manual-tecnico/common/models/course-module' },
										{ label: 'CourseModuleQuery.php', slug: 'manual-tecnico/common/models/course-module-query' },
										{ label: 'CourseModuleSearch.php', slug: 'manual-tecnico/common/models/course-module-search' },
										{ label: 'Enrollment.php', slug: 'manual-tecnico/common/models/enrollment' },
										{ label: 'EnrollmentQuery.php', slug: 'manual-tecnico/common/models/enrollment-query' },
										{ label: 'EnrollmentSearch.php', slug: 'manual-tecnico/common/models/enrollment-search' },
										{ label: 'EnrollmentMessage.php', slug: 'manual-tecnico/common/models/enrollment-message' },
										{ label: 'EnrollmentMessageQuery.php', slug: 'manual-tecnico/common/models/enrollment-message-query' },
										{ label: 'EnrollmentMessageSearch.php', slug: 'manual-tecnico/common/models/enrollment-message-search' },
										{ label: 'GovIdType.php', slug: 'manual-tecnico/common/models/gov-id-type' },
										{ label: 'GovIdTypeQuery.php', slug: 'manual-tecnico/common/models/gov-id-type-query' },
										{ label: 'Lesson.php', slug: 'manual-tecnico/common/models/lesson' },
										{ label: 'LessonQuery.php', slug: 'manual-tecnico/common/models/lesson-query' },
										{ label: 'LessonSearch.php', slug: 'manual-tecnico/common/models/lesson-search' },
										{ label: 'LessonSearch.php', slug: 'manual-tecnico/common/models/lesson-search' },
										{ label: 'LoginForm.php', slug: 'manual-tecnico/common/models/login-form' },
										{ label: 'Mentorship.php', slug: 'manual-tecnico/common/models/mentorship' },
										{ label: 'MentorshipQuery.php', slug: 'manual-tecnico/common/models/mentorship-query' },
										{ label: 'MentorshipSearch.php', slug: 'manual-tecnico/common/models/mentorship-search' },
										{ label: 'Profile.php', slug: 'manual-tecnico/common/models/profile' },
										{ label: 'ProfileQuery.php', slug: 'manual-tecnico/common/models/profile-query' },
										{ label: 'ProfileSearch.php', slug: 'manual-tecnico/common/models/profile-search' },
										{ label: 'ProfileInfo.php', slug: 'manual-tecnico/common/models/profile-info' },
										{ label: 'ProfileInfoQuery.php', slug: 'manual-tecnico/common/models/profile-info-query' },
										{ label: 'ProfileInfoSearch.php', slug: 'manual-tecnico/common/models/profile-info-search' },
										{ label: 'Question.php', slug: 'manual-tecnico/common/models/question' },
										{ label: 'QuestionQuery.php', slug: 'manual-tecnico/common/models/question-query' },
										{ label: 'QuestionSearch.php', slug: 'manual-tecnico/common/models/question-search' },
										{ label: 'Quiz.php', slug: 'manual-tecnico/common/models/quiz' },
										{ label: 'QuizQuery.php', slug: 'manual-tecnico/common/models/quiz-query' },
										{ label: 'QuizAttempt.php', slug: 'manual-tecnico/common/models/quiz-attempt' },
										{ label: 'QuizAttemptQuery.php', slug: 'manual-tecnico/common/models/quiz-attempt-query' },
										{ label: 'QuizGrade.php', slug: 'manual-tecnico/common/models/quiz-grade' },
										{ label: 'QuizGradeQuery.php', slug: 'manual-tecnico/common/models/quiz-grade-query' },
										{ label: 'Section.php', slug: 'manual-tecnico/common/models/section' },
										{ label: 'SectionQuery.php', slug: 'manual-tecnico/common/models/section-query' },
										{ label: 'Survey.php', slug: 'manual-tecnico/common/models/survey' },
										{ label: 'SurveyQuery.php', slug: 'manual-tecnico/common/models/survey-query' },
										{ label: 'SurveySearch.php', slug: 'manual-tecnico/common/models/survey-search' },
										{ label: 'User.php', slug: 'manual-tecnico/common/models/user' },
										{ label: 'UserSearch.php', slug: 'manual-tecnico/common/models/user-search' },
										
										
									],	
								},
								{ 
									label: 'tests',
									items: [
										{ 
											label: '_data',
											items: [
												{ label: 'user.php', slug: 'manual-tecnico/common/tests/data/user' },
											],	
										},
										{ 
											label: '_output',
											items: [
												{ label: '.gitignore.php', slug: 'manual-tecnico/common/tests/output/gitignore' },
											],	
										},
										{ 
											label: '_support',
											items: [
												{ label: '.gitignore', slug: 'manual-tecnico/common/tests/support/gitignore' },
											],	
										},
										{ 
											label: 'unit',
											items: [
												{ 
													label: 'models',
													items: [
														{ label: 'LoginFormTest.php', slug: 'manual-tecnico/common/tests/unit/models/login-form-test' },
													],	
												},
											],	
										},
										{ label: '_bootstrap.php', slug: 'manual-tecnico/common/tests/bootstrap' },
										{ label: 'unit.suite.yml', slug: 'manual-tecnico/common/tests/unit-suite-yml' },
									],	
								},
								{ 
									label: 'widgets',
									items: [
										{ label: 'alert.php', slug: 'manual-tecnico/common/widgets/alert' },
									],	
								},
								{ label: 'codeception.yml', slug: 'manual-tecnico/common/codeception-yml' },
							],	
						},
						{
							label: 'database',
							items: [
								// Each item here is one entry in the navigation menu.
								{ 
									label: 'activity_log',
									items: [
										{ label: 'inicio', slug: 'manual-tecnico/database/inicio/inicio' },
										{ label: 'activity_log', slug: 'manual-tecnico/database/activity_log/activity_log' },
										{ label: 'user', slug: 'manual-tecnico/database/user/user' },
										{ label: 'address', slug: 'manual-tecnico/database/address/address' },
										{ label: 'profile', slug: 'manual-tecnico/database/profile/profile' },
										{ label: 'survey_response_answer', slug: 'manual-tecnico/database/survey_response_answer/survey_response_answer' },
										{ label: 'survey_question', slug: 'manual-tecnico/database/survey_question/survey_question' },
										{ label: 'survey_option', slug: 'manual-tecnico/database/survey_option/survey_option' },
										{ label: 'survey_response', slug: 'manual-tecnico/database/survey_response/survey_response' },
										{ label: 'auth_assignment', slug: 'manual-tecnico/database/auth_assignment/auth_assignment' },
										{ label: 'auth_item', slug: 'manual-tecnico/database/auth_item/auth_item' },
										{ label: 'auth_item_child', slug: 'manual-tecnico/database/auth_item_child/auth_item_child' },
										{ label: 'auth_rule', slug: 'manual-tecnico/database/auth_rule/auth_rule' },
										{ label: 'country', slug: 'manual-tecnico/database/country/country' },
										{ label: 'course', slug: 'manual-tecnico/database/course/course' },
										{ label: 'course_completion', slug: 'manual-tecnico/database/course_completion/course_completion' },
										{ label: 'course_feedback', slug: 'manual-tecnico/database/course_feedback/course_feedback' },
										{ label: 'course_module', slug: 'manual-tecnico/database/course_module/course_module' },
										{ label: 'course_rating', slug: 'manual-tecnico/database/course_rating/course_rating' },
										{ label: 'enrollment', slug: 'manual-tecnico/database/enrollment/enrollment' },
										{ label: 'enrollment_message', slug: 'manual-tecnico/database/enrollment_message/enrollment_message' },
										{ label: 'gov_id_type', slug: 'manual-tecnico/database/gov_id_type/gov_id_type' },
										{ label: 'course_lesson', slug: 'manual-tecnico/database/course_lesson/course_lesson' },
										{ label: 'mentorship', slug: 'manual-tecnico/database/mentorship/mentorship' },
										{ label: 'migration', slug: 'manual-tecnico/database/migration/migration' },
										{ label: 'notification', slug: 'manual-tecnico/database/notification/notification' },
										{ label: 'profile_info', slug: 'manual-tecnico/database/profile_info/profile_info' },
										{ label: 'report', slug: 'manual-tecnico/database/report/report' },
										{ label: 'survey_section', slug: 'manual-tecnico/database/survey_section/survey_section' },
										{ label: 'survey', slug: 'manual-tecnico/database/survey/survey' },
										{ label: 'survey_response_selected_options', slug: 'manual-tecnico/database/survey_response_selected_options/survey_response_selected_options' },
										{ label: 'setting', slug: 'manual-tecnico/database/setting/setting' },
									],	
								},
							],
						},
						{
							label: 'console',
							items: [
								// Each item here is one entry in the navigation menu.
								{ 
									label: 'inicio',
									items: [
										{ label: 'inicio', slug: 'manual-tecnico/console/inicio/inicio' },
										
									],	
								},
								{ 
									label: 'config',
									items: [
										{ label: 'config', slug: 'manual-tecnico/console/config/config' },
										{ label: 'gitignore', slug: 'manual-tecnico/console/config/gitignore/gitignore' },
										{ label: 'bootstrap', slug: 'manual-tecnico/console/config/bootstrap/bootstrap' },
										{ label: 'main', slug: 'manual-tecnico/console/config/main/main' },
										{ label: 'params', slug: 'manual-tecnico/console/config/params/params' },
										{ label: 'test', slug: 'manual-tecnico/console/config/test/test' },
									],	
								},
								{ 
									label: 'controllers',
									items: [
										{ label: 'controllers', slug: 'manual-tecnico/console/controllers/controllers' },
										{ label: 'gitkeep', slug: 'manual-tecnico/console/controllers/gitkeep/gitkeep' },
										{ label: 'RbacController', slug: 'manual-tecnico/console/controllers/rbaccontroller/rbaccontroller' },
									],	
								},
								{ 
									label: 'migrations',
									items: [
										{ label: 'migrations', slug: 'manual-tecnico/console/migrations/migrations' },
										
									],	
								},
								{ 
									label: 'models',
									items: [
										{ label: 'gitkeep', slug: 'manual-tecnico/console/models/models' },
										
									],	
								},
								{ 
									label: 'runtime',
									items: [
										{ label: 'gitignore', slug: 'manual-tecnico/console/runtime/runtime' },
										
									],	
								},
							],
						},
						{
							label: 'environments',
							items: [
								{
									label: 'dev',
									items: [
										{
											label: 'backend',
											items: [
												{
													label: 'config',
													items: [
														{ label: 'codeception-local.php', slug: 'manual-tecnico/environments/dev/backend/config/codeception-local' },
														{ label: 'main-local.php', slug: 'manual-tecnico/environments/dev/backend/config/main-local' },
														{ label: 'params-local.php', slug: 'manual-tecnico/environments/dev/backend/config/params-local' },
														{ label: 'test-local.php', slug: 'manual-tecnico/environments/dev/backend/config/test-local' },
													],
												},
												{
													label: 'web',
													items: [
														{ label: 'index-test.php', slug: 'manual-tecnico/environments/dev/backend/web/index-test' },
														{ label: 'index.php', slug: 'manual-tecnico/environments/dev/backend/web/indexa' },
														{ label: 'robots.txt', slug: 'manual-tecnico/environments/dev/backend/web/robots' },
													],
												},
											],
										},
										{
											label: 'common',
											items: [
												{
													label: 'config',
													items: [
														{ label: 'codeception-local.php', slug: 'manual-tecnico/environments/dev/common/config/codeception-local' },
														{ label: 'main-local.php', slug: 'manual-tecnico/environments/dev/common/config/main-local' },
														{ label: 'params-local.php', slug: 'manual-tecnico/environments/dev/common/config/params-local' },
														{ label: 'test-local.php', slug: 'manual-tecnico/environments/dev/common/config/test-local' },
													],
												},
											],
										},
										{
											label: 'console',
											items: [
												{
													label: 'config',
													items: [
														{ label: 'codeception-local.php', slug: 'manual-tecnico/environments/dev/console/config/codeception-local' },
														{ label: 'main-local.php', slug: 'manual-tecnico/environments/dev/console/config/main-local' },
														{ label: 'params-local.php', slug: 'manual-tecnico/environments/dev/console/config/params-local' },
														{ label: 'test-local.php', slug: 'manual-tecnico/environments/dev/console/config/test-local' },
													],
												},
											],
										},
										{
											label: 'fronted',
											items: [
												{
													label: 'config',
													items: [
														{ label: 'codeception-local.php', slug: 'manual-tecnico/environments/dev/fronted/config/codeception-local' },
														{ label: 'main-local.php', slug: 'manual-tecnico/environments/dev/fronted/config/main-local' },
														{ label: 'params-local.php', slug: 'manual-tecnico/environments/dev/fronted/config/params-local' },
														{ label: 'test-local.php', slug: 'manual-tecnico/environments/dev/fronted/config/test-local' },
													],
												},
												{
													label: 'web',
													items: [
														{ label: 'index-test.php', slug: 'manual-tecnico/environments/dev/fronted/web/index-test' },
														{ label: 'index.php', slug: 'manual-tecnico/environments/dev/fronted/web/indexa' },
														{ label: 'robots.txt', slug: 'manual-tecnico/environments/dev/fronted/web/robots' },
													],
												},
											],
										},
										{ label: 'yii', slug: 'manual-tecnico/environments/dev/yii' },
										{ label: 'yii_test', slug: 'manual-tecnico/environments/dev/yii-test' },
										{ label: 'yii_test.bat', slug: 'manual-tecnico/environments/dev/yii-test-bat' },
									],
								},
								{
									label: 'prod',
									items: [
										{
											label: 'backend',
											items: [
												{
													label: 'config',
													items: [
														{ label: 'main-local.php', slug: 'manual-tecnico/environments/prod/backend/config/main-local' },
														{ label: 'params-local.php', slug: 'manual-tecnico/environments/prod/backend/config/params-local' },
													],
												},
												{
													label: 'web',
													items: [
														{ label: 'index.php', slug: 'manual-tecnico/environments/prod/backend/web/indexa' },
														{ label: 'robots.txt', slug: 'manual-tecnico/environments/prod/backend/web/robots' },
													],
												},
											],
										},
										{
											label: 'common',
											items: [
												{
													label: 'config',
													items: [
														{ label: 'main-local.php', slug: 'manual-tecnico/environments/prod/common/config/main-local' },
														{ label: 'params-local.php', slug: 'manual-tecnico/environments/prod/common/config/params-local' },
													],
												},
											],
										},
										{
											label: 'console',
											items: [
												{
													label: 'config',
													items: [
														{ label: 'main-local.php', slug: 'manual-tecnico/environments/prod/console/config/main-local' },
														{ label: 'params-local.php', slug: 'manual-tecnico/environments/prod/console/config/params-local' },
													],
												},
											],
										},
										{
											label: 'fronted',
											items: [
												{
													label: 'config',
													items: [
														{ label: 'main-local.php', slug: 'manual-tecnico/environments/prod/fronted/config/main-local' },
														{ label: 'params-local.php', slug: 'manual-tecnico/environments/prod/fronted/config/params-local' },
													],
												},
												{
													label: 'web',
													items: [
														{ label: 'index.php', slug: 'manual-tecnico/environments/prod/fronted/web/indexa' },
														{ label: 'robots.txt', slug: 'manual-tecnico/environments/prod/fronted/web/robots' },
													],
												},
											],
										},
										{ label: 'yii', slug: 'manual-tecnico/environments/dev/yii' },
									],
								},								
								{ label: 'index.php', slug: 'manual-tecnico/environments/indexa' },
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
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Guia de Usuario', slug: 'manual-usuario/guia-usuario' },
					],
				},
			],
		}),
	],
});
