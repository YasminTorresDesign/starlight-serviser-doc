---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `models`
---

## Documentación Técnica del Archivo `ProfileInfoSearch.php`

## Español

### ¿Para qué es?
El archivo `ProfileInfoSearch.php` es un modelo de búsqueda que extiende el modelo ProfileInfo, diseñado para gestionar las búsquedas y filtrados de información de perfiles de usuario en la aplicación.

### Definición de la Carpeta
**Ubicación:** `common/models/ProfileInfoSearch.php`
**Contexto:** Se encuentra en la carpeta de modelos comunes, proporcionando funcionalidad de búsqueda para la información de perfiles.

### Propósito
- Gestionar búsquedas de perfiles de usuario
- Implementar filtros para GridView
- Proporcionar validación de parámetros de búsqueda
- Crear proveedores de datos para vistas
- Facilitar la búsqueda y filtrado de información

### Funciones Principales

1. **rules()**
```php
public function rules()
{
    return [
        [['id', 'profile_id', 'years_experience', 'visibility', 'created_by', 'updated_by'], 'integer'],
        [['profile_picture', 'bio', 'website', 'social_links', 'occupation', 'company', 'industry', 'created_at', 'updated_at'], 'safe'],
    ];
}
```

2. **search($params)**
```php
public function search($params)
{
    $query = ProfileInfo::find();
    $dataProvider = new ActiveDataProvider([
        'query' => $query,
    ]);
    // ... configuración de filtros
}
```

---

## Technical Documentation - `ProfileInfoSearch.php` File

## English

### What is it for?
The `ProfileInfoSearch.php` file is a search model that extends the ProfileInfo model, designed to manage searches and filtering of user profile information in the application.

### Folder Definition
**Location:** `common/models/ProfileInfoSearch.php`
**Context:** Located in the common models folder, providing search functionality for profile information.

### Purpose
- Manage user profile searches
- Implement filters for GridView
- Provide search parameter validation
- Create data providers for views
- Facilitate information search and filtering

### Main Functions

1. **rules()**
```php
public function rules()
{
    return [
        [['id', 'profile_id', 'years_experience', 'visibility', 'created_by', 'updated_by'], 'integer'],
        [['profile_picture', 'bio', 'website', 'social_links', 'occupation', 'company', 'industry', 'created_at', 'updated_at'], 'safe'],
    ];
}
```

2. **search($params)**
```php
public function search($params)
{
    $query = ProfileInfo::find();
    $dataProvider = new ActiveDataProvider([
        'query' => $query,
    ]);
    // ... filter configuration
}
```

### Características Especiales / Special Features

#### Español
1. **Campos de Búsqueda**
   - Datos personales (bio, ocupación)
   - Información profesional (experiencia, empresa)
   - Enlaces y redes sociales
   - Metadatos (fechas, visibilidad)

2. **Funcionalidades**
   - Filtrado dinámico
   - Validación de parámetros
   - Búsqueda flexible
   - Paginación automática

#### English
1. **Search Fields**
   - Personal data (bio, occupation)
   - Professional information (experience, company)
   - Links and social networks
   - Metadata (dates, visibility)

2. **Functionalities**
   - Dynamic filtering
   - Parameter validation
   - Flexible search
   - Automatic pagination

### Ejemplo de Uso / Usage Example

#### Español
```php
$searchModel = new ProfileInfoSearch();
$dataProvider = $searchModel->search(Yii::$app->request->queryParams);

return $this->render('index', [
    'searchModel' => $searchModel,
    'dataProvider' => $dataProvider,
]);
```

#### English
```php
$searchModel = new ProfileInfoSearch();
$dataProvider = $searchModel->search(Yii::$app->request->queryParams);

return $this->render('index', [
    'searchModel' => $searchModel,
    'dataProvider' => $dataProvider,
]);
```


