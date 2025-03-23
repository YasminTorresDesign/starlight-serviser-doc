---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `models`
---

## Documentación Técnica de ProfileSearch.php

## Español

### Descripción General
El archivo `ProfileSearch.php` es una clase de modelo de búsqueda que extiende el modelo Profile, diseñada específicamente para manejar la funcionalidad de búsqueda en el framework Yii2. Proporciona métodos para filtrar y buscar registros de perfiles en la base de datos.

### Propósito
Esta clase sirve como modelo de búsqueda para la entidad Profile, implementando funcionalidad de búsqueda a través de ActiveDataProvider y proporcionando capacidades de filtrado para varios atributos del perfil.

### Estructura de Directorios
- Ubicación: `common/models/ProfileSearch.php`
- Espacio de nombres: `common\models`
- Clase Padre: `Profile`

### Componentes Principales

#### Definición de Clase
```php
class ProfileSearch extends Profile
```

#### Métodos Principales

1. **rules()**
   - Propósito: Define reglas de validación para parámetros de búsqueda
   - Retorna: Array de reglas de validación
   - Valida:
     - Campos enteros: id, user_id, gov_id_type, visibility, created_by, updated_by
     - Campos de texto: first_name, last_name, full_name, gov_id, gender, phone_number
     - Campos de fecha: birth_date, created_at, updated_at

2. **scenarios()**
   - Propósito: Define diferentes escenarios para la validación del modelo
   - Retorna: Escenarios del modelo
   - Implementación: Utiliza escenarios del modelo padre

3. **search($params)**
   - Propósito: Crea y configura el proveedor de datos para resultados de búsqueda
   - Parámetros:
     - `$params`: Array de parámetros de búsqueda
   - Retorna: Instancia de ActiveDataProvider
   - Características:
     - Configura condiciones de consulta
     - Aplica filtros basados en parámetros de búsqueda
     - Maneja validación
     - Retorna resultados filtrados

### Ejemplo de Uso
```php
$searchModel = new ProfileSearch();
$dataProvider = $searchModel->search($params);
```

## ProfileSearch.php - Technical Documentation

## English

### Overview
The `ProfileSearch.php` file is a search model class that extends the Profile model, specifically designed for handling search functionality in the Yii2 framework. It provides methods for filtering and searching profile records in the database.

### Purpose
This class serves as a search model for the Profile entity, implementing search functionality through ActiveDataProvider and providing filtering capabilities for various profile attributes.

### Directory Structure
- Location: `common/models/ProfileSearch.php`
- Namespace: `common\models`
- Parent Class: `Profile`

### Key Components

#### Class Definition
```php
class ProfileSearch extends Profile
```

#### Main Methods

1. **rules()**
   - Purpose: Defines validation rules for search parameters
   - Returns: Array of validation rules
   - Validates:
     - Integer fields: id, user_id, gov_id_type, visibility, created_by, updated_by
     - String fields: first_name, last_name, full_name, gov_id, gender, phone_number
     - Date fields: birth_date, created_at, updated_at

2. **scenarios()**
   - Purpose: Defines different scenarios for model validation
   - Returns: Model scenarios
   - Implementation: Uses parent Model scenarios

3. **search($params)**
   - Purpose: Creates and configures the data provider for search results
   - Parameters:
     - `$params`: Array of search parameters
   - Returns: ActiveDataProvider instance
   - Features:
     - Configures query conditions
     - Applies filters based on search parameters
     - Handles validation
     - Returns filtered results

### Usage Example
```php
$searchModel = new ProfileSearch();
$dataProvider = $searchModel->search($params);
```

## Additional Notes / Notas Adicionales

### Technical Details / Detalles Técnicos
- This class is part of the Yii2 framework's search implementation
- It uses ActiveDataProvider for efficient data retrieval
- Implements filtering for all profile attributes
- Supports both exact and partial matching searches

### Best Practices / Mejores Prácticas
- Use this class for all profile-related searches
- Implement additional search conditions as needed
- Maintain proper validation rules
- Consider performance implications of search filters

### Related Components / Componentes Relacionados
- Profile Model
- ActiveDataProvider
- GridView Widget
- Search Forms