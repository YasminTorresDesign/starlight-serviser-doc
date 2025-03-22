---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `components`
---

# Documentación Técnica del Archivo `TimestampBehavior.php`

## Español

### ¿Para qué es?
El archivo `TimestampBehavior.php` es un comportamiento (behavior) de Yii2 que automatiza el registro de marcas de tiempo y usuarios para la creación y actualización de registros en la base de datos.

### Definición de la Carpeta
**Ubicación:** `common/components/TimestampBehavior.php`
**Contexto:** Se encuentra en la carpeta de componentes comunes, proporcionando funcionalidad de auditoría para todos los modelos que lo implementen.

### Propósito
- Automatizar el registro de fechas de creación/actualización
- Registrar usuarios que crean/modifican registros
- Mantener consistencia en la auditoría de datos
- Reducir código repetitivo en modelos
- Estandarizar el seguimiento de cambios

### Atributos Principales
```php
public $createdAtAttribute = 'created_at';
public $updatedAtAttribute = 'updated_at';
public $createdByAttribute = 'created_by';
public $updatedByAttribute = 'updated_by';
```

### Funciones Principales

1. **events()**
```php
public function events()
{
    return [
        ActiveRecord::EVENT_BEFORE_INSERT => 'handleBeforeInsert',
        ActiveRecord::EVENT_BEFORE_UPDATE => 'handleBeforeUpdate',
    ];
}
```

2. **handleBeforeInsert()**
```php
public function handleBeforeInsert($event)
{
    $owner = $this->owner;
    $now = date('Y-m-d H:i:s');
    $userId = Yii::$app->user->id;
    // ... asignación de valores
}
```

---

# Technical Documentation - `TimestampBehavior.php` File

## English

### What is it for?
The `TimestampBehavior.php` file is a Yii2 behavior that automates the recording of timestamps and users for database record creation and updates.

### Folder Definition
**Location:** `common/components/TimestampBehavior.php`
**Context:** Located in the common components folder, providing audit functionality for all implementing models.

### Purpose
- Automate creation/update timestamp recording
- Track users who create/modify records
- Maintain data audit consistency
- Reduce repetitive code in models
- Standardize change tracking

### Main Attributes
```php
public $createdAtAttribute = 'created_at';
public $updatedAtAttribute = 'updated_at';
public $createdByAttribute = 'created_by';
public $updatedByAttribute = 'updated_by';
```

### Ejemplo de Uso / Usage Example

```php
// En un modelo / In a model
public function behaviors()
{
    return [
        [
            'class' => TimestampBehavior::class,
            'createdAtAttribute' => 'created_at',
            'updatedAtAttribute' => 'updated_at',
            'createdByAttribute' => 'created_by',
            'updatedByAttribute' => 'updated_by'
        ]
    ];
}
```

### Características Especiales / Special Features

#### Español
1. **Automatización**
   - Registro automático de fechas
   - Captura automática de usuarios
   - Manejo de eventos del modelo
   - Flexibilidad en nombres de campos

2. **Funcionalidad**
   - Soporte para creación de registros
   - Soporte para actualización de registros
   - Formato de fecha personalizable
   - Manejo de usuarios opcional

#### English
1. **Automation**
   - Automatic date recording
   - Automatic user capture
   - Model event handling
   - Field name flexibility

2. **Functionality**
   - Record creation support
   - Record update support
   - Customizable date format
   - Optional user handling

### Requisitos / Requirements
- Yii2 Framework
- Campos correspondientes en la base de datos
- Usuario autenticado para tracking de usuarios

### Notas de Implementación / Implementation Notes

#### Español
1. Los modelos deben tener los campos necesarios
2. Configurar en el método behaviors()
3. Asegurar acceso al ID de usuario
4. Verificar formato de fecha según necesidad

#### English
1. Models must have required fields
2. Configure in behaviors() method
3. Ensure user ID access
4. Verify date format as needed


