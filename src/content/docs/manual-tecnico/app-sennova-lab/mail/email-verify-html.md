---
title: Manual Técnico AppSennovaLab
description:  Documentación Técnica del Archivo `emailVerify-html.php`
---

## Documentación Técnica del Archivo `emailVerify-html.php`

## Información General

### ¿Para qué es?
El archivo `emailVerify-html.php` es una plantilla HTML para correos electrónicos de verificación de cuenta en la aplicación Sennovalab. Se utiliza para enviar enlaces de verificación a los nuevos usuarios que se registran en el sistema.

### Definición de la Carpeta
**Ubicación:** `appSennovalab/mail/emailVerify-html.php`
**Contexto:** Se encuentra en la carpeta `mail`, que contiene todas las plantillas de correo electrónico del sistema.

### Propósito
- Generar correos electrónicos de verificación en formato HTML
- Proporcionar un enlace seguro para la verificación de cuentas de usuario
- Mantener una comunicación clara y profesional con los nuevos usuarios
- Facilitar el proceso de activación de cuentas

### Variables y Dependencias
```php
use yii\helpers\Html;

/** @var yii\web\View $this */     // Instancia de la vista
/** @var common\models\User $user */ // Modelo de usuario

// Generación del enlace de verificación
$verifyLink = Yii::$app->urlManager->createAbsoluteUrl([
    'site/verify-email', 
    'token' => $user->verification_token
]);
```

### Estructura del Template
1. **Contenedor Principal**
   ```php
   <div class="verify-email">
   ```

2. **Elementos del Mensaje**
   - Saludo personalizado con nombre de usuario
   - Instrucciones de verificación
   - Enlace de verificación seguro

### Ejemplo de Uso
```php
// En SignupForm.php o similar
public function signup()
{
    if ($this->validate()) {
        $user = new User();
        // ... configuración del usuario ...
        
        Yii::$app->mailer->compose([
            'html' => 'emailVerify-html',
            'text' => 'emailVerify-text'
        ], ['user' => $user])
            ->setTo($this->email)
            ->setSubject('Verificación de cuenta para ' . Yii::$app->name)
            ->send();
    }
}
```

## Notas Adicionales

### Consideraciones de Seguridad
1. El token de verificación debe ser único y seguro
2. Los enlaces deben tener tiempo de expiración
3. Implementar límites de reenvío de verificación
4. Validar el token antes de procesar la verificación
5. Usar HTTPS para los enlaces de verificación

### Mejores Prácticas
- Mantener el diseño responsive
- Incluir versión en texto plano
- Usar estilos en línea para compatibilidad
- Proporcionar instrucciones claras
- Incluir información de contacto de soporte

### Mantenimiento
- Actualizar regularmente el diseño
- Monitorear tasas de verificación exitosa
- Mantener registros de correos enviados
- Realizar pruebas en diferentes clientes de correo
- Actualizar textos según el feedback de usuarios

Esta documentación proporciona una visión completa de la plantilla de verificación de correo electrónico, destacando su implementación actual. 