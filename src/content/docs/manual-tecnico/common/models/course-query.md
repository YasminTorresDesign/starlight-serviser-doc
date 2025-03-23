---
title: Manual Técnico Carpeta Common
description:  Documentación Técnica de la subcarpeta `models`
---

## Course Query PHP File

## ¿Qué es `CourseQuery.php`?

El archivo `CourseQuery.php` es un script PHP que se utiliza en el contexto de un modelo de consulta en aplicaciones que utilizan el framework Yii. Este archivo define una clase que extiende la funcionalidad de las consultas para el modelo de curso, permitiendo realizar consultas específicas y optimizadas sobre los registros de cursos almacenados en la base de datos.

## Definición de la Carpeta

El archivo `CourseQuery.php` se encuentra típicamente en la carpeta de modelos o consultas de un proyecto que utiliza Yii. La estructura de carpetas puede variar, pero generalmente incluye:

- **models/** o **queries/**: Carpeta que contiene archivos de modelos y consultas.
  - **CourseQuery.php**: Archivo que define la consulta para el modelo de curso.

## Propósito

El propósito principal de `CourseQuery.php` es:

- **Consulta de Registros de Curso**: Proporcionar una interfaz para realizar consultas sobre los registros de curso, facilitando la recuperación de datos específicos según criterios definidos.

## Funciones

1. **Definición de Consultas Personalizadas**: Permite definir métodos que encapsulan consultas específicas, como obtener cursos por nombre, por estado, o en un rango de fechas.
2. **Encadenamiento de Consultas**: Facilita el encadenamiento de métodos para construir consultas más complejas de manera fluida y legible.
3. **Optimización de Consultas**: Puede incluir lógica para optimizar las consultas, como el uso de índices o la selección de solo los campos necesarios.
4. **Interacción con el Modelo**: Se integra con el modelo de curso, permitiendo que las consultas devuelvan instancias del modelo o datos en un formato específico.
5. **Facilitación de Pruebas**: Proporciona una forma estructurada de realizar pruebas sobre las consultas, asegurando que devuelvan los resultados esperados.

---

## Course Query PHP File

## What is `CourseQuery.php`?

The `CourseQuery.php` file is a PHP script that is generally used in the context of a query model in applications that utilize the Yii framework. This file defines a class that extends the functionality of queries for the course model, allowing for specific and optimized queries on the course records stored in the database.

## Folder Definition

The `CourseQuery.php` file is typically found in the models or queries folder of a Yii project. The folder structure may vary, but it generally includes:

- **models/** or **queries/**: Folder containing model and query files.
  - **CourseQuery.php**: File that defines the query for the course model.

## Purpose

The main purpose of `CourseQuery.php` is to:

- **Course Record Querying**: Provide an interface for performing queries on course records, facilitating the retrieval of specific data based on defined criteria.

## Functions

1. **Custom Query Definitions**: Allows defining methods that encapsulate specific queries, such as retrieving courses by name, by status, or within a date range.
2. **Query Chaining**: Facilitates method chaining to build more complex queries in a fluent and readable manner.
3. **Query Optimization**: May include logic to optimize queries, such as using indexes or selecting only the necessary fields.
4. **Model Interaction**: Integrates with the course model, allowing queries to return instances of the model or data in a specific format.
5. **Testing Facilitation**: Provides a structured way to perform tests on the queries, ensuring they return the expected results.
