---
title: Manual Técnico AppSennovaLab
description:  Documentación Técnica del Archivo `robots.txt`
---

## Documentación Técnica del Archivo `robots.txt` en `/appSennovalab/web/`

## Español

### ¿Para qué es?
El archivo `robots.txt` es un archivo de texto que proporciona instrucciones a los robots de rastreo web (crawlers) sobre qué partes del sitio web SennovaLab pueden o no pueden acceder. Es un estándar utilizado para controlar el acceso de los bots de búsqueda.

### Definición de la Carpeta
Se encuentra en `/appSennovalab/web/`, directorio raíz público de la aplicación. Esta ubicación es obligatoria ya que los robots de búsqueda buscan este archivo en la raíz del sitio web.

### Propósito
El propósito principal es:
- Controlar el acceso de robots de búsqueda
- Proteger áreas sensibles del sitio
- Optimizar el rastreo del sitio
- Gestionar recursos del servidor
- Mejorar el SEO del sitio

### Funciones
- **Directivas Principales**:
  - User-agent: Especifica el robot
  - Disallow: Rutas prohibidas
  - Allow: Rutas permitidas
  - Sitemap: Ubicación del sitemap

### Características Técnicas / Technical Features
- Formato de texto plano
- Sintaxis estándar de robots.txt
- Directivas específicas por robot
- Control granular de acceso
- Integración con sitemaps
- Optimización SEO
- Gestión de recursos

### Directivas Comunes / Common Directives
1. **Control de Acceso**:
   - Bloqueo de directorios privados
   - Permiso para recursos públicos
   - Protección de datos sensibles
   - Gestión de caché

2. **Optimización**:
   - Control de velocidad de rastreo
   - Priorización de contenido
   - Eficiencia de indexación
   - Gestión de recursos

3. **SEO**:
   - Integración con sitemap
   - Directivas específicas por buscador
   - Control de indexación
   - Optimización de rastreo

### Mejores Prácticas / Best Practices
- Mantener actualizado el archivo
- Usar directivas específicas
- Proteger información sensible
- Optimizar el rastreo
- Monitorear el acceso de bots
- Integrar con estrategia SEO
- Documentar cambios
---

## English

### What is it for?
The `robots.txt` file is a text file that provides instructions to web crawlers about which parts of the SennovaLab website they can or cannot access. It's a standard used to control search bot access.

### Folder Definition
Located in `/appSennovalab/web/`, application's public root directory. This location is mandatory as search robots look for this file at the website's root.

### Purpose
The main purpose is to:
- Control search robot access
- Protect sensitive site areas
- Optimize site crawling
- Manage server resources
- Improve site SEO

### Functions
- **Main Directives**:
  - User-agent: Specifies the robot
  - Disallow: Forbidden paths
  - Allow: Permitted paths
  - Sitemap: Sitemap location

```txt:appSennovalab/web/robots.txt
# Configuración global para todos los robots
# Global configuration for all robots
User-agent: *
Disallow: /

# Rutas específicas prohibidas / Specific forbidden paths
Disallow: /admin/
Disallow: /backend/
Disallow: /config/
Disallow: /vendor/
Disallow: /assets/

# Rutas permitidas / Allowed paths
Allow: /public/
Allow: /images/
Allow: /css/
Allow: /js/

# Ubicación del sitemap / Sitemap location
Sitemap: https://sennovalab.com/sitemap.xml
```




