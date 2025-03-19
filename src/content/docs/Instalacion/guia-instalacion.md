---
title: Manual de instalación
description: Manual de instalación.
---


## Información General

### Propósito
Esta guía tiene por objeto definir los requerimientos y procedimiento de instalación del aplicativo. Para este manual, la instalación se realizará de manera local.

### Guía de instalación
Antes de instalar el aplicativo, es necesario asegurar que se cuenta con los siguientes requerimientos:

- Sistema Operativo - Windows, Linux o macOS. Para el ejercicio de instalación en este manual, tener en cuenta que se hará sobre el sistema operativo Windows. 

- Cuenta en Git – Para poder clonar el repositorio. 

- Instalación de XAMPP – Para poder realizar pruebas con la base de datos en entorno local. 

- Gestor de base de Datos - PostgreSQL, MySQL. 

- PHP 7.4 o superior – Dado que el proyecto ha sido realizado bajo el lenguaje de programación PHP. 

- Composer – Sistema de gestión de paquetes para desarrollos bajo PHP. 

Ahora bien, ya validados los requerimientos anteriormente expuestos, se pueden seguir los pasos de instalación descritos en la documentación del proyecto: <br><br>
Paso 1 - Clonar el repositorio:<br>
``` sql
git clone https://github.com/miguelcmo/Sennova.git
```
<br><br>

Para esto, estando dentro de la carpeta donde se quiere guardar el proyecto, se abre la consola de Git Bash (botón “Git Bash Here”) como se muestra en la siguiente imagen: <br>
![Menú contextual](/public/a_inst1.png)<br><br>

![Consola Git Bash](/public/b_inst2.png)<br><br>

Una vez abierta la consola se inicializa el repositorio con el comando “git init” para fijar la rama maestra. Posteriormente, se emplea el comando “git clone” incluyendo a continuación del comando, la dirección URL del proyecto. <br>
Una vez que el proyecto ha sido clonado, se obtiene la siguiente lista de archivos dentro de la carpeta escogida para albergar el proyecto: <br><br>
![Vista de archivos del proyecto](/public/c_inst3.png)<br><br>

Una vez realizados estos pasos, se puede abrir el proyecto en el IDE de su preferencia. Para el desarrollo del presente manual se empleará el IDE VSCode.<br><br> 

Paso 2 - Instalar dependencias con Composer:<br>
``` sql
composer install
```
<br><br>
Al realizar este paso, la consola arroja la siguiente serie de mensajes:<br><br>

![Vista de archivos del proyecto](/public/d_inst4.png)<br><br>

A continuación, se explica lo que significa cada uno de los mensajes: <br>
- Installing dependencies from lock file (including require-dev) – Indica que el gestor composer está instalando las dependencias según lo especificado en el archivo “composer.lock” del proyecto. De esta forma se asegura que se usen las versiones exactas previamente definidas, garantizando que el entorno sea consistente. 

- Verifying lock file contents can be installed on current platform – Indica que el gestor composer ha verificado que todas las dependencias sean compatibles con el sistema operativo y la versión de PHP que se está empleando. 

- Nothing to install, update or remove - Indica que todas las dependencias ya se encuentran instaladas y actualizadas según lo indicado en el archivo “composer.lock”. 

- Package swiftmailer/swiftmailer is abandoned, you should avoid using it. Use symfony/mailer instead - Este aviso informa que la librería swiftmailer/swiftmailer, la cual se está empleando para el proyecto, ya no se mantiene activamente y que, aunque sigue funcionando, se recomienda reemplazarla por symfony/mailer, que se emplea con los mismos fines. 

- Generating autoload files – Indica que el gestor composer ha generado un archivo de autoload que permite la carga automática de las clases de las dependencias y del proyecto sin necesidad de requerir cargar manualmente cada archivo. 

- 68 packages you are using are looking for funding - Indica que algunas dependencias tienen autores o proyectos que aceptan financiamiento para mantener su desarrollo y que, por medio del comando composer fund, se puede obtener información adicional sobre cómo contribuir a cada uno de los proyectos. <br><br>

