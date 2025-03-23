---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica del  archivo codeception.yml`
---

## ¿Qué es `codeception.yml` en la carpeta `common`?

El archivo `codeception.yml` en la carpeta `common` es un archivo de configuración utilizado por Codeception, un marco de pruebas para aplicaciones PHP. Este archivo define la configuración global para las pruebas que se ejecutan en el contexto de la carpeta `common`, que generalmente contiene la lógica de negocio y las funcionalidades compartidas de la aplicación.

## Definición de la Carpeta

El archivo `codeception.yml` se encuentra típicamente en la carpeta `common` de un proyecto que utiliza Codeception. La estructura de carpetas puede variar, pero generalmente incluye:

- **common/**: Carpeta que contiene la lógica de negocio y funcionalidades compartidas.
  - **codeception.yml**: Archivo de configuración de Codeception para la carpeta `common`.

## Propósito

El propósito principal de `codeception.yml` en la carpeta `common` es:

- **Configuración Global para Pruebas Comunes**: Proporcionar una configuración centralizada que se aplica a todas las pruebas dentro del contexto de la carpeta `common`, facilitando la gestión de las pruebas y su ejecución.
- **Definición de Entornos y Módulos**: Permitir la configuración de diferentes entornos de prueba y módulos específicos que son relevantes para las funcionalidades comunes de la aplicación.

## Funciones

1. **Configuración de Módulos**: Especifica qué módulos de Codeception se utilizarán para las pruebas en la carpeta `common`, como módulos para pruebas de aceptación, funcionales o unitarias.
2. **Configuración de Entornos**: Permite definir diferentes configuraciones para distintos entornos de prueba, facilitando la ejecución de pruebas en contextos específicos relacionados con la lógica de negocio.
3. **Configuración de Parámetros**: Permite establecer parámetros globales que pueden ser utilizados en las pruebas, como URLs, credenciales de base de datos, y otros valores necesarios para las pruebas en el contexto de `common`.
4. **Integración con Herramientas**: Facilita la integración con otras herramientas y servicios que son relevantes para las pruebas de la lógica de negocio, como bases de datos y servicios externos.

---

# Codeception Configuration File in Common Directory

## What is `codeception.yml` in the `common` folder?

The `codeception.yml` file in the `common` folder is a configuration file used by Codeception, a testing framework for PHP applications. This file defines the global configuration for tests that run in the context of the `common` folder, which typically contains the business logic and shared functionalities of the application.

## Folder Definition

The `codeception.yml` file is typically found in the `common` folder of a project that uses Codeception. The folder structure may vary, but it generally includes:

- **common/**: Folder containing business logic and shared functionalities.
  - **codeception.yml**: Codeception configuration file for the `common` folder.

## Purpose

The main purpose of `codeception.yml` in the `common` folder is to:

- **Global Configuration for Common Tests**: Provide a centralized configuration that applies to all tests within the context of the `common` folder, making it easier to manage and execute tests.
- **Environment and Module Definition**: Allow the configuration of different testing environments and specific modules that are relevant to the common functionalities of the application.

## Functions

1. **Module Configuration**: Specifies which Codeception modules will be used for tests in the `common` folder, such as modules for acceptance, functional, or unit tests.
2. **Environment Configuration**: Allows defining different configurations for different testing environments, facilitating the execution of tests in specific contexts related to business logic.
3. **Parameter Configuration**: Enables setting global parameters that can be used in tests, such as URLs, database credentials, and other necessary values for tests in the `common` context.
4. **Integration with Tools**: Facilitates integration with other tools and services that are relevant for testing business logic, such as databases and external services.