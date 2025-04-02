---
title: Manual Técnico Carpeta environments
description:  Documentación Técnica de la subcarpeta `dev\common\config`
---

## Documentación Técnica: main-local.php

## Ubicación
environments/dev/common/config/main-local.php

## Definición
Archivo de configuración local principal para el entorno de desarrollo en Yii2, que define componentes básicos de la aplicación.

## Propósito
- Configurar conexión a base de datos
- Establecer configuración del mailer
- Definir parámetros locales del sistema
- Gestionar componentes del entorno de desarrollo

## Funcionalidades
Configuración de Base de Datos
```
'db' => [
    'class' => \yii\db\Connection::class,
    'dsn' => 'mysql:host=localhost;dbname=yii2advanced',
    'username' => 'root',
    'password' => '',
    'charset' => 'utf8',
]
Apply to main-local.p...
Sistema de Correo
Apply to main-local.p...
```

## Notas
- Específico para desarrollo local
- Contiene credenciales de desarrollo
- Configurable según necesidades

## Technical Documentation: main-local.php

## Location
environments/dev/common/config/main-local.php

## Definition
Main local configuration file for Yii2 development environment, defining basic application components.

## Purpose
- Configure database connection
- Set up mailer configuration
- Define local system parameters
- Manage development environment components

## Features
Database Configuration
Apply to main-local.p...
Mail System
Apply to main-local.p...

## Notes
- Development environment specific
- Contains development credentials
- Configurable as needed