Paso 3 - Configurar los archivos de entorno y configuración:<br>
``` sql
Copiar los archivos .env.example a .env y ajustar las variables necesarias.
Configurar las bases de datos en common/config/main-local.php.
```
<br><br>
Para copiar los archivos, en la consola se escribe el comando “cp .env.example .env”. Es probable que, al hacerlo, la consola arroje el siguiente mensaje: <br><br>

![Vista de archivos del proyecto](/public/e_inst5.png)<br><br>

Esto significa que el archivo .”env.example” no existe en la ruta especificada. Esto sucede porque el archivo no está incluido en el repositorio o porque se encuentra en un directorio diferente al actual. <br>

Por lo tanto, es necesario crear el archivo “.env” de forma manual en la carpeta raíz del proyecto y asignar las variables de entorno que se consideren necesarias (credenciales de base de datos, el puerto del servidor, claves API, etc), pues, en los archivos incluidos en el repositorio no se cuentan con variables de entorno bien definidas. <br><br>

![Vista de archivos del proyecto](/public/f_inst6.png)<br><br>

Los parámetros de conexión a la base de datos se encuentran en el archivo “main-local.php”, estos parámetros resulta conveniente convertirlos en variables de entorno. <br><br>

![Vista de archivos del proyecto](/public/g_inst7.png)<br><br>

Paso 4 - Ejecutar migraciones para crear las tablas necesarias en la base de datos:<br>
``` sql
php yii migrate
```
<br><br>
Para ejecutar este comando con éxito bajo un entorno local, es necesario crear previamente los archivos “main-local.php” y “params-local.php” y almacenarlos en la carpeta “console/config/...”, incluyendo las credenciales de acceso a la base de datos local. <br><br>

![Vista de archivos del proyecto](/public/h_inst8.png)<br><br>

![Vista de archivos del proyecto](/public/i_inst9.png)<br><br>

Y al ejecutar el comando “php yii migrate” en la consola, se activará la herramienta de migración de Yii solicitando confirmar las migraciones que se tengan pendientes. <br><br>

![Vista de archivos del proyecto](/public/j_inst10.png)<br><br>

Paso 5 - Configurar el servidor web para que apunte a las carpetas `web` de cada aplicación (`servisena/web`, `serviserFrontend/web`, `serviserBackend/web`).<br><br>

En fase de desarrollo y pruebas, este paso suele hacerse sobre el servidor local. Para la elaboración de este manual, las pruebas se realizaron en XAMPP. Así: <br>

Primero se debe habilitar los Virtual Hosts en Apache. En XAMPP, los Virtual Hosts permiten acceder a múltiples aplicaciones desde diferentes URLs locales en lugar de usar http://localhost/servisena/web. Para esto, se debe abrir el archivo de configuración de Apache en XAMPP “C:\xampp\apache\conf\extra\httpd-vhosts.conf” y añadir las configuraciones para cada aplicación al final del archivo. <br><br>

![Vista de archivos del proyecto](/public/k_inst11.png)<br><br>

Posteriormente, se deben agregar los dominios locales al archivo “hosts”, esto, para que el sistema operativo (en este caso Windows) reconozca los dominios “sennovalab.local”, “serviser.local” y “serviseradmin.local” dentro del entorno local. <br><br>

![Vista de archivos del proyecto](/public/l_inst12.png)<br><br>

Posteriormente, se debe crear una carpeta vacía, darle el nombre “assets” y almacenarla en cada una de las carpetas con nombre “web” que se encuentran en las carpetas de cada subproyecto: appSennovalab, appServiser y appServiserAdmin como se observa en las siguientes imágenes:<br><br>

![Vista de archivos del proyecto](/public/m_inst13.png)<br><br>

![Vista de archivos del proyecto](/public/n_inst14.png)<br><br>

![Vista de archivos del proyecto](/public/o_inst15.png)<br><br>

Posteriormente, es necesario abrir el documento php.ini que tiene como dirección ...\xampp\php\php.ini y descomentar la línea que tenga el contenido “extension=gd” (eliminar el símbolo ;) como se muestra en la siguiente imagen: <br><br>

![Vista de archivos del proyecto](/public/p_inst16.png)<br><br>

Una vez realizado este paso, se debe inicializar el servidor local para luego escribir en el campo de URL del explorador de internet las direcciones que apuntan a cada uno de los servidores del proyecto, esto es: 

