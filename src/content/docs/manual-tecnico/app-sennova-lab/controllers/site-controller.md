---
title: Manual Técnico AppSennovaLab
description:  Documentación Técnica del Archivo `Site-Controller.php`
---

## Documentación Técnica del Archivo `SiteController.php`

## Información General

### ¿Para qué es?
El archivo `SiteController.php` es el controlador principal de la aplicación Sennovalab, que maneja las funcionalidades básicas del sitio web como autenticación, registro de usuarios y páginas estáticas.

### Definición de la Carpeta
**Ubicación:** `appSennovalab/controllers/SiteController.php`
**Contexto:** Se encuentra en la carpeta controllers siguiendo la estructura MVC (Modelo-Vista-Controlador) de Yii2.

### Propósito
Gestionar las acciones principales del sitio web, incluyendo:
- Autenticación de usuarios
- Registro de nuevos usuarios
- Gestión de contraseñas
- Verificación de correo electrónico
- Renderizado de páginas estáticas

## Funciones Principales

### **behaviors()**
   - Propósito: Define los filtros de control de acceso y verbos HTTP
   - Configuraciones:
     - Control de acceso para logout y signup
     - Restricciones de métodos HTTP

### **actionIndex()**
   - Propósito: Muestra la página principal
   - Retorno: Vista 'index'

### **actionLogin()**
   - Propósito: Maneja el proceso de inicio de sesión
   - Funcionalidad: Valida credenciales y establece la sesión

### **actionSignup()**
   - Propósito: Gestiona el registro de nuevos usuarios
   - Funcionalidad: Procesa el formulario de registro y envía email de verificación

### **actionContact()**
   - Propósito: Gestiona el formulario de contacto
   - Funcionalidad: Envía emails al administrador

### **Gestión de Contraseñas**
   - `actionRequestPasswordReset()`
   - `actionResetPassword()`
   - Propósito: Manejo de recuperación de contraseñas

### **Verificación de Email**
   - `actionVerifyEmail()`
   - `actionResendVerificationEmail()`
   - Propósito: Gestiona la verificación de correos electrónicos

## Dependencias
```php
use appSennovalab\models\ResendVerificationEmailForm;
use appSennovalab\models\VerifyEmailForm;
use common\models\LoginForm;
use appSennovalab\models\PasswordResetRequestForm;
use appSennovalab\models\ResetPasswordForm;
use appSennovalab\models\SignupForm;
use appSennovalab\models\ContactForm;
```

## Notas Adicionales
- El controlador implementa medidas de seguridad mediante filtros de acceso
- Utiliza el sistema de flash messages de Yii2 para comunicación con el usuario
- Implementa verificación de correo electrónico en dos pasos
- Los mensajes de error están en español e inglés
- Incluye protección CSRF para formularios
- Implementa manejo de excepciones para tokens inválidos

Esta documentación proporciona una visión general del controlador principal del sitio. Cada acción está diseñada para manejar una funcionalidad específica mientras mantiene las mejores prácticas de seguridad y usabilidad de Yii2.