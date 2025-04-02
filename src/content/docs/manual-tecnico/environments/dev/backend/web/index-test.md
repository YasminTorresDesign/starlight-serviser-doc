---
title: Manual Técnico Carpeta environments
description:  Documentación Técnica de la subcarpeta `dev\backend\web`
---

## Documentación Técnica: index-test.php

## Ubicación
environments/dev/backend/web/index-test.php

## Definición
Archivo de entrada para pruebas del backend en Yii2, actuando como controlador frontal para el entorno de testing.

## Propósito
- Punto de entrada para pruebas
- Control de acceso local
- Configuración del entorno de pruebas
- Carga de dependencias necesarias
- Gestión de configuraciones del sistema

## Funcionalidades
- Control de Acceso
- Limita acceso a localhost (127.0.0.1 y ::1)
- Bloquea accesos externos

## Configuración
- Activa modo debug
- Establece entorno de pruebas
- Carga autoloader y framework
- Combina configuraciones del sistema

## Consideraciones
- Solo para uso en desarrollo local
- No debe exponerse en producción
- Esencial para pruebas automatizadas
- Requiere configuración local correcta

## Technical Documentation: index-test.php

## Location
environments/dev/backend/web/index-test.php

## Definition
Backend test entry file for Yii2, serving as front controller for the testing environment.

## Purpose
- Test environment entry point
- Local access control
- Test environment configuration
- Required dependencies loading
- System configuration management

## Features
- Access Control
- Restricts to localhost (127.0.0.1 and ::1)
- Blocks external access

## Configuration
- Enables debug mode
- Sets test environment
- Loads autoloader and framework
- Merges system configurations

## Considerations
- Local development use only
- Not for production deployment
- Essential for automated testing
- Requires proper local setup


