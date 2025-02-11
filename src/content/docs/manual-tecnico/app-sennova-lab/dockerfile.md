---
title: Manual Técnico AppSennovaLab
description:  Documentación Técnica del Archivo `Dockerfile`
---

## Documentación Técnica del Archivo `Dockerfile` en `/appSennovalab/`

## Español

### ¿Para qué es?
El archivo `Dockerfile` es un script de configuración que define cómo se debe construir la imagen Docker para la aplicación SennovaLab. Especifica el entorno de ejecución, dependencias y configuraciones necesarias para ejecutar la aplicación en un contenedor.

### Definición de la Carpeta
Se encuentra en `/appSennovalab/`, directorio raíz de la aplicación frontend. Esta ubicación permite la construcción de la imagen Docker específica para el módulo frontend.

### Propósito
El propósito principal es:
- Definir el entorno de la aplicación
- Configurar el servidor web
- Establecer dependencias
- Configurar permisos
- Optimizar el despliegue

### Funciones
- **Configuraciones Principales**:
  - Imagen base PHP/Apache
  - Configuración de Apache
  - Ajustes del documento root
  - Permisos de archivos
  - Variables de entorno

  ### Características Técnicas / Technical Features
- Basado en imagen oficial Yii2
- PHP 8.1 con Apache
- Configuración personalizada de Apache
- Optimización de rendimiento
- Gestión de permisos
- Configuración de entorno
- Seguridad del contenedor

### Componentes Principales / Main Components
1. **Imagen Base**:
   - Yii2 PHP 8.1
   - Servidor Apache
   - Extensiones PHP
   - Utilidades del sistema

2. **Configuración Web**:
   - Document root
   - Virtual hosts
   - Módulos Apache
   - Directivas de seguridad

3. **Optimizaciones**:
   - Caché de PHP
   - Configuración de memoria
   - Permisos de archivos
   - Variables de entorno

### Mejores Prácticas / Best Practices
- Usar imágenes oficiales
- Minimizar capas Docker
- Optimizar caché de construcción
- Gestionar seguridad
- Documentar configuraciones
- Mantener imagen ligera
- Seguir principios DevOps

---

## English

### What is it for?
The `Dockerfile` is a configuration script that defines how the Docker image should be built for the SennovaLab application. It specifies the runtime environment, dependencies, and configurations needed to run the application in a container.

### Folder Definition
Located in `/appSennovalab/`, frontend application root directory. This location allows building the Docker image specific to the frontend module.

### Purpose
The main purpose is to:
- Define application environment
- Configure web server
- Establish dependencies
- Set up permissions
- Optimize deployment

### Functions
- **Main Configurations**:
  - PHP/Apache base image
  - Apache configuration
  - Document root settings
  - File permissions
  - Environment variables

```dockerfile:appSennovalab/Dockerfile
# Imagen base / Base image
FROM yiisoftware/yii2-php:8.1-apache

# Cambiar document root para Apache / Change document root for Apache
RUN sed -i -e 's|/app/web|/app/appSennovalab/web|g' /etc/apache2/sites-available/000-default.conf

# Configuración adicional de PHP y Apache si es necesario
# Additional PHP and Apache configuration if needed
```






