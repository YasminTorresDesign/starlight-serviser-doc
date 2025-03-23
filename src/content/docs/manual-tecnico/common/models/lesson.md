---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `models`
---

## Lesson PHP Model File

## ¿Qué es `Lesson.php`?

El archivo `Lesson.php` es un script PHP que se utiliza como un modelo en aplicaciones que utilizan el framework Yii. Este archivo define la estructura y la lógica de negocio relacionada con las lecciones, permitiendo la interacción con la base de datos y la manipulación de datos de lecciones en la aplicación.

## Definición de la Carpeta

El archivo `Lesson.php` se encuentra típicamente en la carpeta de modelos de un proyecto que utiliza Yii. La estructura de carpetas puede variar, pero generalmente incluye:

- **models/**: Carpeta que contiene archivos de modelo.
  - **Lesson.php**: Archivo que define el modelo de lección.

## Propósito

El propósito principal de `Lesson.php` es:

- **Gestión de Lecciones**: Proporcionar una representación de las lecciones en la aplicación, incluyendo la validación, el almacenamiento y la recuperación de datos relacionados con las lecciones.

## Funciones

1. **Definición de Atributos**: Define los atributos de la lección, como `id`, `course_id`, `title`, `content`, `duration`, y otros campos relevantes.
2. **Reglas de Validación**: Incluye reglas de validación para asegurar que los datos de la lección sean correctos y cumplan con los requisitos establecidos (por ejemplo, que el título no esté vacío).
3. **Relaciones con Otros Modelos**: Puede definir relaciones con otros modelos, como el modelo de curso o módulos, para asociar lecciones con entidades relevantes en la aplicación.
4. **Métodos de Consulta**: Proporciona métodos para realizar consultas específicas relacionadas con las lecciones, como buscar lecciones por curso o validar la existencia de una lección.
5. **Interacción con la Base de Datos**: Facilita la interacción con la base de datos, permitiendo crear, leer, actualizar y eliminar registros de lecciones de manera eficiente.

---

## Lesson PHP Model File

## What is `Lesson.php`?

The `Lesson.php` file is a PHP script that is generally used as a model in applications that utilize the Yii framework. This file defines the structure and business logic related to lessons, allowing interaction with the database and manipulation of lesson data within the application.

## Folder Definition

The `Lesson.php` file is typically found in the models folder of a Yii project. The folder structure may vary, but it generally includes:

- **models/**: Folder containing model files.
  - **Lesson.php**: File that defines the lesson model.

## Purpose

The main purpose of `Lesson.php` is to:

- **Lesson Management**: Provide a representation of lessons in the application, including validation, storage, and retrieval of lesson-related data.

## Functions

1. **Attribute Definition**: Defines the attributes of the lesson, such as `id`, `course_id`, `title`, `content`, `duration`, and other relevant fields.
2. **Validation Rules**: Includes validation rules to ensure that lesson data is correct and meets established requirements (e.g., ensuring that the title is not empty).
3. **Relationships with Other Models**: May define relationships with other models, such as the course model or module model, to associate lessons with relevant entities in the application.
4. **Query Methods**: Provides methods to perform specific queries related to lessons, such as searching for lessons by course or validating the existence of a lesson.
5. **Database Interaction**: Facilitates interaction with the database, allowing for the creation, reading, updating, and deletion of lesson records efficiently.