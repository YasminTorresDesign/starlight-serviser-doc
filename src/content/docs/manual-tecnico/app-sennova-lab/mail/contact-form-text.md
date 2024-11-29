---
title: Manual Técnico AppSennovaLab
description:  Documentación Técnica del Archivo `contactForm-text.php`
---

## Documentación Técnica del Archivo `contactForm-text.php`

## Información General

### ¿Para qué es?
El archivo `contactForm-text.php` es una plantilla de correo electrónico en formato texto plano que se utiliza como alternativa al formato HTML para los mensajes enviados a través del formulario de contacto de la aplicación Sennovalab.

### Definición de la Carpeta
**Ubicación:** `appSennovalab/mail/contactForm-text.php`
**Contexto:** Se encuentra en la carpeta `mail`, junto con otras plantillas de correo electrónico, proporcionando la versión en texto plano del mensaje de contacto.

### Propósito
- Proporcionar una versión en texto plano del correo de contacto
- Garantizar la compatibilidad con clientes de correo que no soportan HTML
- Servir como alternativa accesible al formato HTML
- Mantener la simplicidad y legibilidad del mensaje

### Variables y Dependencias
```php
/** @var yii\web\View $this */     // Instancia de la vista
/** @var common\models\User $user */ // Modelo de usuario
```

### Estructura Actual
```php
Hello,

This is acontact message!
```

## Ejemplo de Uso
```php
// En SiteController.php
public function actionContact()
{
    $model = new ContactForm();
    if ($model->load(Yii::$app->request->post()) && $model->validate()) {
        Yii::$app->mailer->compose([
            'html' => 'contactForm-html',
            'text' => 'contactForm-text'
        ], [
            'user' => Yii::$app->user->identity,
            'sender' => $model->name,
            'email' => $model->email,
            'subject' => $model->subject,
            'message' => $model->body
        ])->send();
    }
}
```

## Notas Adicionales

### Mejores Prácticas
1. **Formato del Texto**
   - Mantener líneas de no más de 70 caracteres
   - Usar espaciado consistente para mejorar la legibilidad
   - Evitar caracteres especiales que puedan causar problemas

2. **Contenido**
   - Incluir toda la información relevante del formulario
   - Mantener un formato claro y organizado
   - Usar separadores de línea para estructurar el contenido

3. **Seguridad**
   - Escapar caracteres especiales
   - Validar todos los datos de entrada
   - Evitar incluir información sensible

### Recomendaciones de Implementación
1. Expandir la información incluida en el mensaje
2. Agregar validación de campos
3. Implementar un sistema de plantillas más robusto
4. Incluir información de seguimiento
5. Agregar pie de mensaje con información de contacto

### Consideraciones de Mantenimiento
- Mantener sincronizada con la versión HTML
- Actualizar el contenido según los requisitos del negocio
- Realizar pruebas regulares de envío
- Documentar cambios y actualizaciones
- Mantener un registro de los correos enviados

Esta documentación proporciona una visión completa de la plantilla de correo electrónico en formato texto, destacando su propósito y potenciales mejoras para una implementación más efectiva.
