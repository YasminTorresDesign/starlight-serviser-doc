---
title: Manual Técnico AppSennovaLab
description:  Documentación Técnica del Archivo `emailVerify-text.php`
---

## Documentación Técnica del Archivo `emailVerify-text.php`

## Información General

### ¿Para qué es?
El archivo `emailVerify-text.php` es una plantilla de correo electrónico en formato texto plano utilizada para enviar enlaces de verificación de cuenta a los nuevos usuarios de la aplicación Sennovalab. Sirve como alternativa al formato HTML para garantizar la compatibilidad con todos los clientes de correo.

### Definición de la Carpeta
**Ubicación:** `appSennovalab/mail/emailVerify-text.php`
**Contexto:** Se encuentra en la carpeta `mail`, junto con otras plantillas de correo electrónico, proporcionando la versión en texto plano del mensaje de verificación.

### Propósito
- Proporcionar una versión en texto plano del correo de verificación de cuenta
- Garantizar la compatibilidad con clientes de correo que no soportan HTML
- Facilitar el proceso de activación de cuentas de usuario
- Mantener la simplicidad y legibilidad del mensaje

### Variables y Dependencias
```php
/** @var yii\web\View $this */     // Instancia de la vista
/** @var common\models\User $user */ // Modelo de usuario

// Generación del enlace de verificación
$verifyLink = Yii::$app->urlManager->createAbsoluteUrl([
    'site/verify-email', 
    'token' => $user->verification_token
]);
```

### Estructura del Template
1. **Saludo Personalizado**
   - Incluye el nombre de usuario para personalizar el mensaje

2. **Instrucciones de Verificación**
   - Proporciona un enlace directo para verificar la cuenta

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
- Mantener el contenido claro y conciso
- Incluir instrucciones detalladas
- Proporcionar información de contacto para soporte
- Usar un formato de texto plano limpio y organizado
- Incluir una nota sobre la expiración del enlace

### Mantenimiento
- Mantener sincronizada con la versión HTML
- Actualizar el contenido según los requisitos del negocio
- Realizar pruebas regulares de envío
- Documentar cambios y actualizaciones
- Mantener un registro de los correos enviados

Esta documentación proporciona una visión completa de la plantilla de verificación de correo electrónico en formato texto, destacando su implementación actual.