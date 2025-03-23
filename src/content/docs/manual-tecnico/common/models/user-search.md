---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `models`
---

## Documentación Técnica de UserSearch.php

## Español

### Descripción General
El archivo `UserSearch.php` es una clase modelo de búsqueda que extiende el modelo User, diseñada específicamente para manejar la funcionalidad de búsqueda en el framework Yii2. Proporciona capacidades de filtrado para varios atributos de usuario y se integra con ActiveDataProvider para una recuperación eficiente de datos.

### Propósito
Esta clase sirve como modelo de búsqueda para la entidad User, implementando la funcionalidad de búsqueda a través de ActiveDataProvider y proporcionando capacidades de filtrado para varios atributos de usuario. Permite a los desarrolladores construir consultas de búsqueda complejas con validación y filtrado apropiados.

### Estructura de Directorios
- Ubicación: `common/models/UserSearch.php`
- Espacio de nombres: `common\models`
- Clase Padre: `User`

### Componentes Principales

#### Definición de Clase
```php
class UserSearch extends User
```

#### Métodos Principales

1. **rules()**
   - Propósito: Define reglas de validación para parámetros de búsqueda
   - Retorna: Array de reglas de validación
   - Valida:
     - Campos enteros: id, status, created_at, updated_at
     - Campos de texto: username, auth_key, password_hash, password_reset_token, email, verification_token

2. **scenarios()**
   - Propósito: Define diferentes escenarios para validación del modelo
   - Retorna: Array de escenarios
   - Utiliza escenarios del Model padre

3. **search($params)**
   - Propósito: Crea y configura el proveedor de datos para resultados de búsqueda
   - Parámetros:
     - `$params`: Array de parámetros de búsqueda
   - Retorna: Instancia de ActiveDataProvider
   - Características:
     - Configura condiciones de consulta
     - Aplica filtros basados en parámetros de búsqueda
     - Maneja paginación y ordenamiento
     - Excluye usuarios superadmin de los resultados
     - Soporta filtrado por:
       - ID de usuario
       - Nombre de usuario
       - Email
       - Estado
       - Fecha de creación
       - Fecha de actualización
       - Clave de autenticación
       - Token de restablecimiento de contraseña
       - Token de verificación

### Ejemplo de Uso
```php
// Crear instancia del modelo de búsqueda
$searchModel = new UserSearch();

// Configurar parámetros de búsqueda
$params = [
    'UserSearch' => [
        'username' => 'john_doe',
        'email' => 'john@example.com',
        'status' => 10
    ]
];

// Obtener resultados de búsqueda
$dataProvider = $searchModel->search($params);

// Usar con GridView
echo GridView::widget([
    'dataProvider' => $dataProvider,
    'filterModel' => $searchModel,
    'columns' => [
        'id',
        'username',
        'email',
        'status',
        'created_at'
    ]
]);
```

## UserSearch.php - Technical Documentation

## English

### Overview
The `UserSearch.php` file is a search model class that extends the User model, specifically designed for handling search functionality in the Yii2 framework. It provides filtering capabilities for various user attributes and integrates with ActiveDataProvider for efficient data retrieval.

### Purpose
This class serves as a search model for the User entity, implementing search functionality through ActiveDataProvider and providing filtering capabilities for various user attributes. It enables developers to build complex search queries with proper validation and filtering.

### Directory Structure
- Location: `common/models/UserSearch.php`
- Namespace: `common\models`
- Parent Class: `User`

### Key Components

#### Class Definition
```php
class UserSearch extends User
```

#### Main Methods

1. **rules()**
   - Purpose: Defines validation rules for search parameters
   - Returns: Array of validation rules
   - Validates:
     - Integer fields: id, status, created_at, updated_at
     - String fields: username, auth_key, password_hash, password_reset_token, email, verification_token

2. **scenarios()**
   - Purpose: Defines different scenarios for model validation
   - Returns: Array of scenarios
   - Uses parent Model scenarios

3. **search($params)**
   - Purpose: Creates and configures the data provider for search results
   - Parameters:
     - `$params`: Array of search parameters
   - Returns: ActiveDataProvider instance
   - Features:
     - Configures query conditions
     - Applies filters based on search parameters
     - Handles pagination and sorting
     - Excludes superadmin users from results
     - Supports filtering by:
       - User ID
       - Username
       - Email
       - Status
       - Creation date
       - Update date
       - Authentication key
       - Password reset token
       - Verification token

### Usage Example
```php
// Create search model instance
$searchModel = new UserSearch();

// Configure search parameters
$params = [
    'UserSearch' => [
        'username' => 'john_doe',
        'email' => 'john@example.com',
        'status' => 10
    ]
];

// Get search results
$dataProvider = $searchModel->search($params);

// Use with GridView
echo GridView::widget([
    'dataProvider' => $dataProvider,
    'filterModel' => $searchModel,
    'columns' => [
        'id',
        'username',
        'email',
        'status',
        'created_at'
    ]
]);
```

## Additional Notes / Notas Adicionales

### Technical Details / Detalles Técnicos
- Implements Yii2's search model pattern
- Uses ActiveDataProvider for efficient data retrieval
- Supports grid filtering and sorting
- Handles pagination automatically
- Integrates with GridView widget
- Excludes superadmin users from search results
- Supports multiple search criteria

### Best Practices / Mejores Prácticas
- Validate search parameters before processing
- Use appropriate filter conditions
- Consider performance when building complex queries
- Implement proper error handling
- Follow Yii2's search model patterns
- Handle sensitive data appropriately

### Related Components / Componentes Relacionados
- User Model
- Profile Model
- UserController
- UserQuery
- GridView Widget
- ActiveDataProvider