- sennovalab.local 

- serviser.local 

- serviseradmin.local 
<br><br>

![Vista de archivos del proyecto](/public/q_inst17.png)<br><br>

![Vista de archivos del proyecto](/public/r_inst18.png)<br><br>

![Vista de archivos del proyecto](/public/s_inst19.png)<br><br>


### Requisitos de sistema. 

De acuerdo con la documentación del proyecto se tienen los siguientes requisitos: 

- PHP 7.4 o superior. 
- Composer. 
- Servidor Web (Apache, Nginx). 
- Base de datos MySQL, MariaDB o PostgreSQL. 

Los siguientes, aunque no están textualmente especificados en la documentación, se infieren del conocimiento que se tiene sobre el proyecto: 

- RAM: 4GB 
- CPU: 2 núcleos 
- Almacenamiento: 2GB libres


### Configuración inicial. 

En esta configuración inicial, podrían contemplarse la definición de variables de entorno y la inicialización de las bases de datos del proyecto. <br>

Actualmente, el proyecto no cuenta con variables de entorno definidas. Sin embargo, se recomienda crearlas sobre las variables cuya información es sensible a la protección de datos, como, por ejemplo, las credenciales de acceso a las bases de datos del proyecto; también es viable crearlas para variables que sean transversales a varios o a todos los documentos o scripts del proyecto, así, en caso de tener que realizar una modificación sobre estas, bastaría con hacerla sobre su definición en el documento de variables de entorno para no tener que buscar y modificar cada uno de los archivos o scripts del proyecto en donde aparecen. <br>

Para esto, es necesario crear el archivo “.env” en la raiz del proyecto y agregar las variables que se consideren necesarias para el proyecto. <br>

La siguiente imagen es un ejemplo de variables que se pueden describir en este documento: <br><br>

![Vista de archivos del proyecto](/public/t_inst20.png)<br><br>

Ahora bien, al trabajar bajo un entorno local (fase de desarrollo) el proyecto se debe inicializar tanto en el servidor como en la base de datos. <br>

Para el desarrollo de este manual, se ha empleado la herramienta XAMPP, por lo tanto, basta con ejecutar el panel de control de dicha herramienta e inicializar los servicios “Apache” para la activación del servidor y “MySQL” para la activación de la base de datos. <br><br>

![Vista de archivos del proyecto](/public/u_inst21.png)<br><br>

### Troubleshooting común. 

A continuación, se describen algunos problemas comunes que pueden presentarse con la puesta en marcha del proyecto: 

 

**Problema -** "Invalid Configuration – yii\base\InvalidConfigException". 

**Descripción -** Al hacer clic en algún enlace, el sistema muestra un error indicando que falta la extensión GD o ImageMagick de PHP. 

**Causas**

- La extensión GD o ImageMagick no estaba habilitada en PHP. 

**Solución**

- Verificar la configuración de PHP con phpinfo(). Esto puede ser por consola. 

- Habilitar la extensión gd en php.ini. Esto se hace editando el documento php.ini directamente. 

- Reiniciar el servidor. 

 

**Problema –** Se presenta la página en blanco al ejecutar el proyecto. 

**Descripción -** Al intentar abrir la aplicación, aparece una pantalla en blanco sin errores visibles. 

**Causas**

- Posible error de configuración en config/web.php. 

- Faltan permisos de escritura en runtime o web/assets. 

**Solución**

- Habilitar YII_DEBUG y YII_ENV_DEV en index.php. 

- Verificar permisos con chmod -R 777 runtime/ web/assets/. 

- Revisar los logs en runtime/logs/app.log. 

 

**Problema –** Se presenta error en la conexión a la base de datos del proyecto. 

**Descripción -** Al intentar acceder a la base de datos, ya sea para realizar consultas o modificaciones, no ocurre nada. 

**Causas**

- Las credenciales de acceso son incorrectas. 

**Solución**

- Verificar las credenciales de acceso en el archivo “.env” y en la herramienta de gestión de base de datos que se este empleando. 

- Modificar las credenciales en el archivo “.env” en caso de ser necesario. 

- Reiniciar el servidor. 