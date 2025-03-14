---
title: Manual Técnico appServiserAdmin
description:  Documentación Técnica del Archivo `._bootstrap.php`
---

## Documentación Técnica del Archivo `_bootstrap.php` en la Carpeta `appServiserAdmin/tests/functional`

---

## Español

## Definición de la Carpeta
El archivo `_bootstrap.php` se encuentra en la carpeta de pruebas de un proyecto que utiliza el marco de trabajo Yii2. Este archivo se utiliza para inicializar configuraciones y variables necesarias antes de que se ejecuten las pruebas.

## Propósito
El propósito del archivo `_bootstrap.php` es preparar el entorno de pruebas configurando variables globales, cargando dependencias y realizando cualquier otra configuración necesaria para que las pruebas se ejecuten correctamente. Esto asegura que todas las pruebas tengan un entorno consistente y predecible.

## Funciones
1. **Inicialización de Variables**: Permite la configuración de variables globales que pueden ser utilizadas en las pruebas, como datos de configuración o instancias de objetos.
2. **Carga de Dependencias**: Se encarga de cargar cualquier dependencia necesaria para las pruebas, asegurando que todas las bibliotecas y componentes requeridos estén disponibles.
3. **Configuración del Entorno**: Realiza configuraciones específicas del entorno de pruebas, como la conexión a bases de datos de prueba o la configuración de servicios simulados.

---

## English

## Technical Documentation for the File `_bootstrap.php`

## Folder Definition
The `_bootstrap.php` file is located in the testing folder of a Yii2 project. This file is used to initialize configurations and variables necessary before the tests are executed.

## Purpose
The purpose of the `_bootstrap.php` file is to prepare the testing environment by setting up global variables, loading dependencies, and performing any other necessary configuration to ensure that tests run correctly. This ensures that all tests have a consistent and predictable environment.

## Functions
1. **Variable Initialization**: Allows the configuration of global variables that can be used in tests, such as configuration data or object instances.
2. **Dependency Loading**: Handles loading any dependencies required for the tests, ensuring that all necessary libraries and components are available.
3. **Environment Configuration**: Performs environment-specific configurations for testing, such as connecting to test databases or setting up mock services.