---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `models`
---

## Documentación Técnica del Archivo `MentorshipSearch.php`

## Español

### ¿Para qué es?
El archivo `MentorshipSearch.php` es un modelo de búsqueda que extiende el modelo Mentorship, diseñado para gestionar las búsquedas y filtrados en la vista de mentoría de la aplicación.

### Definición de la Carpeta
**Ubicación:** `common/models/MentorshipSearch.php`
**Contexto:** Se encuentra en la carpeta de modelos comunes, proporcionando funcionalidad de búsqueda para el módulo de mentorías.

### Propósito
- Gestionar búsquedas de mentorías
- Filtrar resultados de grid
- Proporcionar ordenamiento personalizado
- Manejar relaciones entre modelos
- Facilitar la búsqueda avanzada

### Funciones Principales

1. **rules()**
```php
public function rules()
{
    return [
        [['id', 'enrollment_id', 'user_id', 'created_by', 'updated_by'], 'integer'],
        [['created_at', 'updated_at'], 'safe'],
        [['user_username', 'user_email', 'course_title'], 'safe'],
    ];
}
```

2. **search($params)**
```php
public function search($params)
{
    $query = Mentorship::find();
    $dataProvider = new ActiveDataProvider([
        'query' => $query,
    ]);
    // ... lógica de búsqueda
}
```

3. **searchIndex($params)**
```php
public function searchIndex($params)
{
    $query = Mentorship::find();
    $query->joinWith(['enrollment.user', 'enrollment.course']);
    // ... configuración de ordenamiento y filtros
}
```

---

## Technical Documentation - `MentorshipSearch.php` File

## English

### What is it for?
The `MentorshipSearch.php` file is a search model that extends the Mentorship model, designed to manage searches and filtering in the mentorship view of the application.

### Folder Definition
**Location:** `common/models/MentorshipSearch.php`
**Context:** Located in the common models folder, providing search functionality for the mentorship module.

### Purpose
- Manage mentorship searches
- Filter grid results
- Provide custom sorting
- Handle model relationships
- Facilitate advanced searching

### Main Features

#### Español
1. **Atributos de Búsqueda**
   - user_username
   - user_email
   - course_title
   - Campos de fecha y relaciones

2. **Capacidades de Filtrado**
   - Filtros por usuario
   - Filtros por curso
   - Filtros por fecha
   - Búsqueda relacional

#### English
1. **Search Attributes**
   - user_username
   - user_email
   - course_title
   - Date fields and relationships

2. **Filtering Capabilities**
   - User filters
   - Course filters
   - Date filters
   - Relational search

### Ejemplo de Uso / Usage Example

#### Español
```php
$searchModel = new MentorshipSearch();
$dataProvider = $searchModel->searchIndex(Yii::$app->request->queryParams);

return $this->render('index', [
    'searchModel' => $searchModel,
    'dataProvider' => $dataProvider,
]);
```

#### English
```php
$searchModel = new MentorshipSearch();
$dataProvider = $searchModel->searchIndex(Yii::$app->request->queryParams);

return $this->render('index', [
    'searchModel' => $searchModel,
    'dataProvider' => $dataProvider,
]);
```

### Consideraciones Técnicas / Technical Considerations

#### Español
- Implementa ActiveDataProvider para paginación
- Utiliza relaciones JOIN para búsquedas eficientes
- Permite ordenamiento personalizado
- Maneja validación de parámetros
- Soporta búsqueda en relaciones

#### English
- Implements ActiveDataProvider for pagination
- Uses JOIN relationships for efficient searches
- Allows custom sorting
- Handles parameter validation
- Supports relationship searching

