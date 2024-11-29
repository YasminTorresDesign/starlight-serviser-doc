---
title: Manual Técnico AppSennovaLab
description:  Documentación Técnica del Archivo `passwordResetToken-text.php`
---

## Documentación Técnica del Archivo `passwordResetToken-text.php`

## Información General

### ¿Para qué es?
El archivo `passwordResetToken-text.php` es una plantilla en formato texto plano para correos electrónicos de restablecimiento de contraseña en la aplicación Sennovalab. Sirve como alternativa al formato HTML para garantizar la compatibilidad universal.

### Definición de la Carpeta
**Ubicación:** `appSennovalab/mail/passwordResetToken-text.php`
**Contexto:** Se encuentra en la carpeta `mail`, junto con otras plantillas de correo electrónico, proporcionando la versión en texto plano del mensaje de restablecimiento de contraseña.

### Propósito
- Proporcionar una versión en texto plano para el restablecimiento de contraseña
- Garantizar la accesibilidad en clientes de correo que no soportan HTML
- Mantener la simplicidad y claridad en el proceso de recuperación
- Servir como respaldo cuando el formato HTML no está disponible

### Variables y Dependencias
```php
/** @var yii\web\View $this */     // Instancia de la vista
/** @var common\models\User $user */ // Modelo de usuario

// Generación del enlace de restablecimiento
$resetLink = Yii::$app->urlManager->createAbsoluteUrl([
    'site/reset-password', 
    'token' => $user->password_reset_token
]);
```

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
            ->setSubject('Password reset for ' . Yii::$app->name)
            ->send();
    }
}
```

## Notas Adicionales

### Consideraciones de Seguridad
1. No incluir información sensible en el correo
2. Asegurar que el token sea único y temporal
3. Implementar límites de solicitudes
4. Validar la autenticidad del token
5. Mantener registros de solicitudes de restablecimiento

### Mejores Prácticas
1. **Formato del Texto**
   - Mantener líneas cortas (máximo 70 caracteres)
   - Usar espaciado consistente
   - Evitar caracteres especiales problemáticos

2. **Contenido**
   - Instrucciones claras y concisas
   - Información de seguridad importante
   - Datos de contacto para soporte

3. **Estructura**
   - Saludo personalizado
   - Cuerpo del mensaje
   - Instrucciones de seguridad
   - Información de contacto

### Mantenimiento
- Sincronizar con la versión HTML
- Actualizar mensajes según necesidades
- Realizar pruebas periódicas
- Monitorear efectividad
- Mantener registros de envíos

### Recomendaciones Adicionales
1. Incluir tiempo de expiración del enlace
2. Agregar advertencias de seguridad
3. Proporcionar información de contacto
4. Mantener un tono profesional
5. Incluir instrucciones alternativas

Esta documentación proporciona una visión completa de la plantilla de restablecimiento de contraseña en formato texto, destacando su implementación actual.