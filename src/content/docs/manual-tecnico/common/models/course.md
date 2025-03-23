---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `models`
---

## Course PHP Model File

## ¿Qué es `Course.php`?

El archivo `Course.php` es un script PHP que se utiliza como un modelo en aplicaciones que utilizan el framework Yii. Este archivo define la estructura y la lógica de negocio relacionada con los cursos, permitiendo la interacción con la base de datos y la manipulación de datos de cursos en la aplicación.

## Definición de la Carpeta

El archivo `Course.php` se encuentra típicamente en la carpeta de modelos de un proyecto que utiliza Yii. La estructura de carpetas puede variar, pero generalmente incluye:

- **models/**: Carpeta que contiene archivos de modelo.
  - **Course.php**: Archivo que define el modelo de curso.

## Propósito

El propósito principal de `Course.php` es:

- **Gestión de Cursos**: Proporcionar una representación de los cursos en la aplicación, incluyendo la validación, el almacenamiento y la recuperación de datos relacionados con los cursos.

## Funciones

1. **Definición de Atributos**: Define los atributos del curso, como `id`, `nombre`, `descripción`, `fecha de inicio`, `fecha de finalización`, y otros campos relevantes.
2. **Reglas de Validación**: Incluye reglas de validación para asegurar que los datos del curso sean correctos y cumplan con los requisitos establecidos (por ejemplo, que el nombre del curso no esté vacío).
3. **Relaciones con Otros Modelos**: Puede definir relaciones con otros modelos, como inscripciones o usuarios, para asociar cursos con entidades relevantes en la aplicación.
4. **Métodos de Consulta**: Proporciona métodos para realizar consultas específicas relacionadas con los cursos, como buscar cursos por nombre o validar la existencia de un curso.
5. **Interacción con la Base de Datos**: Facilita la interacción con la base de datos, permitiendo crear, leer, actualizar y eliminar registros de cursos de manera eficiente.

---

## Course PHP Model File

## What is `Course.php`?

The `Course.php` file is a PHP script that is generally used as a model in applications that utilize the Yii framework. This file defines the structure and business logic related to courses, allowing interaction with the database and manipulation of course data within the application.

## Folder Definition

The `Course.php` file is typically found in the models folder of a Yii project. The folder structure may vary, but it generally includes:

- **models/**: Folder containing model files.
  - **Course.php**: File that defines the course model.

## Purpose

The main purpose of `Course.php` is to:

- **Course Management**: Provide a representation of courses in the application, including validation, storage, and retrieval of course-related data.

## Functions

1. **Attribute Definition**: Defines the attributes of the course, such as `id`, `name`, `description`, `start_date`, `end_date`, and other relevant fields.
2. **Validation Rules**: Includes validation rules to ensure that course data is correct and meets established requirements (e.g., ensuring the course name is not empty).
3. **Relationships with Other Models**: May define relationships with other models, such as enrollments or users, to associate courses with relevant entities in the application.
4. **Query Methods**: Provides methods to perform specific queries related to courses, such as searching for courses by name or validating the existence of a course.
5. **Database Interaction**: Facilitates interaction with the database, allowing for the creation, reading, updating, and deletion of course records efficiently.