---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `models`
---

# ProfileQuery.php - Technical Documentation
# Documentación Técnica de ProfileQuery.php

## English

### Overview
The `ProfileQuery.php` file is a query class that extends Yii2's ActiveQuery class, specifically designed for handling database queries related to the Profile model in the common/models directory.

### Purpose
This class serves as a query builder for the Profile model, providing methods to construct and execute database queries in a type-safe and efficient manner.

### Directory Structure
- Location: `common/models/ProfileQuery.php`
- Namespace: `common\models`
- Parent Class: `\yii\db\ActiveQuery`

### Key Components

#### Class Definition
```php
class ProfileQuery extends \yii\db\ActiveQuery
```

#### Main Methods

1. **all($db = null)**
   - Purpose: Retrieves all records matching the query
   - Returns: Array of Profile objects
   - Parameters:
     - `$db`: Optional database connection

2. **one($db = null)**
   - Purpose: Retrieves a single record matching the query
   - Returns: Single Profile object or null
   - Parameters:
     - `$db`: Optional database connection

### Usage Example
```php
$profiles = Profile::find()
    ->all();
```

## Español

### Descripción General
El archivo `ProfileQuery.php` es una clase de consulta que extiende la clase ActiveQuery de Yii2, diseñada específicamente para manejar consultas de base de datos relacionadas con el modelo Profile en el directorio common/models.

### Propósito
Esta clase sirve como constructor de consultas para el modelo Profile, proporcionando métodos para construir y ejecutar consultas de base de datos de manera segura y eficiente.

### Estructura de Directorios
- Ubicación: `common/models/ProfileQuery.php`
- Espacio de nombres: `common\models`
- Clase Padre: `\yii\db\ActiveQuery`

### Componentes Principales

#### Definición de Clase
```php
class ProfileQuery extends \yii\db\ActiveQuery
```

#### Métodos Principales

1. **all($db = null)**
   - Propósito: Recupera todos los registros que coinciden con la consulta
   - Retorna: Array de objetos Profile
   - Parámetros:
     - `$db`: Conexión a base de datos opcional

2. **one($db = null)**
   - Propósito: Recupera un único registro que coincide con la consulta
   - Retorna: Objeto Profile único o null
   - Parámetros:
     - `$db`: Conexión a base de datos opcional

### Ejemplo de Uso
```php
$profiles = Profile::find()
    ->all();
```

## Additional Notes / Notas Adicionales

### Technical Details / Detalles Técnicos
- This class is part of the Yii2 framework's Active Record implementation
- It provides type-safe query building capabilities
- It's automatically generated and can be customized for specific query needs

### Best Practices / Mejores Prácticas
- Use this class for all database queries related to the Profile model
- Extend the class with custom query methods as needed
- Maintain type safety by using the provided methods

### Related Components / Componentes Relacionados
- Profile Model
- Database Schema
- Active Record Pattern Implementation