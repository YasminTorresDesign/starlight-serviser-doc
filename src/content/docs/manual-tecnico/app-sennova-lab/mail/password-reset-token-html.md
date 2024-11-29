---
title: Manual Técnico AppSennovaLab
description:  Documentación Técnica del Archivo `passwordResetToken-html.php`
---

## Documentación Técnica del Archivo `passwordResetToken-html.php`

## Información General

### ¿Para qué es?
El archivo `passwordResetToken-html.php` es una plantilla HTML para correos electrónicos de restablecimiento de contraseña en la aplicación Sennovalab. Se utiliza cuando un usuario solicita cambiar su contraseña olvidada.

### Definición de la Carpeta
**Ubicación:** `appSennovalab/mail/passwordResetToken-html.php`
**Contexto:** Se encuentra en la carpeta `mail`, que contiene todas las plantillas de correo electrónico del sistema.

### Propósito
- Generar correos electrónicos en formato HTML para restablecimiento de contraseña
- Proporcionar un enlace seguro para que los usuarios restablezcan su contraseña
- Mantener una comunicación clara y segura en el proceso de recuperación de cuenta
- Facilitar el proceso de restablecimiento de contraseña

### Variables y Dependencias
```php
use yii\helpers\Html;

/** @var yii\web\View $this */     // Instancia de la vista
/** @var common\models\User $user */ // Modelo de usuario

// Generación del enlace de restablecimiento
$resetLink = Yii::$app->urlManager->createAbsoluteUrl([
    'site/reset-password', 
    'token' => $user->password_reset_token
]);
```

### Estructura del Template
1. **Contenedor Principal**
   ```php
   <div class="password-reset">
   ```

2. **Elementos del Mensaje**
   - Saludo personalizado con nombre de usuario
   - Instrucciones para restablecer la contraseña
   - Enlace seguro de restablecimiento


## Ejemplo de Uso
```php
// En PasswordResetRequestForm.php
public function sendEmail()
{
    $user = User::findOne([
        'status' => User::STATUS_ACTIVE,
        'email' => $this->email,
    ]);

    if ($user) {
        return Yii::$app->mailer->compose([
            'html' => 'passwordResetToken-html',
            'text' => 'passwordResetToken-text'
        ], ['user' => $user])
            ->setTo($this->email)
            ->setSubject('Restablecimiento de contraseña para ' . Yii::$app->name)
            ->send();
    }
}
```

## Notas Adicionales

### Consideraciones de Seguridad
1. El token debe ser único y tener tiempo de expiración
2. Implementar límites de solicitudes de restablecimiento
3. Usar HTTPS para los enlaces
4. Validar el token antes de permitir el restablecimiento
5. Registrar los intentos de restablecimiento

### Mejores Prácticas
- Diseño responsive para visualización en diferentes dispositivos
- Mensajes claros y concisos
- Incluir información de contacto de soporte
- Usar estilos en línea para compatibilidad
- Proporcionar alternativas al botón principal

### Mantenimiento
- Actualizar regularmente el diseño
- Monitorear tasas de éxito de restablecimiento
- Mantener registros de correos enviados
- Realizar pruebas en diferentes clientes de correo
- Actualizar textos según feedback de usuarios

Esta documentación proporciona una visión completa de la plantilla de restablecimiento de contraseña, destacando su implementación actual.