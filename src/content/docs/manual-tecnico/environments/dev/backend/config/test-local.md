---
title: Manual Técnico Carpeta environments
description:  Documentación Técnica de la subcarpeta `dev\backend\config`
---

## Documentación Técnica: test-local.php

## Ubicación
environments/dev/backend/config/test-local.php

## Definición
Este archivo es un archivo de configuración PHP específico para el entorno de pruebas (test) local en una aplicación backend. Es parte de una estructura de configuración por ambientes, común en frameworks PHP modernos como Yii2.

## Propósito
Proporciona configuraciones específicas para el entorno de pruebas local
Permite sobrescribir configuraciones base para adaptarlas al entorno de testing
Facilita la ejecución de pruebas unitarias y funcionales en un entorno local
Ayuda a mantener separadas las configuraciones de diferentes entornos (desarrollo, pruebas, producción)

## Carpeta
La carpeta environments/dev/backend/config/ es parte de una estructura jerárquica donde:
environments/: Contiene configuraciones específicas por entorno
dev/: Específico para el entorno de desarrollo
backend/: Configuraciones para el backend de la aplicación
config/: Archivos de configuración del sistema

## Technical Documentation: test-local.php

## Location
environments/dev/backend/config/test-local.php

## Definition
This file is a PHP configuration file specific to the local testing environment in a backend application. It's part of an environment-based configuration structure, common in modern PHP frameworks like Yii2.

## Purpose
Provides specific configurations for the local testing environment
Allows overriding base configurations to adapt them for testing purposes
Facilitates the execution of unit and functional tests in a local environment
Helps maintain separate configurations for different environments (development, testing, production)

## Folder Structure
The environments/dev/backend/config/ folder is part of a hierarchical structure where:
environments/: Contains environment-specific configurations
dev/: Specific to the development environment
backend/: Configurations for the application's backend
config/: System configuration files

## Uso Común / Common Usage
- Configuración de bases de datos de prueba / Test database configuration
- Configuración de servicios mock / Mock services configuration
- Parámetros específicos de prueba / Test-specific parameters
- Variables de entorno para testing / Testing environment variables
- Notas Importantes / Important Notes
- Este archivo no debe contener credenciales reales / This file should not contain real credentials
- Las configuraciones son específicas para pruebas locales / Configurations are specific to local testing
- Debe mantenerse sincronizado con el entorno de desarrollo / Should be kept in sync with the development environment


