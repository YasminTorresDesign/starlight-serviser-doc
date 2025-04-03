---
title: Manual Técnico Carpeta environments
description:  Documentación Técnica de la subcarpeta `prod\backend\config`
---

## Documentación Técnica: main-local.php (Production Backend)

## Ubicación
environments/prod/backend/config/main-local.php

## Definición
Archivo de configuración local para el backend en el entorno de producción de Yii2.

## Propósito
- Configurar backend en producción
- Establecer parámetros locales
- Gestionar componentes de producción
-Definir configuraciones específicas

## Contenido
```
<?php
return [
    'components' => [
        'request' => [
            'cookieValidationKey' => ''  // Clave de validación para producción
        ]
    ]
];
Apply to main-local.p...
```

## Notas
- Entorno de producción
- Requiere configuración segura
- Crítico para el sistema
- No incluir datos sensibles

## Technical Documentation: main-local.php (Production Backend)

## Location
environments/prod/backend/config/main-local.php

## Definition
Local configuration file for backend in Yii2 production environment.

## Purpose
- Configure production backend
- Set local parameters
- Manage production components
- Define specific configurations

## Content
Apply to main-local.p...

## Notes
- Production environment
- Requires secure configuration
- Critical for system
- No sensitive data included


