---
title: Manual Técnico appServiserAdmin
description:  Documentación Técnica del Archivo `_bootstrap.php`
---

## Documentación Técnica del Archivo `_bootstrap.php` en la Carpeta `appServiserAdmin/tests/unit`

---

## Español

## Definición de la Carpeta
El archivo `_bootstrap.php` se encuentra en la carpeta `unit` de un proyecto que utiliza el marco de trabajo Yii2. Esta carpeta se utiliza para almacenar pruebas unitarias, que son pruebas que verifican el comportamiento de componentes individuales de la aplicación.

## Propósito
El propósito del archivo `_bootstrap.php` es preparar el entorno de pruebas unitarias configurando variables globales, cargando dependencias y realizando cualquier otra configuración necesaria antes de que se ejecuten las pruebas unitarias. Esto asegura que todas las pruebas tengan un entorno consistente y predecible.

## Funciones
1. **Inicialización de Variables**: Permite la configuración de variables globales que pueden ser utilizadas en las pruebas unitarias, como datos de configuración o instancias de objetos.
2. **Carga de Dependencias**: Se encarga de cargar cualquier dependencia necesaria para las pruebas unitarias, asegurando que todas las bibliotecas y componentes requeridos estén disponibles.
3. **Configuración del Entorno**: Realiza configuraciones específicas del entorno de pruebas unitarias, como la conexión a bases de datos de prueba o la configuración de servicios simulados.

---

## English

## Technical Documentation for the `_bootstrap.php` File in the `unit` Folder

## Folder Definition
The `_bootstrap.php` file is located in the `unit` folder of a Yii2 project. This folder is used to store unit tests, which are tests that verify the behavior of individual components of the application.

## Purpose
The purpose of the `_bootstrap.php` file is to prepare the unit testing environment by setting up global variables, loading dependencies, and performing any other necessary configuration before the unit tests are executed. This ensures that all tests have a consistent and predictable environment.

## Functions
1. **Variable Initialization**: Allows the configuration of global variables that can be used in unit tests, such as configuration data or object instances.
2. **Dependency Loading**: Handles loading any dependencies required for the unit tests, ensuring that all necessary libraries and components are available.
3. **Environment Configuration**: Performs environment-specific configurations for unit testing, such as connecting to test databases or setting up mock services.