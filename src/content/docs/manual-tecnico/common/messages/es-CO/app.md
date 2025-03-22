---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `messages\es-CO`
---

## Documentación Técnica del Archivo `app.php`

## Español

### ¿Para qué es?
El archivo `app.php` es un archivo de traducción que contiene las traducciones al español colombiano (es-CO) de los mensajes y etiquetas utilizados en la aplicación. Es parte del sistema de internacionalización (i18n) de Yii2.

### Definición de la Carpeta
**Ubicación:** `common/messages/es-CO/app.php`
**Contexto:** Se encuentra en la carpeta de mensajes común, proporcionando traducciones para todas las aplicaciones del sistema.

### Propósito
- Proporcionar traducciones al español colombiano
- Mantener consistencia en el lenguaje
- Facilitar la internacionalización
- Centralizar las traducciones
- Permitir la personalización de mensajes

### Estructura del Archivo
```php
return [
    'Action' => 'Acción',
    'Alias' => 'Alias',
    'All Day' => 'Todo el Día',
    // ... más traducciones
];
```

---

## Technical Documentation - `app.php` File

## English

### What is it for?
The `app.php` file is a translation file containing Colombian Spanish (es-CO) translations of messages and labels used in the application. It is part of Yii2's internationalization (i18n) system.

### Folder Definition
**Location:** `common/messages/es-CO/app.php`
**Context:** Located in the common messages folder, providing translations for all system applications.

### Purpose
- Provide Colombian Spanish translations
- Maintain language consistency
- Facilitate internationalization
- Centralize translations
- Allow message customization

### File Structure
```php
return [
    'Action' => 'Acción',
    'Alias' => 'Alias',
    'All Day' => 'Todo el Día',
    // ... more translations
];
```

### Categorías de Traducciones / Translation Categories

#### Español
1. **Elementos de Interfaz**
   - Etiquetas de campos
   - Mensajes del sistema
   - Títulos de secciones
   - Botones y acciones

2. **Datos del Usuario**
   - Información personal
   - Credenciales
   - Roles y permisos

3. **Elementos del Sistema**
   - Estados
   - Fechas y tiempos
   - Mensajes de error
   - Notificaciones

#### English
1. **Interface Elements**
   - Field labels
   - System messages
   - Section titles
   - Buttons and actions

2. **User Data**
   - Personal information
   - Credentials
   - Roles and permissions

3. **System Elements**
   - Statuses
   - Dates and times
   - Error messages
   - Notifications

### Ejemplo de Uso / Usage Example

#### Español
```php
// En una vista
echo Yii::t('app', 'Action'); // Muestra: "Acción"
```

#### English
```php
// In a view
echo Yii::t('app', 'Action'); // Displays: "Acción"
```

### Notas de Mantenimiento / Maintenance Notes

#### Español
- Mantener orden alfabético
- Verificar consistencia en traducciones
- Actualizar según necesidades del sistema
- Documentar cambios significativos
- Mantener respaldo de traducciones

#### English
- Maintain alphabetical order
- Verify translation consistency
- Update according to system needs
- Document significant changes
- Keep translation backups


