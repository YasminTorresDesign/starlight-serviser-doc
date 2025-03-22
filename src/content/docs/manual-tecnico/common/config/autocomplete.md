---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `config`
---

## Documentación Técnica del Archivo `__autocomplete.php`

## Español

### ¿Para qué es?
El archivo `__autocomplete.php` es un archivo especial diseñado exclusivamente para proporcionar autocompletado en IDEs (como PHPStorm, Netbeans, etc.). No se incluye en la ejecución de la aplicación y sirve únicamente como ayuda para el desarrollo.

### Definición de la Carpeta
**Ubicación:** `common/config/__autocomplete.php`
**Contexto:** Se encuentra en la carpeta de configuración común, proporcionando ayuda de desarrollo para todo el proyecto.

### Propósito
- Mejorar la experiencia de desarrollo
- Proporcionar autocompletado en IDEs
- Definir tipos de propiedades personalizadas
- Facilitar el acceso a componentes de Yii2
- Ayudar en la documentación del código

### Clases Definidas

1. **Clase Yii**
```php
class Yii {
    /**
     * @var \yii\web\Application|\yii\console\Application|__Application
     */
    public static $app;
}
```

2. **Clase __Application**
```php
/**
 * @property yii\rbac\DbManager $authManager 
 * @property \yii\web\User|__WebUser $user
 */
class __Application {
}
```

3. **Clase __WebUser**
```php
/**
 * @property app\models\User $identity
 */
class __WebUser {
}
```

---

## Technical Documentation - `__autocomplete.php` File

## English

### What is it for?
The `__autocomplete.php` file is a special file designed exclusively to provide IDE autocompletion (for PHPStorm, Netbeans, etc.). It is never included in the application execution and serves only as a development aid.

### Folder Definition
**Location:** `common/config/__autocomplete.php`
**Context:** Located in the common configuration folder, providing development assistance for the entire project.

### Purpose
- Enhance development experience
- Provide IDE autocompletion
- Define custom property types
- Facilitate access to Yii2 components
- Aid in code documentation

### Defined Classes

1. **Yii Class**
```php
class Yii {
    /**
     * @var \yii\web\Application|\yii\console\Application|__Application
     */
    public static $app;
}
```

2. **__Application Class**
```php
/**
 * @property yii\rbac\DbManager $authManager 
 * @property \yii\web\User|__WebUser $user
 */
class __Application {
}
```

### Características Especiales / Special Features

#### Español
1. **Anotaciones PHPDoc**
   - Definición de tipos de propiedades
   - Referencias a clases del framework
   - Documentación de componentes personalizados

2. **Ayudas al Desarrollo**
   - Autocompletado de código
   - Sugerencias de tipos
   - Navegación entre clases

#### English
1. **PHPDoc Annotations**
   - Property type definitions
   - Framework class references
   - Custom component documentation

2. **Development Aids**
   - Code autocompletion
   - Type hinting
   - Class navigation

### Notas Importantes / Important Notes

#### Español
- El archivo nunca se incluye en la ejecución
- Solo sirve para propósitos de IDE
- Se puede personalizar según necesidades
- Debe mantenerse actualizado con la configuración real

#### English
- File is never included in execution
- Serves IDE purposes only
- Can be customized as needed
- Should be kept in sync with actual configuration



