---
title: Carpeta migrations
description: Carpeta migrations.
---

## Documentación Técnica de la carpeta `migrations`

## Información General
La carpeta `console/migrations/` en un proyecto Yii2 Advanced Template almacena los archivos de migraciones de base de datos. Estas migraciones permiten gestionar cambios estructurales en la base de datos mediante código, en lugar de hacerlo manualmente.

Las migraciones en Yii2 son scripts de PHP que permiten:
- Crear, modificar o eliminar tablas.
- Insertar datos iniciales (como roles o configuraciones).
- Hacer rollback a cambios anteriores.

Se ejecutan con la línea de comandos de Yii2 y facilitan el mantenimiento de la base de datos en diferentes entornos.

### Estructura

La carpeta presenta la siguiente estructura:
``` sql
migrations/
    |---.gitkeep
    |---RbacController.php
    |---m130524_201344_create_database.php
    |---m130524_201442_init.php
    |---m190124_110200_add_verification_token_column_to_user_table.php
    |---m240708_220418_create_user_profile_table.php
    |---m240708_221348_create_role_table.php
    |---m240708_221545_create_permission_table.php
    |---m240708_221653_create_user_role_table.php
    |---m240708_221834_create_course_category_table.php
    |---m240708_221940_create_course_table.php
    |---m240708_222037_create_course_module_table.php
    |---m240708_222150_create_course_completion_table.php
    |---m240708_222305_create_lesson_table.php
    |---m240708_222403_create_lesson_resource_table.php
    |---m240708_224911_create_quiz_table.php
    |---m240708_225004_create_quiz_question_table.php
    |---m240708_225058_create_quiz_attempt_table.php
    |---m240708_225157_create_quiz_grade_table.php
    |---m240708_225706_create_assignment_table.php
    |---m240708_225805_create_assignment_submission_table.php
    |---m240708_225926_create_discussion_forum_table.php
    |---m240708_230042_create_discussion_topic_table.php
    |---m240708_230139_create_discussion_post_table.php
    |---m240708_230247_create_grade_item_table.php
    |---m240708_230434_create_gradebook_table.php
    |---m240708_230520_create_grade_table.php
    |---m240709_001723_create_enrollment_table.php
    |---m240709_001851_create_group_table.php
    |---m240709_001935_create_group_member_table.php
    |---m240709_002042_create_attendance_table.php
    |---m240709_002144_create_notification_table.php
    |---m240709_003104_create_message_table.php
    |---m240709_003207_create_message_thread_table.php
    |---m240709_004033_create_calendar_event_table.php
    |---m240709_004132_create_file_table.php
    |---m240709_004303_create_file_reference_table.php
    |---m240709_004415_create_feedback_table.php
    |---m240709_004503_create_feedback_response_table.php
    |---m240709_005156_create_badge_table.php
    |---m240709_005245_create_badge_award_table.php
    |---m240709_005346_create_certificate_table.php
    |---m240709_005440_create_payment_table.php
    |---m240709_005485_create_plan_table.php
    |---m240709_005607_create_subscription_table.php
    |---m240709_005720_create_announcement_table.php
    |---m240709_005833_create_course_feedback_table.php
    |---m240709_005927_create_course_rating_table.php
    |---m240709_010032_create_user_activity_log_table.php
    |---m240709_010125_create_system_setting_table.php
    |---m240709_011117_create_theme_table.php
    |---m240709_011125_create_plugin_table.php
    |---m240709_011135_create_integration_table.php
    |---m240709_011143_create_report_table.php
    |---m240709_011152_create_audit_log_table.php
    |---m240830_200017_create_survey_table.php
    |---m240830_200141_create_sections_table.php
    |---m240830_200301_create_questions_table.php
    |---m240830_200416_create_options_table.php
    |---m240830_200527_create_responses_table.php
    |---m240830_200652_create_answers_table.php
    |---m240830_200902_create_manual_grades_table.php
    |---m240830_201148_create_survey_results_table.php

```
<br>
Donde:<br>

##### `m130524_201344_create_database.php`
Este código es una migración en Yii2 que gestiona la creación y eliminación de una base de datos llamada `servisena`. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Class m130524_201344_create_database
 */
class m130524_201344_create_database extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $dbName = 'servisena';
        $charset = 'utf8';
        $collate = 'utf8_general_ci';

        $this->execute("CREATE DATABASE IF NOT EXISTS {$dbName} CHARACTER SET {$charset} COLLATE {$collate};");
    }
x
    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $dbName = 'servisena';

        $this->execute("DROP DATABASE IF EXISTS {$dbName};");
    }
}
```

- `yii\db\Migration` es una clase base que Yii2 proporciona para realizar cambios en la base de datos de forma estructurada.
- El nombre de la migración sigue el formato `mYYYYMMDD_HHMMSS_description`, indicando que fue creada el 24 de mayo de 2013 a las 20:13:44.
- `create_database` sugiere que el propósito de esta migración es crear una base de datos.
- El método safeUp() se usa si ocurre un error, Yii2 revierte los cambios automáticamente (seguridad en transacciones).
    - Define el nombre de la base de datos (`servisena`).
    - Configura el charset (`utf8`) y el collate (`utf8_general_ci`).
    - Usa `execute()` para ejecutar la sentencia SQL
- El método safeDown() se usa para la eliminación de la base de datos. Permite revertir la migración con `php yii migrate/down`.


##### `m130524_201442_init.php`
Este código define una migración en Yii2 para crear la tabla `user` en la base de datos. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

class m130524_201442_init extends Migration
{
    public function up()
    {
        $tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE=InnoDB';
        }

        $this->createTable('{{%user}}', [
            'id' => $this->primaryKey(),
            'username' => $this->string()->notNull()->unique(),
            'auth_key' => $this->string(32)->notNull(),
            'password_hash' => $this->string()->notNull(),
            'password_reset_token' => $this->string()->unique(),
            'email' => $this->string()->notNull()->unique(),

            'status' => $this->smallInteger()->notNull()->defaultValue(10),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ], $tableOptions);
    }

    public function down()
    {
        $this->dropTable('{{%user}}');
    }
}
```

- Importa la clase `Migration`, que proporciona métodos para modificar la base de datos de forma estructurada.
- El nombre sigue el formato `mYYYYMMDD_HHMMSS_description`.
- Esta migración fue creada el 24 de mayo de 2013 a las 20:14:42 y su propósito es `init` (inicialización).
- El método up() se usa para la creación de la tabla `user`.
- El método down() se usa para la eliminación de la tabla `user`.


##### `m190124_110200_add_verification_token_column_to_user_table.php`
Este código define una migración en Yii2 para agregar una nueva columna `verification_token` a la tabla user. A continuación se muestra el código:<br>

``` php
<?php

use \yii\db\Migration;

class m190124_110200_add_verification_token_column_to_user_table extends Migration
{
    public function up()
    {
        $this->addColumn('{{%user}}', 'verification_token', $this->string()->defaultValue(null));
    }

    public function down()
    {
        $this->dropColumn('{{%user}}', 'verification_token');
    }
}
```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos.
- La migración sigue el formato `mYYYYMMDD_HHMMSS_description`.
- Esta migración fue creada el 24 de enero de 2019 a las 11:02:00 y su propósito es **"add_verification_token_column_to_user_table"** (agregar la columna `verification_token` a la tabla `user`).
- El método up() se usa para agregar la columna.
- El método down() se usa para la eliminación de la columna.


##### `m240708_220418_create_user_profile_table.php`
Este código define una migración en Yii2 para la creación de la tabla `user_profile`, que almacena información adicional del usuario. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%user_profile}}`.
 */
class m240708_220418_create_user_profile_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%user_profile}}', [
            'id' => $this->primaryKey(),
            'user_id' => $this->integer()->notNull(),
            'first_name' => $this->string(50)->notNull(),
            'last_name' => $this->string(50)->notNull(),
            'dob' => $this->date(),
            'gender' => $this->string(10),
            'address' => $this->string(255),
            'phone' => $this->string(15),
            'bio' => $this->text(),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);

        // creates index for column `user_id`
        $this->createIndex(
            '{{%idx-user_profile-user_id}}',
            '{{%user_profile}}',
            'user_id'
        );

        // add foreign key for table `{{%user}}`
        $this->addForeignKey(
            '{{%fk-user_profile-user_id}}',
            '{{%user_profile}}',
            'user_id',
            '{{%user}}',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // drops foreign key for table `{{%user}}`
        $this->dropForeignKey(
            '{{%fk-user_profile-user_id}}',
            '{{%user_profile}}'
        );

        // drops index for column `user_id`
        $this->dropIndex(
            '{{%idx-user_profile-user_id}}',
            '{{%user_profile}}'
        );

        $this->dropTable('{{%user_profile}}');
    }
}
```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `user_profile`.
- Crea un índice en `user_id` para mejorar la eficiencia de las consultas.
- Relaciona `user_profile.user_id` con `user.id`.
- `CASCADE`: Si se borra un usuario en `user`, se eliminarán automáticamente sus registros en `user_profile`.
- El método `safeDown()` se usa para la eliminación de la tabla `user_profile` junto con su índice y su clave foránea.


##### `m240708_221348_create_role_table.php`
Este código define una migración en Yii2 para la creación de la tabla `role` en la base de datos, que almacena los diferentes roles dentro del sistema. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%role}}`.
 */
class m240708_221348_create_role_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%role}}', [
            'id' => $this->primaryKey(),
            'name' => $this->string(50)->notNull()->unique(),
            'description' => $this->string(255),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%role}}');
    }
}
```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `role` mediante el metodo `safeUp()`.
- Elimina la tabla `role` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240708_221545_create_permission_table.php`
Este código define una migración en Yii2 para la creación de la tabla permission en la base de datos, que almacena los permisos del sistema. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%permission}}`.
 */
class m240708_221545_create_permission_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%permission}}', [
            'id' => $this->primaryKey(),
            'name' => $this->string(50)->notNull()->unique(),
            'description' => $this->string(255),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%permission}}');
    }
}
```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `permission` mediante el metodo `safeUp()`.
- Elimina la tabla `permission` mediante el metodo `safeDown()` si la migración se revierte.


##### `m240708_221653_create_user_role_table.php`
Este código define una migración en Yii2 para la creación de la tabla `user_role` en la base de datos, que relaciona usuarios con roles. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%user_role}}`.
 */
class m240708_221653_create_user_role_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%user_role}}', [
            'id' => $this->primaryKey(),
            'user_id' => $this->integer()->notNull(),
            'role_id' => $this->integer()->notNull(),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);

        // creates index for column `user_id`
        $this->createIndex(
            '{{%idx-user_role-user_id}}',
            '{{%user_role}}',
            'user_id'
        );

        // add foreign key for table `{{%user}}`
        $this->addForeignKey(
            '{{%fk-user_role-user_id}}',
            '{{%user_role}}',
            'user_id',
            '{{%user}}',
            'id',
            'CASCADE'
        );

        // creates index for column `role_id`
        $this->createIndex(
            '{{%idx-user_role-role_id}}',
            '{{%user_role}}',
            'role_id'
        );

        // add foreign key for table `{{%role}}`
        $this->addForeignKey(
            '{{%fk-user_role-role_id}}',
            '{{%user_role}}',
            'role_id',
            '{{%role}}',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // drops foreign key for table `{{%user}}`
        $this->dropForeignKey(
            '{{%fk-user_role-user_id}}',
            '{{%user_role}}'
        );

        // drops index for column `user_id`
        $this->dropIndex(
            '{{%idx-user_role-user_id}}',
            '{{%user_role}}'
        );

        // drops foreign key for table `{{%role}}`
        $this->dropForeignKey(
            '{{%fk-user_role-role_id}}',
            '{{%user_role}}'
        );

        // drops index for column `role_id`
        $this->dropIndex(
            '{{%idx-user_role-role_id}}',
            '{{%user_role}}'
        );

        $this->dropTable('{{%user_role}}');
    }
}
```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `user_role` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas
- Elimina la tabla `permission` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240708_221834_create_course_category_table.php`
Este código define una migración en Yii2 para la creación de la tabla `course_category`en la base de datos, que almacena las categorías de los cursos. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%course_category}}`.
 */
class m240708_221834_create_course_category_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%course_category}}', [
            'id' => $this->primaryKey(),
            'name' => $this->string(100)->notNull()->unique(),
            'description' => $this->string(255),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%course_category}}');
    }
}
```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `course_category` mediante el metodo `safeUp()`.
- Elimina la tabla `course_category` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240708_221940_create_course_table.php`
Este código define una migración en Yii2 para la creación de la tabla `course`en la base de datos, que almacena la información de los cursos. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%course}}`.
 */
class m240708_221940_create_course_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%course}}', [
            'id' => $this->primaryKey(),
            'title' => $this->string(255)->notNull(),
            'description' => $this->text(),
            'category_id' => $this->integer()->notNull(),
            'instructor_id' => $this->integer()->notNull(),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);

        // creates index for column `category_id`
        $this->createIndex(
            '{{%idx-course-category_id}}',
            '{{%course}}',
            'category_id'
        );

        // add foreign key for table `{{%course_category}}`
        $this->addForeignKey(
            '{{%fk-course-category_id}}',
            '{{%course}}',
            'category_id',
            '{{%course_category}}',
            'id',
            'CASCADE'
        );

        // creates index for column `instructor_id`
        $this->createIndex(
            '{{%idx-course-instructor_id}}',
            '{{%course}}',
            'instructor_id'
        );

        // add foreign key for table `{{%user}}`
        $this->addForeignKey(
            '{{%fk-course-instructor_id}}',
            '{{%course}}',
            'instructor_id',
            '{{%user}}',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // drops foreign key for table `{{%course_category}}`
        $this->dropForeignKey(
            '{{%fk-course-category_id}}',
            '{{%course}}'
        );

        // drops index for column `category_id`
        $this->dropIndex(
            '{{%idx-course-category_id}}',
            '{{%course}}'
        );

        // drops foreign key for table `{{%user}}`
        $this->dropForeignKey(
            '{{%fk-course-instructor_id}}',
            '{{%course}}'
        );

        // drops index for column `instructor_id`
        $this->dropIndex(
            '{{%idx-course-instructor_id}}',
            '{{%course}}'
        );

        $this->dropTable('{{%course}}');
    }
}
```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `course` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `course` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240708_222037_create_course_module_table.php`
Este código define una migración en Yii2 para la creación de la tabla `course_module` en la base de datos, que almacena los módulos de cada curso. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%course_module}}`.
 */
class m240708_222037_create_course_module_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%course_module}}', [
            'id' => $this->primaryKey(),
            'course_id' => $this->integer()->notNull(),
            'title' => $this->string(255)->notNull(),
            'description' => $this->text(),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);

        // creates index for column `course_id`
        $this->createIndex(
            '{{%idx-course_module-course_id}}',
            '{{%course_module}}',
            'course_id'
        );

        // add foreign key for table `{{%course}}`
        $this->addForeignKey(
            '{{%fk-course_module-course_id}}',
            '{{%course_module}}',
            'course_id',
            '{{%course}}',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // drops foreign key for table `{{%course}}`
        $this->dropForeignKey(
            '{{%fk-course_module-course_id}}',
            '{{%course_module}}'
        );

        // drops index for column `course_id`
        $this->dropIndex(
            '{{%idx-course_module-course_id}}',
            '{{%course_module}}'
        );

        $this->dropTable('{{%course_module}}');
    }
}
```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `course_module` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `course_module` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240708_222150_create_course_completion_table.php`
Este código define una migración en Yii2 para la creación de la tabla `course_completion` en la base de datos, que almacena los usuarios han completado qué cursos y cuándo. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%course_completion}}`.
 */
class m240708_222150_create_course_completion_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%course_completion}}', [
            'id' => $this->primaryKey(),
            'course_id' => $this->integer()->notNull(),
            'user_id' => $this->integer()->notNull(),
            'completed_at' => $this->integer()->notNull(),
        ]);

        // creates index for column `course_id`
        $this->createIndex(
            '{{%idx-course_completion-course_id}}',
            '{{%course_completion}}',
            'course_id'
        );

        // add foreign key for table `{{%course}}`
        $this->addForeignKey(
            '{{%fk-course_completion-course_id}}',
            '{{%course_completion}}',
            'course_id',
            '{{%course}}',
            'id',
            'CASCADE'
        );

        // creates index for column `user_id`
        $this->createIndex(
            '{{%idx-course_completion-user_id}}',
            '{{%course_completion}}',
            'user_id'
        );

        // add foreign key for table `{{%user}}`
        $this->addForeignKey(
            '{{%fk-course_completion-user_id}}',
            '{{%course_completion}}',
            'user_id',
            '{{%user}}',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // drops foreign key for table `{{%course}}`
        $this->dropForeignKey(
            '{{%fk-course_completion-course_id}}',
            '{{%course_completion}}'
        );

        // drops index for column `course_id`
        $this->dropIndex(
            '{{%idx-course_completion-course_id}}',
            '{{%course_completion}}'
        );

        // drops foreign key for table `{{%user}}`
        $this->dropForeignKey(
            '{{%fk-course_completion-user_id}}',
            '{{%course_completion}}'
        );

        // drops index for column `user_id`
        $this->dropIndex(
            '{{%idx-course_completion-user_id}}',
            '{{%course_completion}}'
        );

        $this->dropTable('{{%course_completion}}');
    }
}
```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `course_completion` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `course_completion` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240708_222305_create_lesson_table.php`
Este código define una migración en Yii2 para la creación de la tabla `lesson` en la base de datos, que almacena las lecciones dentro de los módulos de un curso. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%lesson}}`.
 */
class m240708_222305_create_lesson_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%lesson}}', [
            'id' => $this->primaryKey(),
            'course_module_id' => $this->integer()->notNull(),
            'title' => $this->string(255)->notNull(),
            'content' => $this->text(),
            'video_url' => $this->string(255),
            'attachment' => $this->string(255),
            'sort_order' => $this->integer()->defaultValue(0),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);

        // creates index for column `course_module_id`
        $this->createIndex(
            '{{%idx-lesson-course_module_id}}',
            '{{%lesson}}',
            'course_module_id'
        );

        // add foreign key for table `{{%course_module}}`
        $this->addForeignKey(
            '{{%fk-lesson-course_module_id}}',
            '{{%lesson}}',
            'course_module_id',
            '{{%course_module}}',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // drops foreign key for table `{{%course_module}}`
        $this->dropForeignKey(
            '{{%fk-lesson-course_module_id}}',
            '{{%lesson}}'
        );

        // drops index for column `course_module_id`
        $this->dropIndex(
            '{{%idx-lesson-course_module_id}}',
            '{{%lesson}}'
        );

        $this->dropTable('{{%lesson}}');
    }
}
```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `lesson` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `lesson` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240708_222403_create_lesson_resource_table.php`
Este código define una migración en Yii2 para la creación de la tabla `lesson_resource` en la base de datos, que almacena recursos adicionales para las lecciones, como archivos PDF, imágenes, documentos, etc. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%lesson_resource}}`.
 */
class m240708_222403_create_lesson_resource_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%lesson_resource}}', [
            'id' => $this->primaryKey(),
            'lesson_id' => $this->integer()->notNull(),
            'title' => $this->string(255)->notNull(),
            'description' => $this->text(),
            'file_path' => $this->string(255)->notNull(),
            'type' => $this->string(50)->notNull(),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);

        // creates index for column `lesson_id`
        $this->createIndex(
            '{{%idx-lesson_resource-lesson_id}}',
            '{{%lesson_resource}}',
            'lesson_id'
        );

        // add foreign key for table `{{%lesson}}`
        $this->addForeignKey(
            '{{%fk-lesson_resource-lesson_id}}',
            '{{%lesson_resource}}',
            'lesson_id',
            '{{%lesson}}',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // drops foreign key for table `{{%lesson}}`
        $this->dropForeignKey(
            '{{%fk-lesson_resource-lesson_id}}',
            '{{%lesson_resource}}'
        );

        // drops index for column `lesson_id`
        $this->dropIndex(
            '{{%idx-lesson_resource-lesson_id}}',
            '{{%lesson_resource}}'
        );

        $this->dropTable('{{%lesson_resource}}');
    }
}
```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `lesson_resource` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `lesson_resource` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240708_224911_create_quiz_table.php`
Este código define una migración en Yii2 para la creación de la tabla `quiz` en la base de datos, que almacena información sobre los cuestionarios de los cursos. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%quiz}}`.
 */
class m240708_224911_create_quiz_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%quiz}}', [
            'id' => $this->primaryKey(),
            'course_id' => $this->integer()->notNull(),
            'title' => $this->string(255)->notNull(),
            'description' => $this->text(),
            'time_limit' => $this->integer()->defaultValue(null),
            'status' => $this->smallInteger()->notNull()->defaultValue(0),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);

        // Creates index for column `course_id`
        $this->createIndex(
            '{{%idx-quiz-course_id}}',
            '{{%quiz}}',
            'course_id'
        );

        // Adds foreign key for table `{{%course}}`
        $this->addForeignKey(
            '{{%fk-quiz-course_id}}',
            '{{%quiz}}',
            'course_id',
            '{{%course}}',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // Drops foreign key for table `{{%course}}`
        $this->dropForeignKey(
            '{{%fk-quiz-course_id}}',
            '{{%quiz}}'
        );

        // Drops index for column `course_id`
        $this->dropIndex(
            '{{%idx-quiz-course_id}}',
            '{{%quiz}}'
        );

        $this->dropTable('{{%quiz}}');
    }
}
```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `quiz` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `quiz` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240708_225004_create_quiz_question_table.php`
Este código define una migración en Yii2 para la creación de la tabla `quiz_question` en la base de datos, que almacena las preguntas de los cuestionarios. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%quiz_question}}`.
 */
class m240708_225004_create_quiz_question_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%quiz_question}}', [
            'id' => $this->primaryKey(),
            'quiz_id' => $this->integer()->notNull(),
            'question' => $this->text()->notNull(),
            'options' => $this->json()->notNull(),
            'correct_option' => $this->integer()->notNull(),
            'points' => $this->integer()->defaultValue(1),
            'sort_order' => $this->integer()->defaultValue(0),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);

        // Creates index for column `quiz_id`
        $this->createIndex(
            '{{%idx-quiz_question-quiz_id}}',
            '{{%quiz_question}}',
            'quiz_id'
        );

        // Adds foreign key for table `{{%quiz}}`
        $this->addForeignKey(
            '{{%fk-quiz_question-quiz_id}}',
            '{{%quiz_question}}',
            'quiz_id',
            '{{%quiz}}',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // Drops foreign key for table `{{%quiz}}`
        $this->dropForeignKey(
            '{{%fk-quiz_question-quiz_id}}',
            '{{%quiz_question}}'
        );

        // Drops index for column `quiz_id`
        $this->dropIndex(
            '{{%idx-quiz_question-quiz_id}}',
            '{{%quiz_question}}'
        );

        $this->dropTable('{{%quiz_question}}');
    }
}
```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `quiz_question` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `quiz_question` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240708_225058_create_quiz_attempt_table.php`
Este código define una migración en Yii2 para la creación de la tabla `quiz_attempt` en la base de datos, que almacena los intentos de los usuarios en los cuestionarios. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%quiz_attempt}}`.
 */
class m240708_225058_create_quiz_attempt_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%quiz_attempt}}', [
            'id' => $this->primaryKey(),
            'quiz_id' => $this->integer()->notNull(),
            'user_id' => $this->integer()->notNull(),
            'started_at' => $this->integer()->notNull(),
            'finished_at' => $this->integer(),
            'status' => $this->smallInteger()->notNull()->defaultValue(0),
            'score' => $this->integer(),
            'is_passed' => $this->boolean()->defaultValue(false),
        ]);

        // Creates index for column `quiz_id`
        $this->createIndex(
            '{{%idx-quiz_attempt-quiz_id}}',
            '{{%quiz_attempt}}',
            'quiz_id'
        );

        // Adds foreign key for table `{{%quiz}}`
        $this->addForeignKey(
            '{{%fk-quiz_attempt-quiz_id}}',
            '{{%quiz_attempt}}',
            'quiz_id',
            '{{%quiz}}',
            'id',
            'CASCADE'
        );

        // Creates index for column `user_id`
        $this->createIndex(
            '{{%idx-quiz_attempt-user_id}}',
            '{{%quiz_attempt}}',
            'user_id'
        );

        // Adds foreign key for table `{{%user}}`
        $this->addForeignKey(
            '{{%fk-quiz_attempt-user_id}}',
            '{{%quiz_attempt}}',
            'user_id',
            '{{%user}}',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // Drops foreign key for table `{{%quiz}}`
        $this->dropForeignKey(
            '{{%fk-quiz_attempt-quiz_id}}',
            '{{%quiz_attempt}}'
        );

        // Drops index for column `quiz_id`
        $this->dropIndex(
            '{{%idx-quiz_attempt-quiz_id}}',
            '{{%quiz_attempt}}'
        );

        // Drops foreign key for table `{{%user}}`
        $this->dropForeignKey(
            '{{%fk-quiz_attempt-user_id}}',
            '{{%quiz_attempt}}'
        );

        // Drops index for column `user_id`
        $this->dropIndex(
            '{{%idx-quiz_attempt-user_id}}',
            '{{%quiz_attempt}}'
        );

        $this->dropTable('{{%quiz_attempt}}');
    }
}
```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `quiz_attempt` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `quiz_attempt` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240708_225157_create_quiz_grade_table.php`
Este código define una migración en Yii2 para la creación de la tabla `quiz_grade` en la base de datos, que almacena las notas de los usuarios en los cuestionarios. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%quiz_grade}}`.
 */
class m240708_225157_create_quiz_grade_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%quiz_grade}}', [
            'id' => $this->primaryKey(),
            'quiz_attempt_id' => $this->integer()->notNull(),
            'quiz_question_id' => $this->integer()->notNull(),
            'user_id' => $this->integer()->notNull(),
            'chosen_option' => $this->integer()->notNull(),
            'is_correct' => $this->boolean()->defaultValue(false),
            'points' => $this->integer()->notNull()->defaultValue(0),
        ]);

        // Creates index for column `quiz_attempt_id`
        $this->createIndex(
            '{{%idx-quiz_grade-quiz_attempt_id}}',
            '{{%quiz_grade}}',
            'quiz_attempt_id'
        );

        // Adds foreign key for table `{{%quiz_attempt}}`
        $this->addForeignKey(
            '{{%fk-quiz_grade-quiz_attempt_id}}',
            '{{%quiz_grade}}',
            'quiz_attempt_id',
            '{{%quiz_attempt}}',
            'id',
            'CASCADE'
        );

        // Creates index for column `quiz_question_id`
        $this->createIndex(
            '{{%idx-quiz_grade-quiz_question_id}}',
            '{{%quiz_grade}}',
            'quiz_question_id'
        );

        // Adds foreign key for table `{{%quiz_question}}`
        $this->addForeignKey(
            '{{%fk-quiz_grade-quiz_question_id}}',
            '{{%quiz_grade}}',
            'quiz_question_id',
            '{{%quiz_question}}',
            'id',
            'CASCADE'
        );

        // Creates index for column `user_id`
        $this->createIndex(
            '{{%idx-quiz_grade-user_id}}',
            '{{%quiz_grade}}',
            'user_id'
        );

        // Adds foreign key for table `{{%user}}`
        $this->addForeignKey(
            '{{%fk-quiz_grade-user_id}}',
            '{{%quiz_grade}}',
            'user_id',
            '{{%user}}',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // Drops foreign key for table `{{%quiz_attempt}}`
        $this->dropForeignKey(
            '{{%fk-quiz_grade-quiz_attempt_id}}',
            '{{%quiz_grade}}'
        );

        // Drops index for column `quiz_attempt_id`
        $this->dropIndex(
            '{{%idx-quiz_grade-quiz_attempt_id}}',
            '{{%quiz_grade}}'
        );

        // Drops foreign key for table `{{%quiz_question}}`
        $this->dropForeignKey(
            '{{%fk-quiz_grade-quiz_question_id}}',
            '{{%quiz_grade}}'
        );

        // Drops index for column `quiz_question_id`
        $this->dropIndex(
            '{{%idx-quiz_grade-quiz_question_id}}',
            '{{%quiz_grade}}'
        );

        // Drops foreign key for table `{{%user}}`
        $this->dropForeignKey(
            '{{%fk-quiz_grade-user_id}}',
            '{{%quiz_grade}}'
        );

        // Drops index for column `user_id`
        $this->dropIndex(
            '{{%idx-quiz_grade-user_id}}',
            '{{%quiz_grade}}'
        );

        $this->dropTable('{{%quiz_grade}}');
    }
}
```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `quiz_grade` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `quiz_grade` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240708_225706_create_assignment_table.php`
Este código define una migración en Yii2 para la creación de la tabla `assignment` en la base de datos, que almacena las tareas o asignaciones dentro de los cursos. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%assignment}}`.
 */
class m240708_225706_create_assignment_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%assignment}}', [
            'id' => $this->primaryKey(),
            'course_id' => $this->integer()->notNull(),
            'title' => $this->string(255)->notNull(),
            'description' => $this->text(),
            'due_date' => $this->integer()->notNull(),
            'status' => $this->smallInteger()->notNull()->defaultValue(0),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);

        // Creates index for column `course_id`
        $this->createIndex(
            '{{%idx-assignment-course_id}}',
            '{{%assignment}}',
            'course_id'
        );

        // Adds foreign key for table `{{%course}}`
        $this->addForeignKey(
            '{{%fk-assignment-course_id}}',
            '{{%assignment}}',
            'course_id',
            '{{%course}}',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // Drops foreign key for table `{{%course}}`
        $this->dropForeignKey(
            '{{%fk-assignment-course_id}}',
            '{{%assignment}}'
        );

        // Drops index for column `course_id`
        $this->dropIndex(
            '{{%idx-assignment-course_id}}',
            '{{%assignment}}'
        );

        $this->dropTable('{{%assignment}}');
    }
}
```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `assignment` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `assignment` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240708_225805_create_assignment_submission_table.php`
Este código define una migración en Yii2 para la creación de la tabla `assignment_submission` en la base de datos, que almacena las entregas de tareas realizadas por los estudiantes en los cursos. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%assignment_submission}}`.
 */
class m240708_225805_create_assignment_submission_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%assignment_submission}}', [
            'id' => $this->primaryKey(),
            'assignment_id' => $this->integer()->notNull(),
            'user_id' => $this->integer()->notNull(),
            'submitted_at' => $this->integer()->notNull(),
            'file_path' => $this->string(255),
            'grade' => $this->integer(),
            'comments' => $this->text(),
            'status' => $this->smallInteger()->notNull()->defaultValue(0),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);

        // Creates index for column `assignment_id`
        $this->createIndex(
            '{{%idx-assignment_submission-assignment_id}}',
            '{{%assignment_submission}}',
            'assignment_id'
        );

        // Adds foreign key for table `{{%assignment}}`
        $this->addForeignKey(
            '{{%fk-assignment_submission-assignment_id}}',
            '{{%assignment_submission}}',
            'assignment_id',
            '{{%assignment}}',
            'id',
            'CASCADE'
        );

        // Creates index for column `user_id`
        $this->createIndex(
            '{{%idx-assignment_submission-user_id}}',
            '{{%assignment_submission}}',
            'user_id'
        );

        // Adds foreign key for table `{{%user}}`
        $this->addForeignKey(
            '{{%fk-assignment_submission-user_id}}',
            '{{%assignment_submission}}',
            'user_id',
            '{{%user}}',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // Drops foreign key for table `{{%assignment}}`
        $this->dropForeignKey(
            '{{%fk-assignment_submission-assignment_id}}',
            '{{%assignment_submission}}'
        );

        // Drops index for column `assignment_id`
        $this->dropIndex(
            '{{%idx-assignment_submission-assignment_id}}',
            '{{%assignment_submission}}'
        );

        // Drops foreign key for table `{{%user}}`
        $this->dropForeignKey(
            '{{%fk-assignment_submission-user_id}}',
            '{{%assignment_submission}}'
        );

        // Drops index for column `user_id`
        $this->dropIndex(
            '{{%idx-assignment_submission-user_id}}',
            '{{%assignment_submission}}'
        );

        $this->dropTable('{{%assignment_submission}}');
    }
}
```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `assignment_submission` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `assignment_submission` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240708_225926_create_discussion_forum_table.php`
Este código define una migración en Yii2 para la creación de la tabla `discussion_forum` en la base de datos, que almacena los foros de discusión de los cursos. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%assignment_submission}}`.
 */
class m240708_225805_create_assignment_submission_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%assignment_submission}}', [
            'id' => $this->primaryKey(),
            'assignment_id' => $this->integer()->notNull(),
            'user_id' => $this->integer()->notNull(),
            'submitted_at' => $this->integer()->notNull(),
            'file_path' => $this->string(255),
            'grade' => $this->integer(),
            'comments' => $this->text(),
            'status' => $this->smallInteger()->notNull()->defaultValue(0),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);

        // Creates index for column `assignment_id`
        $this->createIndex(
            '{{%idx-assignment_submission-assignment_id}}',
            '{{%assignment_submission}}',
            'assignment_id'
        );

        // Adds foreign key for table `{{%assignment}}`
        $this->addForeignKey(
            '{{%fk-assignment_submission-assignment_id}}',
            '{{%assignment_submission}}',
            'assignment_id',
            '{{%assignment}}',
            'id',
            'CASCADE'
        );

        // Creates index for column `user_id`
        $this->createIndex(
            '{{%idx-assignment_submission-user_id}}',
            '{{%assignment_submission}}',
            'user_id'
        );

        // Adds foreign key for table `{{%user}}`
        $this->addForeignKey(
            '{{%fk-assignment_submission-user_id}}',
            '{{%assignment_submission}}',
            'user_id',
            '{{%user}}',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // Drops foreign key for table `{{%assignment}}`
        $this->dropForeignKey(
            '{{%fk-assignment_submission-assignment_id}}',
            '{{%assignment_submission}}'
        );

        // Drops index for column `assignment_id`
        $this->dropIndex(
            '{{%idx-assignment_submission-assignment_id}}',
            '{{%assignment_submission}}'
        );

        // Drops foreign key for table `{{%user}}`
        $this->dropForeignKey(
            '{{%fk-assignment_submission-user_id}}',
            '{{%assignment_submission}}'
        );

        // Drops index for column `user_id`
        $this->dropIndex(
            '{{%idx-assignment_submission-user_id}}',
            '{{%assignment_submission}}'
        );

        $this->dropTable('{{%assignment_submission}}');
    }
}
```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `discussion_forum` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `discussion_forum` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240708_230042_create_discussion_topic_table.php`
Este código define una migración en Yii2 para la creación de la tabla `discussion_topic` en la base de datos, que almacena los temas tratados en los foros de discusión de los cursos. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%discussion_topic}}`.
 */
class m240708_230042_create_discussion_topic_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%discussion_topic}}', [
            'id' => $this->primaryKey(),
            'forum_id' => $this->integer()->notNull(),
            'title' => $this->string(255)->notNull(),
            'content' => $this->text(),
            'created_by' => $this->integer()->notNull(),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);

        // Creates index for column `forum_id`
        $this->createIndex(
            '{{%idx-discussion_topic-forum_id}}',
            '{{%discussion_topic}}',
            'forum_id'
        );

        // Adds foreign key for table `{{%discussion_forum}}`
        $this->addForeignKey(
            '{{%fk-discussion_topic-forum_id}}',
            '{{%discussion_topic}}',
            'forum_id',
            '{{%discussion_forum}}',
            'id',
            'CASCADE'
        );

        // Creates index for column `created_by`
        $this->createIndex(
            '{{%idx-discussion_topic-created_by}}',
            '{{%discussion_topic}}',
            'created_by'
        );

        // Adds foreign key for table `{{%user}}`
        $this->addForeignKey(
            '{{%fk-discussion_topic-created_by}}',
            '{{%discussion_topic}}',
            'created_by',
            '{{%user}}',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // Drops foreign key for table `{{%discussion_forum}}`
        $this->dropForeignKey(
            '{{%fk-discussion_topic-forum_id}}',
            '{{%discussion_topic}}'
        );

        // Drops index for column `forum_id`
        $this->dropIndex(
            '{{%idx-discussion_topic-forum_id}}',
            '{{%discussion_topic}}'
        );

        // Drops foreign key for table `{{%user}}`
        $this->dropForeignKey(
            '{{%fk-discussion_topic-created_by}}',
            '{{%discussion_topic}}'
        );

        // Drops index for column `created_by`
        $this->dropIndex(
            '{{%idx-discussion_topic-created_by}}',
            '{{%discussion_topic}}'
        );

        $this->dropTable('{{%discussion_topic}}');
    }
}
```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `discussion_topic` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `discussion_topic` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240708_230139_create_discussion_post_table.php`
Este código define una migración en Yii2 para la creación de la tabla `discussion_post` en la base de datos, que almacena las respuestas o mensajes generados dentro de los temas tratados en los foros de discusión de los cursos. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%discussion_post}}`.
 */
class m240708_230139_create_discussion_post_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%discussion_post}}', [
            'id' => $this->primaryKey(),
            'topic_id' => $this->integer()->notNull(),
            'content' => $this->text(),
            'created_by' => $this->integer()->notNull(),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);

        // Creates index for column `topic_id`
        $this->createIndex(
            '{{%idx-discussion_post-topic_id}}',
            '{{%discussion_post}}',
            'topic_id'
        );

        // Adds foreign key for table `{{%discussion_topic}}`
        $this->addForeignKey(
            '{{%fk-discussion_post-topic_id}}',
            '{{%discussion_post}}',
            'topic_id',
            '{{%discussion_topic}}',
            'id',
            'CASCADE'
        );

        // Creates index for column `created_by`
        $this->createIndex(
            '{{%idx-discussion_post-created_by}}',
            '{{%discussion_post}}',
            'created_by'
        );

        // Adds foreign key for table `{{%user}}`
        $this->addForeignKey(
            '{{%fk-discussion_post-created_by}}',
            '{{%discussion_post}}',
            'created_by',
            '{{%user}}',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // Drops foreign key for table `{{%discussion_topic}}`
        $this->dropForeignKey(
            '{{%fk-discussion_post-topic_id}}',
            '{{%discussion_post}}'
        );

        // Drops index for column `topic_id`
        $this->dropIndex(
            '{{%idx-discussion_post-topic_id}}',
            '{{%discussion_post}}'
        );

        // Drops foreign key for table `{{%user}}`
        $this->dropForeignKey(
            '{{%fk-discussion_post-created_by}}',
            '{{%discussion_post}}'
        );

        // Drops index for column `created_by`
        $this->dropIndex(
            '{{%idx-discussion_post-created_by}}',
            '{{%discussion_post}}'
        );

        $this->dropTable('{{%discussion_post}}');
    }
}
```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `discussion_post` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `discussion_post` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240708_230247_create_grade_item_table.php`
Este código define una migración en Yii2 para la creación de la tabla `grade_item` en la base de datos, que almacena los elementos de evaluación de un curso. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%grade_item}}`.
 */
class m240708_230247_create_grade_item_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%grade_item}}', [
            'id' => $this->primaryKey(),
            'course_id' => $this->integer()->notNull(),
            'title' => $this->string(255)->notNull(),
            'description' => $this->text(),
            'max_grade' => $this->decimal(5, 2)->defaultValue(100),
            'weight' => $this->decimal(5, 2)->defaultValue(1),
            'grade_type' => $this->smallInteger()->notNull()->defaultValue(1),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);

        // Creates index for column `course_id`
        $this->createIndex(
            '{{%idx-grade_item-course_id}}',
            '{{%grade_item}}',
            'course_id'
        );

        // Adds foreign key for table `{{%course}}`
        $this->addForeignKey(
            '{{%fk-grade_item-course_id}}',
            '{{%grade_item}}',
            'course_id',
            '{{%course}}',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // Drops foreign key for table `{{%course}}`
        $this->dropForeignKey(
            '{{%fk-grade_item-course_id}}',
            '{{%grade_item}}'
        );

        // Drops index for column `course_id`
        $this->dropIndex(
            '{{%idx-grade_item-course_id}}',
            '{{%grade_item}}'
        );

        $this->dropTable('{{%grade_item}}');
    }
}

```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `grade_item` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `grade_item` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240708_230434_create_gradebook_table.php`
Este código define una migración en Yii2 para la creación de la tabla `gradebook` en la base de datos, que almacena las calificaciones de los estudiantes en distintos ítems de evaluación dentro de un curso. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%gradebook}}`.
 */
class m240708_230434_create_gradebook_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%gradebook}}', [
            'id' => $this->primaryKey(),
            'course_id' => $this->integer()->notNull(),
            'user_id' => $this->integer()->notNull(),
            'item_id' => $this->integer()->notNull(),
            'grade' => $this->decimal(5, 2)->defaultValue(0),
            'comments' => $this->text(),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);

        // Creates index for column `course_id`
        $this->createIndex(
            '{{%idx-gradebook-course_id}}',
            '{{%gradebook}}',
            'course_id'
        );

        // Adds foreign key for table `{{%course}}`
        $this->addForeignKey(
            '{{%fk-gradebook-course_id}}',
            '{{%gradebook}}',
            'course_id',
            '{{%course}}',
            'id',
            'CASCADE'
        );

        // Creates index for column `user_id`
        $this->createIndex(
            '{{%idx-gradebook-user_id}}',
            '{{%gradebook}}',
            'user_id'
        );

        // Adds foreign key for table `{{%user}}`
        $this->addForeignKey(
            '{{%fk-gradebook-user_id}}',
            '{{%gradebook}}',
            'user_id',
            '{{%user}}',
            'id',
            'CASCADE'
        );

        // Creates index for column `item_id`
        $this->createIndex(
            '{{%idx-gradebook-item_id}}',
            '{{%gradebook}}',
            'item_id'
        );

        // Adds foreign key for table `{{%grade_item}}`
        $this->addForeignKey(
            '{{%fk-gradebook-item_id}}',
            '{{%gradebook}}',
            'item_id',
            '{{%grade_item}}',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // Drops foreign key for table `{{%course}}`
        $this->dropForeignKey(
            '{{%fk-gradebook-course_id}}',
            '{{%gradebook}}'
        );

        // Drops index for column `course_id`
        $this->dropIndex(
            '{{%idx-gradebook-course_id}}',
            '{{%gradebook}}'
        );

        // Drops foreign key for table `{{%user}}`
        $this->dropForeignKey(
            '{{%fk-gradebook-user_id}}',
            '{{%gradebook}}'
        );

        // Drops index for column `user_id`
        $this->dropIndex(
            '{{%idx-gradebook-user_id}}',
            '{{%gradebook}}'
        );

        // Drops index for column `item_id`
        $this->dropIndex(
            '{{%idx-gradebook-item_id}}',
            '{{%gradebook}}'
        );

        // Drops the table `{{%gradebook}}`
        $this->dropTable('{{%gradebook}}');
    }
}

```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `gradebook` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `gradebook` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240708_230520_create_grade_table.php`
Este código define una migración en Yii2 para la creación de la tabla `grade` en la base de datos, que almacena las calificaciones de los usuarios en diferentes ítems de evaluación. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%grade}}`.
 */
class m240708_230520_create_grade_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%grade}}', [
            'id' => $this->primaryKey(),
            'grade_item_id' => $this->integer()->notNull(),
            'user_id' => $this->integer()->notNull(),
            'grade' => $this->decimal(5, 2)->notNull()->defaultValue(0),
            'comments' => $this->text(),
            'graded_by' => $this->integer(),
            'graded_at' => $this->integer(),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);

        // Creates index for column `grade_item_id`
        $this->createIndex(
            '{{%idx-grade-grade_item_id}}',
            '{{%grade}}',
            'grade_item_id'
        );

        // Adds foreign key for table `{{%grade_item}}`
        $this->addForeignKey(
            '{{%fk-grade-grade_item_id}}',
            '{{%grade}}',
            'grade_item_id',
            '{{%grade_item}}',
            'id',
            'CASCADE'
        );

        // Creates index for column `user_id`
        $this->createIndex(
            '{{%idx-grade-user_id}}',
            '{{%grade}}',
            'user_id'
        );

        // Adds foreign key for table `{{%user}}`
        $this->addForeignKey(
            '{{%fk-grade-user_id}}',
            '{{%grade}}',
            'user_id',
            '{{%user}}',
            'id',
            'CASCADE'
        );

        // Creates index for column `graded_by`
        $this->createIndex(
            '{{%idx-grade-graded_by}}',
            '{{%grade}}',
            'graded_by'
        );

        // Adds foreign key for table `{{%user}}` (assuming it's the same as the user table)
        $this->addForeignKey(
            '{{%fk-grade-graded_by}}',
            '{{%grade}}',
            'graded_by',
            '{{%user}}',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // Drops foreign key for table `{{%grade_item}}`
        $this->dropForeignKey(
            '{{%fk-grade-grade_item_id}}',
            '{{%grade}}'
        );

        // Drops index for column `grade_item_id`
        $this->dropIndex(
            '{{%idx-grade-grade_item_id}}',
            '{{%grade}}'
        );

        // Drops foreign key for table `{{%user}}`
        $this->dropForeignKey(
            '{{%fk-grade-user_id}}',
            '{{%grade}}'
        );

        // Drops index for column `user_id`
        $this->dropIndex(
            '{{%idx-grade-user_id}}',
            '{{%grade}}'
        );

        // Drops foreign key for table `{{%user}}`
        $this->dropForeignKey(
            '{{%fk-grade-graded_by}}',
            '{{%grade}}'
        );

        // Drops index for column `graded_by`
        $this->dropIndex(
            '{{%idx-grade-graded_by}}',
            '{{%grade}}'
        );

        $this->dropTable('{{%grade}}');
    }
}

```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `grade` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `grade` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240709_001723_create_enrollment_table.php`
Este código define una migración en Yii2 para la creación de la tabla `enrollment` en la base de datos, que almacena las inscripciones de los usuarios en los cursos. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%enrollment}}`.
 */
class m240709_001723_create_enrollment_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%enrollment}}', [
            'id' => $this->primaryKey(),
            'course_id' => $this->integer()->notNull(),
            'user_id' => $this->integer()->notNull(),
            'enrolled_at' => $this->integer()->notNull(),
            'dropped_at' => $this->integer(),
            'status' => $this->smallInteger()->notNull()->defaultValue(1),
            'role' => $this->smallInteger()->notNull()->defaultValue(1),
        ]);

        // Creates index for column `course_id`
        $this->createIndex(
            '{{%idx-enrollment-course_id}}',
            '{{%enrollment}}',
            'course_id'
        );

        // Adds foreign key for table `{{%course}}`
        $this->addForeignKey(
            '{{%fk-enrollment-course_id}}',
            '{{%enrollment}}',
            'course_id',
            '{{%course}}',
            'id',
            'CASCADE'
        );

        // Creates index for column `user_id`
        $this->createIndex(
            '{{%idx-enrollment-user_id}}',
            '{{%enrollment}}',
            'user_id'
        );

        // Adds foreign key for table `{{%user}}`
        $this->addForeignKey(
            '{{%fk-enrollment-user_id}}',
            '{{%enrollment}}',
            'user_id',
            '{{%user}}',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // Drops foreign key for table `{{%course}}`
        $this->dropForeignKey(
            '{{%fk-enrollment-course_id}}',
            '{{%enrollment}}'
        );

        // Drops index for column `course_id`
        $this->dropIndex(
            '{{%idx-enrollment-course_id}}',
            '{{%enrollment}}'
        );

        // Drops foreign key for table `{{%user}}`
        $this->dropForeignKey(
            '{{%fk-enrollment-user_id}}',
            '{{%enrollment}}'
        );

        // Drops index for column `user_id`
        $this->dropIndex(
            '{{%idx-enrollment-user_id}}',
            '{{%enrollment}}'
        );

        $this->dropTable('{{%enrollment}}');
    }
}

```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `enrollment` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `enrollment` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240709_001851_create_group_table.php`
Este código define una migración en Yii2 para la creación de la tabla `group` en la base de datos, que almacena los grupos creados dentro del sistema. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%group}}`.
 */
class m240709_001851_create_group_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%group}}', [
            'id' => $this->primaryKey(),
            'name' => $this->string(255)->notNull(),
            'description' => $this->text(),
            'created_by' => $this->integer()->notNull(),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);

        // Creates index for column `created_by`
        $this->createIndex(
            '{{%idx-group-created_by}}',
            '{{%group}}',
            'created_by'
        );

        // Adds foreign key for table `{{%user}}`
        $this->addForeignKey(
            '{{%fk-group-created_by}}',
            '{{%group}}',
            'created_by',
            '{{%user}}',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // Drops foreign key for table `{{%user}}`
        $this->dropForeignKey(
            '{{%fk-group-created_by}}',
            '{{%group}}'
        );

        // Drops index for column `created_by`
        $this->dropIndex(
            '{{%idx-group-created_by}}',
            '{{%group}}'
        );

        $this->dropTable('{{%group}}');
    }
}
```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `group` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `group` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240709_001935_create_group_member_table.php`
Este código define una migración en Yii2 para la creación de la tabla `group_member` en la base de datos, que almacena la relación entre usuarios y grupos. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%group_member}}`.
 */
class m240709_001935_create_group_member_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%group_member}}', [
            'id' => $this->primaryKey(),
            'group_id' => $this->integer()->notNull(),
            'user_id' => $this->integer()->notNull(),
            'role' => $this->smallInteger()->notNull()->defaultValue(1),
            'status' => $this->smallInteger()->notNull()->defaultValue(1),
            'joined_at' => $this->integer()->notNull(),
            'left_at' => $this->integer(),
        ]);

        // Creates index for column `group_id`
        $this->createIndex(
            '{{%idx-group_member-group_id}}',
            '{{%group_member}}',
            'group_id'
        );

        // Adds foreign key for table `{{%group}}`
        $this->addForeignKey(
            '{{%fk-group_member-group_id}}',
            '{{%group_member}}',
            'group_id',
            '{{%group}}',
            'id',
            'CASCADE'
        );

        // Creates index for column `user_id`
        $this->createIndex(
            '{{%idx-group_member-user_id}}',
            '{{%group_member}}',
            'user_id'
        );

        // Adds foreign key for table `{{%user}}`
        $this->addForeignKey(
            '{{%fk-group_member-user_id}}',
            '{{%group_member}}',
            'user_id',
            '{{%user}}',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // Drops foreign key for table `{{%group}}`
        $this->dropForeignKey(
            '{{%fk-group_member-group_id}}',
            '{{%group_member}}'
        );

        // Drops index for column `group_id`
        $this->dropIndex(
            '{{%idx-group_member-group_id}}',
            '{{%group_member}}'
        );

        // Drops foreign key for table `{{%user}}`
        $this->dropForeignKey(
            '{{%fk-group_member-user_id}}',
            '{{%group_member}}'
        );

        // Drops index for column `user_id`
        $this->dropIndex(
            '{{%idx-group_member-user_id}}',
            '{{%group_member}}'
        );

        $this->dropTable('{{%group_member}}');
    }
}
```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `group_member` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `group_member` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240709_002042_create_attendance_table.php`
Este código define una migración en Yii2 para la creación de la tabla `attendance` en la base de datos, que almacena las asistencias de los usuarios a los cursos. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%attendance}}`.
 */
class m240709_002042_create_attendance_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%attendance}}', [
            'id' => $this->primaryKey(),
            'course_id' => $this->integer()->notNull(),
            'user_id' => $this->integer()->notNull(),
            'date' => $this->date()->notNull(),
            'status' => $this->smallInteger()->notNull()->defaultValue(1),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);

        // Creates index for column `course_id`
        $this->createIndex(
            '{{%idx-attendance-course_id}}',
            '{{%attendance}}',
            'course_id'
        );

        // Adds foreign key for table `{{%course}}`
        $this->addForeignKey(
            '{{%fk-attendance-course_id}}',
            '{{%attendance}}',
            'course_id',
            '{{%course}}',
            'id',
            'CASCADE'
        );

        // Creates index for column `user_id`
        $this->createIndex(
            '{{%idx-attendance-user_id}}',
            '{{%attendance}}',
            'user_id'
        );

        // Adds foreign key for table `{{%user}}`
        $this->addForeignKey(
            '{{%fk-attendance-user_id}}',
            '{{%attendance}}',
            'user_id',
            '{{%user}}',
            'id',
            'CASCADE'
        );
    }


    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // Drops foreign key for table `{{%course}}`
        $this->dropForeignKey(
            '{{%fk-attendance-course_id}}',
            '{{%attendance}}'
        );

        // Drops index for column `course_id`
        $this->dropIndex(
            '{{%idx-attendance-course_id}}',
            '{{%attendance}}'
        );

        // Drops foreign key for table `{{%user}}`
        $this->dropForeignKey(
            '{{%fk-attendance-user_id}}',
            '{{%attendance}}'
        );

        // Drops index for column `user_id`
        $this->dropIndex(
            '{{%idx-attendance-user_id}}',
            '{{%attendance}}'
        );

        $this->dropTable('{{%attendance}}');
    }
}

```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `attendance` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `attendance` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240709_002144_create_notification_table.php`
Este código define una migración en Yii2 para la creación de la tabla `notification` en la base de datos, que almacena las notificaciones enviadas a los usuarios. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%notification}}`.
 */
class m240709_002144_create_notification_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%notification}}', [
            'id' => $this->primaryKey(),
            'user_id' => $this->integer()->notNull(),
            'type' => $this->smallInteger()->notNull(),
            'content' => $this->text()->notNull(),
            'read_status' => $this->smallInteger()->notNull()->defaultValue(0),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);

        // Creates index for column `user_id`
        $this->createIndex(
            '{{%idx-notification-user_id}}',
            '{{%notification}}',
            'user_id'
        );

        // Adds foreign key for table `{{%user}}`
        $this->addForeignKey(
            '{{%fk-notification-user_id}}',
            '{{%notification}}',
            'user_id',
            '{{%user}}',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // Drops foreign key for table `{{%user}}`
        $this->dropForeignKey(
            '{{%fk-notification-user_id}}',
            '{{%notification}}'
        );

        // Drops index for column `user_id`
        $this->dropIndex(
            '{{%idx-notification-user_id}}',
            '{{%notification}}'
        );

        $this->dropTable('{{%notification}}');
    }
}

```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `notification` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `notification` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240709_003104_create_message_table.php`
Este código define una migración en Yii2 para la creación de la tabla `message` en la base de datos, que almacena los mensajes privados entre usuarios. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%message}}`.
 */
class m240709_003104_create_message_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%message}}', [
            'id' => $this->primaryKey(),
            'from_user_id' => $this->integer()->notNull(),
            'to_user_id' => $this->integer()->notNull(),
            'subject' => $this->string()->notNull(),
            'body' => $this->text()->notNull(),
            'read_status' => $this->smallInteger()->notNull()->defaultValue(0),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);

        // Creates index for column `from_user_id`
        $this->createIndex(
            '{{%idx-message-from_user_id}}',
            '{{%message}}',
            'from_user_id'
        );

        // Adds foreign key for table `{{%user}}` (assuming it's the same as the user table)
        $this->addForeignKey(
            '{{%fk-message-from_user_id}}',
            '{{%message}}',
            'from_user_id',
            '{{%user}}',
            'id',
            'CASCADE'
        );

        // Creates index for column `to_user_id`
        $this->createIndex(
            '{{%idx-message-to_user_id}}',
            '{{%message}}',
            'to_user_id'
        );

        // Adds foreign key for table `{{%user}}` (assuming it's the same as the user table)
        $this->addForeignKey(
            '{{%fk-message-to_user_id}}',
            '{{%message}}',
            'to_user_id',
            '{{%user}}',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // Drops foreign key for column `from_user_id`
        $this->dropForeignKey(
            '{{%fk-message-from_user_id}}',
            '{{%message}}'
        );

        // Drops index for column `from_user_id`
        $this->dropIndex(
            '{{%idx-message-from_user_id}}',
            '{{%message}}'
        );

        // Drops foreign key for column `to_user_id`
        $this->dropForeignKey(
            '{{%fk-message-to_user_id}}',
            '{{%message}}'
        );

        // Drops index for column `to_user_id`
        $this->dropIndex(
            '{{%idx-message-to_user_id}}',
            '{{%message}}'
        );

        $this->dropTable('{{%message}}');
    }
}

```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `message` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `message` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240709_003207_create_message_thread_table.php`
Este código define una migración en Yii2 para la creación de la tabla `message_thread` en la base de datos, que agrupa los mensajes en hilos de conversación. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%message_thread}}`.
 */
class m240709_003207_create_message_thread_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%message_thread}}', [
            'id' => $this->primaryKey(),
            'subject' => $this->string()->notNull(),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);

        // Creates index for column `subject`
        $this->createIndex(
            '{{%idx-message_thread-subject}}',
            '{{%message_thread}}',
            'subject'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // Drops index for column `subject`
        $this->dropIndex(
            '{{%idx-message_thread-subject}}',
            '{{%message_thread}}'
        );

        $this->dropTable('{{%message_thread}}');
    }
}

```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `message_thread` mediante el metodo `safeUp()`.
- Elimina la tabla `message_thread` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240709_004033_create_calendar_event_table.php`
Este código define una migración en Yii2 para la creación de la tabla `calendar_event` en la base de datos, la cual gestionará eventos de calendario con información relevante como fechas, descripción, ubicación y estado de día completo. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%calendar_event}}`.
 */
class m240709_004033_create_calendar_event_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%calendar_event}}', [
            'id' => $this->primaryKey(),
            'title' => $this->string()->notNull(),
            'description' => $this->text(),
            'start_date' => $this->dateTime()->notNull(),
            'end_date' => $this->dateTime(),
            'all_day' => $this->boolean()->defaultValue(false),
            'location' => $this->string(),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);

        // Indexes
        $this->createIndex(
            '{{%idx-calendar_event-start_date}}',
            '{{%calendar_event}}',
            'start_date'
        );

        $this->createIndex(
            '{{%idx-calendar_event-end_date}}',
            '{{%calendar_event}}',
            'end_date'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // Drops indexes
        $this->dropIndex(
            '{{%idx-calendar_event-start_date}}',
            '{{%calendar_event}}'
        );

        $this->dropIndex(
            '{{%idx-calendar_event-end_date}}',
            '{{%calendar_event}}'
        );

        $this->dropTable('{{%calendar_event}}');
    }
}

```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `calendar_event` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `calendar_event` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240709_004132_create_file_table.php`
Este código define una migración en Yii2 para la creación de la tabla `file` en la base de datos, que almacena información sobre archivos subidos por los usuarios. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%file}}`.
 */
class m240709_004132_create_file_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%file}}', [
            'id' => $this->primaryKey(),
            'name' => $this->string()->notNull(),
            'path' => $this->string()->notNull(),
            'type' => $this->string(),
            'size' => $this->integer(),
            'uploaded_by' => $this->integer()->notNull(),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);

        // Creates index for column `uploaded_by`
        $this->createIndex(
            '{{%idx-file-uploaded_by}}',
            '{{%file}}',
            'uploaded_by'
        );

        // Adds foreign key for table `{{%user}}`
        $this->addForeignKey(
            '{{%fk-file-uploaded_by}}',
            '{{%file}}',
            'uploaded_by',
            '{{%user}}',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // Drops foreign key for table `{{%user}}`
        $this->dropForeignKey(
            '{{%fk-file-uploaded_by}}',
            '{{%file}}'
        );

        // Drops index for column `uploaded_by`
        $this->dropIndex(
            '{{%idx-file-uploaded_by}}',
            '{{%file}}'
        );

        $this->dropTable('{{%file}}');
    }
}

```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `file` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `file` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240709_004303_create_file_reference_table.php`
Este código define una migración en Yii2 para la creación de la tabla `file_reference` en la base de datos, que permite establecer referencias a archivos almacenados en la tabla file. Esta estructura es útil para asociar archivos con diferentes modelos en la base de datos. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%file_reference}}`.
 */
class m240709_004303_create_file_reference_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%file_reference}}', [
            'id' => $this->primaryKey(),
            'file_id' => $this->integer()->notNull(),
            'model' => $this->string()->notNull(),
            'model_id' => $this->integer()->notNull(),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);

        // Creates index for column `file_id`
        $this->createIndex(
            '{{%idx-file_reference-file_id}}',
            '{{%file_reference}}',
            'file_id'
        );

        // Adds foreign key for table `{{%file}}`
        $this->addForeignKey(
            '{{%fk-file_reference-file_id}}',
            '{{%file_reference}}',
            'file_id',
            '{{%file}}',
            'id',
            'CASCADE'
        );

        // Creates composite index for columns `model` and `model_id`
        $this->createIndex(
            '{{%idx-file_reference-model-model_id}}',
            '{{%file_reference}}',
            ['model', 'model_id']
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // Drops foreign key for table `{{%file}}`
        $this->dropForeignKey(
            '{{%fk-file_reference-file_id}}',
            '{{%file_reference}}'
        );

        // Drops index for column `file_id`
        $this->dropIndex(
            '{{%idx-file_reference-file_id}}',
            '{{%file_reference}}'
        );

        // Drops composite index for columns `model` and `model_id`
        $this->dropIndex(
            '{{%idx-file_reference-model-model_id}}',
            '{{%file_reference}}'
        );

        $this->dropTable('{{%file_reference}}');
    }
}

```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `file_reference` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `file_reference` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240709_004415_create_feedback_table.php`
Este código define una migración en Yii2 para la creación de la tabla `feedback` en la base de datos, que almacena comentarios o sugerencias de los usuarios. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%feedback}}`.
 */
class m240709_004415_create_feedback_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%feedback}}', [
            'id' => $this->primaryKey(),
            'user_id' => $this->integer()->notNull(),
            'type' => $this->smallInteger()->notNull(),
            'content' => $this->text()->notNull(),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);

        // Creates index for column `user_id`
        $this->createIndex(
            '{{%idx-feedback-user_id}}',
            '{{%feedback}}',
            'user_id'
        );

        // Adds foreign key for table `{{%user}}`
        $this->addForeignKey(
            '{{%fk-feedback-user_id}}',
            '{{%feedback}}',
            'user_id',
            '{{%user}}',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // Drops foreign key for table `{{%user}}`
        $this->dropForeignKey(
            '{{%fk-feedback-user_id}}',
            '{{%feedback}}'
        );

        // Drops index for column `user_id`
        $this->dropIndex(
            '{{%idx-feedback-user_id}}',
            '{{%feedback}}'
        );

        $this->dropTable('{{%feedback}}');
    }
}

```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `feedback` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `feedback` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240709_004503_create_feedback_response_table.php`
Este código define una migración en Yii2 para la creación de la tabla `feedback_response` en la base de datos, la cual permite almacenar respuestas a los feedbacks enviados por los usuarios. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%feedback_response}}`.
 */
class m240709_004503_create_feedback_response_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%feedback_response}}', [
            'id' => $this->primaryKey(),
            'feedback_id' => $this->integer()->notNull(),
            'user_id' => $this->integer()->notNull(),
            'response' => $this->text()->notNull(),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);

        // Creates index for column `feedback_id`
        $this->createIndex(
            '{{%idx-feedback_response-feedback_id}}',
            '{{%feedback_response}}',
            'feedback_id'
        );

        // Adds foreign key for table `{{%feedback}}`
        $this->addForeignKey(
            '{{%fk-feedback_response-feedback_id}}',
            '{{%feedback_response}}',
            'feedback_id',
            '{{%feedback}}',
            'id',
            'CASCADE'
        );

        // Creates index for column `user_id`
        $this->createIndex(
            '{{%idx-feedback_response-user_id}}',
            '{{%feedback_response}}',
            'user_id'
        );

        // Adds foreign key for table `{{%user}}`
        $this->addForeignKey(
            '{{%fk-feedback_response-user_id}}',
            '{{%feedback_response}}',
            'user_id',
            '{{%user}}',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // Drops foreign key for table `{{%feedback}}`
        $this->dropForeignKey(
            '{{%fk-feedback_response-feedback_id}}',
            '{{%feedback_response}}'
        );

        // Drops index for column `feedback_id`
        $this->dropIndex(
            '{{%idx-feedback_response-feedback_id}}',
            '{{%feedback_response}}'
        );

        // Drops foreign key for table `{{%user}}`
        $this->dropForeignKey(
            '{{%fk-feedback_response-user_id}}',
            '{{%feedback_response}}'
        );

        // Drops index for column `user_id`
        $this->dropIndex(
            '{{%idx-feedback_response-user_id}}',
            '{{%feedback_response}}'
        );

        $this->dropTable('{{%feedback_response}}');
    }
}

```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `feedback_response` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `feedback_response` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240709_005156_create_badge_table.php`
Este código define una migración en Yii2 para la creación de la tabla `badge` en la base de datos, la cual almacena información sobre insignias otorgadas a los usuarios. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%badge}}`.
 */
class m240709_005156_create_badge_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%badge}}', [
            'id' => $this->primaryKey(),
            'name' => $this->string()->notNull(),
            'description' => $this->text(),
            'icon' => $this->string(),
            'criteria' => $this->text()->notNull(),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%badge}}');
    }
}

```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `badge` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `badge` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240709_005245_create_badge_award_table.php`
Este código define una migración en Yii2 para la creación de la tabla `badge_award` en la base de datos, que asigna insignias (`badge`) a usuarios (`user`). A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%badge_award}}`.
 */
class m240709_005245_create_badge_award_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%badge_award}}', [
            'id' => $this->primaryKey(),
            'badge_id' => $this->integer()->notNull(),
            'user_id' => $this->integer()->notNull(),
            'awarded_at' => $this->integer()->notNull(),
        ]);

        // Creates index for column `badge_id`
        $this->createIndex(
            '{{%idx-badge_award-badge_id}}',
            '{{%badge_award}}',
            'badge_id'
        );

        // Adds foreign key for table `{{%badge}}`
        $this->addForeignKey(
            '{{%fk-badge_award-badge_id}}',
            '{{%badge_award}}',
            'badge_id',
            '{{%badge}}',
            'id',
            'CASCADE'
        );

        // Creates index for column `user_id`
        $this->createIndex(
            '{{%idx-badge_award-user_id}}',
            '{{%badge_award}}',
            'user_id'
        );

        // Adds foreign key for table `{{%user}}`
        $this->addForeignKey(
            '{{%fk-badge_award-user_id}}',
            '{{%badge_award}}',
            'user_id',
            '{{%user}}',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // Drops foreign key for table `{{%badge}}`
        $this->dropForeignKey(
            '{{%fk-badge_award-badge_id}}',
            '{{%badge_award}}'
        );

        // Drops index for column `badge_id`
        $this->dropIndex(
            '{{%idx-badge_award-badge_id}}',
            '{{%badge_award}}'
        );

        // Drops foreign key for table `{{%user}}`
        $this->dropForeignKey(
            '{{%fk-badge_award-user_id}}',
            '{{%badge_award}}'
        );

        // Drops index for column `user_id`
        $this->dropIndex(
            '{{%idx-badge_award-user_id}}',
            '{{%badge_award}}'
        );

        $this->dropTable('{{%badge_award}}');
    }
}

```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `badge_award` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `badge_award` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240709_005346_create_certificate_table.php`
Este código define una migración en Yii2 para la creación de la tabla `certificate` en la base de datos, que registra los certificados otorgados a los usuarios tras completar un curso. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%certificate}}`.
 */
class m240709_005346_create_certificate_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%certificate}}', [
            'id' => $this->primaryKey(),
            'user_id' => $this->integer()->notNull(),
            'course_id' => $this->integer()->notNull(),
            'issued_at' => $this->integer()->notNull(),
            'file_id' => $this->integer()->notNull(),
        ]);

        // Creates index for column `user_id`
        $this->createIndex(
            '{{%idx-certificate-user_id}}',
            '{{%certificate}}',
            'user_id'
        );

        // Adds foreign key for table `{{%user}}`
        $this->addForeignKey(
            '{{%fk-certificate-user_id}}',
            '{{%certificate}}',
            'user_id',
            '{{%user}}',
            'id',
            'CASCADE'
        );

        // Creates index for column `course_id`
        $this->createIndex(
            '{{%idx-certificate-course_id}}',
            '{{%certificate}}',
            'course_id'
        );

        // Adds foreign key for table `{{%course}}`
        $this->addForeignKey(
            '{{%fk-certificate-course_id}}',
            '{{%certificate}}',
            'course_id',
            '{{%course}}',
            'id',
            'CASCADE'
        );

        // Creates index for column `file_id`
        $this->createIndex(
            '{{%idx-certificate-file_id}}',
            '{{%certificate}}',
            'file_id'
        );

        // Adds foreign key for table `{{%file}}`
        $this->addForeignKey(
            '{{%fk-certificate-file_id}}',
            '{{%certificate}}',
            'file_id',
            '{{%file}}',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // Drops foreign key for table `{{%user}}`
        $this->dropForeignKey(
            '{{%fk-certificate-user_id}}',
            '{{%certificate}}'
        );

        // Drops index for column `user_id`
        $this->dropIndex(
            '{{%idx-certificate-user_id}}',
            '{{%certificate}}'
        );

        // Drops foreign key for table `{{%course}}`
        $this->dropForeignKey(
            '{{%fk-certificate-course_id}}',
            '{{%certificate}}'
        );

        // Drops index for column `course_id`
        $this->dropIndex(
            '{{%idx-certificate-course_id}}',
            '{{%certificate}}'
        );

        // Drops foreign key for table `{{%file}}`
        $this->dropForeignKey(
            '{{%fk-certificate-file_id}}',
            '{{%certificate}}'
        );

        // Drops index for column `file_id`
        $this->dropIndex(
            '{{%idx-certificate-file_id}}',
            '{{%certificate}}'
        );

        $this->dropTable('{{%certificate}}');
    }
}

```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `certificate` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `certificate` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240709_005440_create_payment_table.php`
Este código define una migración en Yii2 para la creación de la tabla `payment` en la base de datos, que almacena los pagos realizados por los usuarios. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%payment}}`.
 */
class m240709_005440_create_payment_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%payment}}', [
            'id' => $this->primaryKey(),
            'user_id' => $this->integer()->notNull(),
            'amount' => $this->decimal(10, 2)->notNull(),
            'payment_date' => $this->integer()->notNull(),
            'status' => $this->smallInteger()->notNull()->defaultValue(0),
            'method' => $this->string()->notNull(),
            'transaction_id' => $this->string(),
            'description' => $this->text(),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);

        // Creates index for column `user_id`
        $this->createIndex(
            '{{%idx-payment-user_id}}',
            '{{%payment}}',
            'user_id'
        );

        // Adds foreign key for table `{{%user}}`
        $this->addForeignKey(
            '{{%fk-payment-user_id}}',
            '{{%payment}}',
            'user_id',
            '{{%user}}',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // Drops foreign key for table `{{%user}}`
        $this->dropForeignKey(
            '{{%fk-payment-user_id}}',
            '{{%payment}}'
        );

        // Drops index for column `user_id`
        $this->dropIndex(
            '{{%idx-payment-user_id}}',
            '{{%payment}}'
        );

        $this->dropTable('{{%payment}}');
    }
}

```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `payment` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `payment` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240709_005485_create_plan_table.php`
Este código define una migración en Yii2 para la creación de la tabla `plan` en la base de datos, que almacena planes de suscripción o membresía. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%plan}}`.
 */
class m240709_005485_create_plan_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%plan}}', [
            'id' => $this->primaryKey(),
            'name' => $this->string()->notNull(),
            'description' => $this->text(),
            'price' => $this->decimal(10, 2)->notNull(),
            'duration' => $this->integer()->notNull(),
            'status' => $this->smallInteger()->notNull()->defaultValue(0),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%plan}}');
    }
}

```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `plan` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `plan` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240709_005607_create_subscription_table.php`
Este código define una migración en Yii2 para la creación de la tabla `subscription` en la base de datos, que relaciona usuarios (`user_id`) con planes (`plan_id`) y pagos (`payment_id`), permitiendo gestionar suscripciones. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%subscription}}`.
 */
class m240709_005607_create_subscription_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%subscription}}', [
            'id' => $this->primaryKey(),
            'user_id' => $this->integer()->notNull(),
            'plan_id' => $this->integer()->notNull(),
            'status' => $this->smallInteger()->notNull()->defaultValue(0),
            'start_date' => $this->integer()->notNull(),
            'end_date' => $this->integer()->notNull(),
            'payment_id' => $this->integer(),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);

        // Creates index for column `user_id`
        $this->createIndex(
            '{{%idx-subscription-user_id}}',
            '{{%subscription}}',
            'user_id'
        );

        // Adds foreign key for table `{{%user}}`
        $this->addForeignKey(
            '{{%fk-subscription-user_id}}',
            '{{%subscription}}',
            'user_id',
            '{{%user}}',
            'id',
            'CASCADE'
        );

        // Creates index for column `plan_id`
        $this->createIndex(
            '{{%idx-subscription-plan_id}}',
            '{{%subscription}}',
            'plan_id'
        );

        // Adds foreign key for table `{{%plan}}`
        $this->addForeignKey(
            '{{%fk-subscription-plan_id}}',
            '{{%subscription}}',
            'plan_id',
            '{{%plan}}',
            'id',
            'CASCADE'
        );

        // Creates index for column `payment_id`
        $this->createIndex(
            '{{%idx-subscription-payment_id}}',
            '{{%subscription}}',
            'payment_id'
        );

        // Adds foreign key for table `{{%payment}}`
        $this->addForeignKey(
            '{{%fk-subscription-payment_id}}',
            '{{%subscription}}',
            'payment_id',
            '{{%payment}}',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // Drops foreign key for table `{{%user}}`
        $this->dropForeignKey(
            '{{%fk-subscription-user_id}}',
            '{{%subscription}}'
        );

        // Drops index for column `user_id`
        $this->dropIndex(
            '{{%idx-subscription-user_id}}',
            '{{%subscription}}'
        );

        // Drops foreign key for table `{{%plan}}`
        $this->dropForeignKey(
            '{{%fk-subscription-plan_id}}',
            '{{%subscription}}'
        );

        // Drops index for column `plan_id`
        $this->dropIndex(
            '{{%idx-subscription-plan_id}}',
            '{{%subscription}}'
        );

        // Drops foreign key for table `{{%payment}}`
        $this->dropForeignKey(
            '{{%fk-subscription-payment_id}}',
            '{{%subscription}}'
        );

        // Drops index for column `payment_id`
        $this->dropIndex(
            '{{%idx-subscription-payment_id}}',
            '{{%subscription}}'
        );

        $this->dropTable('{{%subscription}}');
    }
}

```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `subscription` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `subscription` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240709_005720_create_announcement_table.php`
Este código define una migración en Yii2 para la creación de la tabla `announcement` en la base de datos, que almacena anuncios en el sistema. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%announcement}}`.
 */
class m240709_005720_create_announcement_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%announcement}}', [
            'id' => $this->primaryKey(),
            'title' => $this->string()->notNull(),
            'content' => $this->text()->notNull(),
            'type' => $this->smallInteger()->notNull()->defaultValue(0),
            'status' => $this->smallInteger()->notNull()->defaultValue(0),
            'created_by' => $this->integer()->notNull(),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);

        // Creates index for column `created_by`
        $this->createIndex(
            '{{%idx-announcement-created_by}}',
            '{{%announcement}}',
            'created_by'
        );

        // Adds foreign key for table `{{%user}}`
        $this->addForeignKey(
            '{{%fk-announcement-created_by}}',
            '{{%announcement}}',
            'created_by',
            '{{%user}}',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // Drops foreign key for table `{{%user}}`
        $this->dropForeignKey(
            '{{%fk-announcement-created_by}}',
            '{{%announcement}}'
        );

        // Drops index for column `created_by`
        $this->dropIndex(
            '{{%idx-announcement-created_by}}',
            '{{%announcement}}'
        );

        $this->dropTable('{{%announcement}}');
    }
}

```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `announcement` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `announcement` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240709_005833_create_course_feedback_table.php`
Este código define una migración en Yii2 para la creación de la tabla `course_feedback` en la base de datos, que almacena la retroalimentación de los usuarios sobre los cursos. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%course_feedback}}`.
 */
class m240709_005833_create_course_feedback_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%course_feedback}}', [
            'id' => $this->primaryKey(),
            'course_id' => $this->integer()->notNull(),
            'user_id' => $this->integer()->notNull(),
            'rating' => $this->integer()->notNull(),
            'feedback' => $this->text(),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);

        // Creates index for column `course_id`
        $this->createIndex(
            '{{%idx-course_feedback-course_id}}',
            '{{%course_feedback}}',
            'course_id'
        );

        // Adds foreign key for table `{{%course}}`
        $this->addForeignKey(
            '{{%fk-course_feedback-course_id}}',
            '{{%course_feedback}}',
            'course_id',
            '{{%course}}',
            'id',
            'CASCADE'
        );

        // Creates index for column `user_id`
        $this->createIndex(
            '{{%idx-course_feedback-user_id}}',
            '{{%course_feedback}}',
            'user_id'
        );

        // Adds foreign key for table `{{%user}}`
        $this->addForeignKey(
            '{{%fk-course_feedback-user_id}}',
            '{{%course_feedback}}',
            'user_id',
            '{{%user}}',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // Drops foreign key for table `{{%course}}`
        $this->dropForeignKey(
            '{{%fk-course_feedback-course_id}}',
            '{{%course_feedback}}'
        );

        // Drops index for column `course_id`
        $this->dropIndex(
            '{{%idx-course_feedback-course_id}}',
            '{{%course_feedback}}'
        );

        // Drops foreign key for table `{{%user}}`
        $this->dropForeignKey(
            '{{%fk-course_feedback-user_id}}',
            '{{%course_feedback}}'
        );

        // Drops index for column `user_id`
        $this->dropIndex(
            '{{%idx-course_feedback-user_id}}',
            '{{%course_feedback}}'
        );

        $this->dropTable('{{%course_feedback}}');
    }
}

```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `course_feedback` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `course_feedback` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240709_005927_create_course_rating_table.php`
Este código define una migración en Yii2 para la creación de la tabla `course_rating` en la base de datos, que almacena la calificación de los usuarios sobre los cursos. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%course_rating}}`.
 */
class m240709_005927_create_course_rating_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%course_rating}}', [
            'id' => $this->primaryKey(),
            'course_id' => $this->integer()->notNull(),
            'user_id' => $this->integer()->notNull(),
            'rating' => $this->integer()->notNull(),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);

        // Creates index for column `course_id`
        $this->createIndex(
            '{{%idx-course_rating-course_id}}',
            '{{%course_rating}}',
            'course_id'
        );

        // Adds foreign key for table `{{%course}}`
        $this->addForeignKey(
            '{{%fk-course_rating-course_id}}',
            '{{%course_rating}}',
            'course_id',
            '{{%course}}',
            'id',
            'CASCADE'
        );

        // Creates index for column `user_id`
        $this->createIndex(
            '{{%idx-course_rating-user_id}}',
            '{{%course_rating}}',
            'user_id'
        );

        // Adds foreign key for table `{{%user}}`
        $this->addForeignKey(
            '{{%fk-course_rating-user_id}}',
            '{{%course_rating}}',
            'user_id',
            '{{%user}}',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // Drops foreign key for table `{{%course}}`
        $this->dropForeignKey(
            '{{%fk-course_rating-course_id}}',
            '{{%course_rating}}'
        );

        // Drops index for column `course_id`
        $this->dropIndex(
            '{{%idx-course_rating-course_id}}',
            '{{%course_rating}}'
        );

        // Drops foreign key for table `{{%user}}`
        $this->dropForeignKey(
            '{{%fk-course_rating-user_id}}',
            '{{%course_rating}}'
        );

        // Drops index for column `user_id`
        $this->dropIndex(
            '{{%idx-course_rating-user_id}}',
            '{{%course_rating}}'
        );

        $this->dropTable('{{%course_rating}}');
    }
}

```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `course_rating` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `course_rating` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240709_010032_create_user_activity_log_table.php`
Este código define una migración en Yii2 para la creación de la tabla `user_activity_log` en la base de datos, que almacena los registros de la actividad de los usuarios, útil para auditoría y monitoreo del sistema. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%user_activity_log}}`.
 */
class m240709_010032_create_user_activity_log_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%user_activity_log}}', [
            'id' => $this->primaryKey(),
            'user_id' => $this->integer()->notNull(),
            'action' => $this->string()->notNull(),
            'description' => $this->text(),
            'created_at' => $this->integer()->notNull(),
        ]);

        // Creates index for column `user_id`
        $this->createIndex(
            '{{%idx-user_activity_log-user_id}}',
            '{{%user_activity_log}}',
            'user_id'
        );

        // Adds foreign key for table `{{%user}}`
        $this->addForeignKey(
            '{{%fk-user_activity_log-user_id}}',
            '{{%user_activity_log}}',
            'user_id',
            '{{%user}}',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // Drops foreign key for table `{{%user}}`
        $this->dropForeignKey(
            '{{%fk-user_activity_log-user_id}}',
            '{{%user_activity_log}}'
        );

        // Drops index for column `user_id`
        $this->dropIndex(
            '{{%idx-user_activity_log-user_id}}',
            '{{%user_activity_log}}'
        );

        $this->dropTable('{{%user_activity_log}}');
    }
}

```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `user_activity_log` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `user_activity_log` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240709_010125_create_system_setting_table.php`
Este código define una migración en Yii2 para la creación de la tabla `system_setting` en la base de datos, que almacena configuraciones del sistema de forma dinámica, permitiendo ajustes sin modificar el código. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%system_setting}}`.
 */
class m240709_010125_create_system_setting_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%system_setting}}', [
            'id' => $this->primaryKey(),
            'key' => $this->string()->notNull()->unique(),
            'value' => $this->text()->notNull(),
            'description' => $this->text(),
            'type' => $this->string()->notNull()->defaultValue('string'),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%system_setting}}');
    }
}

```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `system_setting` mediante el metodo `safeUp()`.
- Elimina la tabla `system_setting` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240709_011117_create_theme_table.php`
Este código define una migración en Yii2 para la creación de la tabla `theme` en la base de datos, que almacena información sobre los temas disponibles en el sistema, permitiendo personalización de la interfaz. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%theme}}`.
 */
class m240709_011117_create_theme_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%theme}}', [
            'id' => $this->primaryKey(),
            'name' => $this->string()->notNull(),
            'description' => $this->text(),
            'preview_image' => $this->string(),
            'status' => $this->smallInteger()->notNull()->defaultValue(0),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%theme}}');
    }
}

```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `theme` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `theme` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240709_011125_create_plugin_table.php`
Este código define una migración en Yii2 para la creación de la tabla `plugin` en la base de datos, que almacena información sobre los plugins instalados en el sistema, permitiendo su gestión. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%plugin}}`.
 */
class m240709_011125_create_plugin_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%plugin}}', [
            'id' => $this->primaryKey(),
            'name' => $this->string()->notNull(),
            'description' => $this->text(),
            'status' => $this->smallInteger()->notNull()->defaultValue(0),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%plugin}}');
    }
}

```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `plugin` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `plugin` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240709_011135_create_integration_table.php`
Este código define una migración en Yii2 para la creación de la tabla `integration` en la base de datos, que gestiona integraciones externas en el sistema, almacenando credenciales de autenticación y su estado. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%integration}}`.
 */
class m240709_011135_create_integration_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%integration}}', [
            'id' => $this->primaryKey(),
            'name' => $this->string()->notNull(),
            'description' => $this->text(),
            'api_key' => $this->string(),
            'api_secret' => $this->string(),
            'status' => $this->smallInteger()->notNull()->defaultValue(0),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%integration}}');
    }
}

```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `integration` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `integration` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240709_011143_create_report_table.php`
Este código define una migración en Yii2 para la creación de la tabla `report` en la base de datos, que almacena informes o reportes generados por los usuarios dentro del sistema. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%report}}`.
 */
class m240709_011143_create_report_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%report}}', [
            'id' => $this->primaryKey(),
            'user_id' => $this->integer()->notNull(),
            'type' => $this->string()->notNull(),
            'description' => $this->text(),
            'status' => $this->smallInteger()->notNull()->defaultValue(0),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ]);

        // Creates index for column `user_id`
        $this->createIndex(
            '{{%idx-report-user_id}}',
            '{{%report}}',
            'user_id'
        );

        // Adds foreign key for table `{{%user}}`
        $this->addForeignKey(
            '{{%fk-report-user_id}}',
            '{{%report}}',
            'user_id',
            '{{%user}}',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // Drops foreign key for table `{{%user}}`
        $this->dropForeignKey(
            '{{%fk-report-user_id}}',
            '{{%report}}'
        );

        // Drops index for column `user_id`
        $this->dropIndex(
            '{{%idx-report-user_id}}',
            '{{%report}}'
        );

        $this->dropTable('{{%report}}');
    }
}

```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `report` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `report` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240709_011152_create_audit_log_table.php`
Este código define una migración en Yii2 para la creación de la tabla `audit_log` en la base de datos, que almacena registros de auditoría para rastrear cambios en los modelos del sistema. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%audit_log}}`.
 */
class m240709_011152_create_audit_log_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%audit_log}}', [
            'id' => $this->primaryKey(),
            'user_id' => $this->integer(),
            'action' => $this->string()->notNull(),
            'model' => $this->string()->notNull(),
            'model_id' => $this->integer()->notNull(),
            'field' => $this->string(),
            'from_value' => $this->text(),
            'to_value' => $this->text(),
            'created_at' => $this->integer()->notNull(),
        ]);

        // Creates index for column `user_id`
        $this->createIndex(
            '{{%idx-audit_log-user_id}}',
            '{{%audit_log}}',
            'user_id'
        );

        // Adds foreign key for table `{{%user}}`
        $this->addForeignKey(
            '{{%fk-audit_log-user_id}}',
            '{{%audit_log}}',
            'user_id',
            '{{%user}}',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // Drops foreign key for table `{{%user}}`
        $this->dropForeignKey(
            '{{%fk-audit_log-user_id}}',
            '{{%audit_log}}'
        );

        // Drops index for column `user_id`
        $this->dropIndex(
            '{{%idx-audit_log-user_id}}',
            '{{%audit_log}}'
        );

        $this->dropTable('{{%audit_log}}');
    }
}

```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `audit_log` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `audit_log` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240830_200017_create_survey_table.php`
Este código define una migración en Yii2 para la creación de la tabla `survey` en la base de datos, que almacena encuestas con un sistema de puntuación, estado y referencia al usuario creador. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%surveys}}`.
 */
class m240830_200017_create_survey_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%survey}}', [
            'id' => $this->primaryKey(),
            'title' => $this->string(255)->notNull(),
            'description' => $this->text(),
            'total_points' => $this->integer()->defaultValue(0),
            'created_by' => $this->integer()->notNull(),
            'status' => "ENUM('draft', 'published', 'archived') NOT NULL DEFAULT 'draft'",
            'url' => $this->string(255),
            'created_at' => $this->timestamp()->defaultExpression('CURRENT_TIMESTAMP'),
            'updated_at' => $this->timestamp()->defaultExpression('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        ]);

        // creates index for column `created_by`
        $this->createIndex(
            '{{%idx-survey-created_by}}',
            '{{%survey}}',
            'created_by'
        );

        // add foreign key for table `{{%user}}`
        $this->addForeignKey(
            '{{%fk-survey-created_by}}',
            '{{%survey}}',
            'created_by',
            '{{%user}}',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // drops foreign key for table `{{%user}}`
        $this->dropForeignKey(
            '{{%fk-survey-created_by}}',
            '{{%survey}}'
        );

        // drops index for column `created_by`
        $this->dropIndex(
            '{{%idx-survey-created_by}}',
            '{{%survey}}'
        );

        $this->dropTable('{{%survey}}');
    }
}

```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `survey` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `survey` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240830_200141_create_sections_table.php`
Este código define una migración en Yii2 para la creación de la tabla `sections` en la base de datos, que almacena las secciones de una encuesta, vinculadas a la tabla `survey`. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%sections}}`.
 */
class m240830_200141_create_sections_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%sections}}', [
            'id' => $this->primaryKey(),
            'survey_id' => $this->integer()->notNull(),
            'title' => $this->string(255)->notNull(),
            'description' => $this->text(),
            'order' => $this->integer()->notNull(),
            'created_at' => $this->timestamp()->defaultExpression('CURRENT_TIMESTAMP'),
            'updated_at' => $this->timestamp()->defaultExpression('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        ]);

        // creates index for column `survey_id`
        $this->createIndex(
            '{{%idx-sections-survey_id}}',
            '{{%sections}}',
            'survey_id'
        );

        // add foreign key for table `{{%surveys}}`
        $this->addForeignKey(
            '{{%fk-sections-survey_id}}',
            '{{%sections}}',
            'survey_id',
            '{{%surveys}}',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // drops foreign key for table `{{%surveys}}`
        $this->dropForeignKey(
            '{{%fk-sections-survey_id}}',
            '{{%sections}}'
        );

        // drops index for column `survey_id`
        $this->dropIndex(
            '{{%idx-sections-survey_id}}',
            '{{%sections}}'
        );

        $this->dropTable('{{%sections}}');
    }
}

```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `sections` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `sections` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240830_200301_create_questions_table.php`
Este código define una migración en Yii2 para la creación de la tabla `questions` en la base de datos, que almacena preguntas asociadas a secciones dentro de una encuesta. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%questions}}`.
 */
class m240830_200301_create_questions_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%questions}}', [
            'id' => $this->primaryKey(),
            'section_id' => $this->integer()->notNull(),
            'question_text' => $this->text()->notNull(),
            'question_type' => "ENUM('text', 'multiple_choice', 'checkbox', 'true_false', 'open') NOT NULL",
            'points' => $this->integer()->defaultValue(0),
            'hint' => $this->text(),
            'explanation' => $this->text(),
            'media_type' => "ENUM('image', 'video', 'none') NOT NULL DEFAULT 'none'",
            'media_url' => $this->string(255),
            'created_at' => $this->timestamp()->defaultExpression('CURRENT_TIMESTAMP'),
            'updated_at' => $this->timestamp()->defaultExpression('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        ]);

        // creates index for column `section_id`
        $this->createIndex(
            '{{%idx-questions-section_id}}',
            '{{%questions}}',
            'section_id'
        );

        // add foreign key for table `{{%sections}}`
        $this->addForeignKey(
            '{{%fk-questions-section_id}}',
            '{{%questions}}',
            'section_id',
            '{{%sections}}',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // drops foreign key for table `{{%sections}}`
        $this->dropForeignKey(
            '{{%fk-questions-section_id}}',
            '{{%questions}}'
        );

        // drops index for column `section_id`
        $this->dropIndex(
            '{{%idx-questions-section_id}}',
            '{{%questions}}'
        );

        $this->dropTable('{{%questions}}');
    }
}

```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `questions` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `questions` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240830_200416_create_options_table.php`
Este código define una migración en Yii2 para la creación de la tabla `options` en la base de datos, que almacena las posibles respuestas para preguntas de tipo selección múltiple, casillas de verificación y preguntas de opción única. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%options}}`.
 */
class m240830_200416_create_options_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%options}}', [
            'id' => $this->primaryKey(),
            'question_id' => $this->integer()->notNull(),
            'option_text' => $this->string(255)->notNull(),
            'is_correct' => $this->boolean()->notNull()->defaultValue(false),
            'weight' => $this->integer()->defaultValue(0),
            'created_at' => $this->timestamp()->defaultExpression('CURRENT_TIMESTAMP'),
            'updated_at' => $this->timestamp()->defaultExpression('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        ]);

        // creates index for column `question_id`
        $this->createIndex(
            '{{%idx-options-question_id}}',
            '{{%options}}',
            'question_id'
        );

        // add foreign key for table `{{%questions}}`
        $this->addForeignKey(
            '{{%fk-options-question_id}}',
            '{{%options}}',
            'question_id',
            '{{%questions}}',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // drops foreign key for table `{{%questions}}`
        $this->dropForeignKey(
            '{{%fk-options-question_id}}',
            '{{%options}}'
        );

        // drops index for column `question_id`
        $this->dropIndex(
            '{{%idx-options-question_id}}',
            '{{%options}}'
        );

        $this->dropTable('{{%options}}');
    }
}
```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `options` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `options` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240830_200527_create_responses_table.php`
Este código define una migración en Yii2 para la creación de la tabla `responses` en la base de datos, que almacena las respuestas de los usuarios a las preguntas de una encuesta. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%responses}}`.
 */
class m240830_200527_create_responses_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%responses}}', [
            'id' => $this->primaryKey(),
            'survey_id' => $this->integer()->notNull(),
            'user_id' => $this->integer()->notNull(),
            'question_id' => $this->integer()->notNull(),
            'option_id' => $this->integer(), // opcional, si aplica
            'response_text' => $this->text(),
            'created_at' => $this->timestamp()->defaultExpression('CURRENT_TIMESTAMP'),
            'updated_at' => $this->timestamp()->defaultExpression('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        ]);

        // creates index for column `survey_id`
        $this->createIndex(
            '{{%idx-responses-survey_id}}',
            '{{%responses}}',
            'survey_id'
        );

        // creates index for column `user_id`
        $this->createIndex(
            '{{%idx-responses-user_id}}',
            '{{%responses}}',
            'user_id'
        );

        // creates index for column `question_id`
        $this->createIndex(
            '{{%idx-responses-question_id}}',
            '{{%responses}}',
            'question_id'
        );

        // creates index for column `option_id`
        $this->createIndex(
            '{{%idx-responses-option_id}}',
            '{{%responses}}',
            'option_id'
        );

        // add foreign key for table `{{%surveys}}`
        $this->addForeignKey(
            '{{%fk-responses-survey_id}}',
            '{{%responses}}',
            'survey_id',
            '{{%surveys}}',
            'id',
            'CASCADE'
        );

        // add foreign key for table `{{%user}}`
        $this->addForeignKey(
            '{{%fk-responses-user_id}}',
            '{{%responses}}',
            'user_id',
            '{{%user}}',
            'id',
            'CASCADE'
        );

        // add foreign key for table `{{%questions}}`
        $this->addForeignKey(
            '{{%fk-responses-question_id}}',
            '{{%responses}}',
            'question_id',
            '{{%questions}}',
            'id',
            'CASCADE'
        );

        // add foreign key for table `{{%options}}` (opcional)
        $this->addForeignKey(
            '{{%fk-responses-option_id}}',
            '{{%responses}}',
            'option_id',
            '{{%options}}',
            'id',
            'SET NULL'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // drops foreign key for table `{{%surveys}}`
        $this->dropForeignKey(
            '{{%fk-responses-survey_id}}',
            '{{%responses}}'
        );

        // drops foreign key for table `{{%user}}`
        $this->dropForeignKey(
            '{{%fk-responses-user_id}}',
            '{{%responses}}'
        );

        // drops foreign key for table `{{%questions}}`
        $this->dropForeignKey(
            '{{%fk-responses-question_id}}',
            '{{%responses}}'
        );

        // drops foreign key for table `{{%options}}` (opcional)
        $this->dropForeignKey(
            '{{%fk-responses-option_id}}',
            '{{%responses}}'
        );

        // drops index for column `survey_id`
        $this->dropIndex(
            '{{%idx-responses-survey_id}}',
            '{{%responses}}'
        );

        // drops index for column `user_id`
        $this->dropIndex(
            '{{%idx-responses-user_id}}',
            '{{%responses}}'
        );

        // drops index for column `question_id`
        $this->dropIndex(
            '{{%idx-responses-question_id}}',
            '{{%responses}}'
        );

        // drops index for column `option_id`
        $this->dropIndex(
            '{{%idx-responses-option_id}}',
            '{{%responses}}'
        );

        $this->dropTable('{{%responses}}');
    }
}

```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `responses` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `responses` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240830_200652_create_answers_table.php`
Este código define una migración en Yii2 para la creación de la tabla `answers` en la base de datos, que almacena las respuestas individuales de los usuarios a preguntas específicas dentro de una respuesta general (`responses`). A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%answers}}`.
 */
class m240830_200652_create_answers_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%answers}}', [
            'id' => $this->primaryKey(),
            'response_id' => $this->integer()->notNull(),
            'question_id' => $this->integer()->notNull(),
            'option_id' => $this->integer(), // opcional, si aplica
            'answer_text' => $this->text(),
            'created_at' => $this->timestamp()->defaultExpression('CURRENT_TIMESTAMP'),
            'updated_at' => $this->timestamp()->defaultExpression('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        ]);

        // creates index for column `response_id`
        $this->createIndex(
            '{{%idx-answers-response_id}}',
            '{{%answers}}',
            'response_id'
        );

        // creates index for column `question_id`
        $this->createIndex(
            '{{%idx-answers-question_id}}',
            '{{%answers}}',
            'question_id'
        );

        // creates index for column `option_id`
        $this->createIndex(
            '{{%idx-answers-option_id}}',
            '{{%answers}}',
            'option_id'
        );

        // add foreign key for table `{{%responses}}`
        $this->addForeignKey(
            '{{%fk-answers-response_id}}',
            '{{%answers}}',
            'response_id',
            '{{%responses}}',
            'id',
            'CASCADE'
        );

        // add foreign key for table `{{%questions}}`
        $this->addForeignKey(
            '{{%fk-answers-question_id}}',
            '{{%answers}}',
            'question_id',
            '{{%questions}}',
            'id',
            'CASCADE'
        );

        // add foreign key for table `{{%options}}` (opcional)
        $this->addForeignKey(
            '{{%fk-answers-option_id}}',
            '{{%answers}}',
            'option_id',
            '{{%options}}',
            'id',
            'SET NULL'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // drops foreign key for table `{{%responses}}`
        $this->dropForeignKey(
            '{{%fk-answers-response_id}}',
            '{{%answers}}'
        );

        // drops foreign key for table `{{%questions}}`
        $this->dropForeignKey(
            '{{%fk-answers-question_id}}',
            '{{%answers}}'
        );

        // drops foreign key for table `{{%options}}` (opcional)
        $this->dropForeignKey(
            '{{%fk-answers-option_id}}',
            '{{%answers}}'
        );

        // drops index for column `response_id`
        $this->dropIndex(
            '{{%idx-answers-response_id}}',
            '{{%answers}}'
        );

        // drops index for column `question_id`
        $this->dropIndex(
            '{{%idx-answers-question_id}}',
            '{{%answers}}'
        );

        // drops index for column `option_id`
        $this->dropIndex(
            '{{%idx-answers-option_id}}',
            '{{%answers}}'
        );

        $this->dropTable('{{%answers}}');
    }
}

```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `answers` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `answers` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240830_200902_create_manual_grades_table.php`
Este código define una migración en Yii2 para la creación de la tabla `manual_grades` en la base de datos, que almacena las calificaciones manuales asignadas por revisores a las respuestas (`answers`). A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%manual_grades}}`.
 */
class m240830_200902_create_manual_grades_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%manual_grades}}', [
            'id' => $this->primaryKey(),
            'answer_id' => $this->integer()->notNull(),
            'reviewer_id' => $this->integer()->notNull(),
            'grade' => $this->integer()->notNull(),
            'comment' => $this->text()->null(),
            'created_at' => $this->timestamp()->defaultExpression('CURRENT_TIMESTAMP'),
            'updated_at' => $this->timestamp()->defaultExpression('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        ]);

        // creates index for column `answer_id`
        $this->createIndex(
            '{{%idx-manual_grades-answer_id}}',
            '{{%manual_grades}}',
            'answer_id'
        );

        // creates index for column `reviewer_id`
        $this->createIndex(
            '{{%idx-manual_grades-reviewer_id}}',
            '{{%manual_grades}}',
            'reviewer_id'
        );

        // add foreign key for table `{{%answers}}`
        $this->addForeignKey(
            '{{%fk-manual_grades-answer_id}}',
            '{{%manual_grades}}',
            'answer_id',
            '{{%answers}}',
            'id',
            'CASCADE'
        );

        // add foreign key for table `{{%user}}`
        $this->addForeignKey(
            '{{%fk-manual_grades-reviewer_id}}',
            '{{%manual_grades}}',
            'reviewer_id',
            '{{%user}}',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // drops foreign key for table `{{%answers}}`
        $this->dropForeignKey(
            '{{%fk-manual_grades-answer_id}}',
            '{{%manual_grades}}'
        );

        // drops foreign key for table `{{%user}}`
        $this->dropForeignKey(
            '{{%fk-manual_grades-reviewer_id}}',
            '{{%manual_grades}}'
        );

        // drops index for column `answer_id`
        $this->dropIndex(
            '{{%idx-manual_grades-answer_id}}',
            '{{%manual_grades}}'
        );

        // drops index for column `reviewer_id`
        $this->dropIndex(
            '{{%idx-manual_grades-reviewer_id}}',
            '{{%manual_grades}}'
        );

        $this->dropTable('{{%manual_grades}}');
    }
}

```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `manual_grades` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `manual_grades` mediante el metodo `safeDown()`si la migración se revierte.


##### `m240830_201148_create_survey_results_table.php`
Este código define una migración en Yii2 para la creación de la tabla `survey_results` en la base de datos, que almacena los resultados de encuestas respondidas por los usuarios. A continuación se muestra el código:<br>

``` php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%survey_results}}`.
 */
class m240830_201148_create_survey_results_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%survey_results}}', [
            'id' => $this->primaryKey(),
            'survey_id' => $this->integer()->notNull(),
            'respondent_id' => $this->integer()->notNull(),
            'total_score' => $this->decimal(5, 2)->notNull(),
            'status' => $this->string()->notNull(),
            'completed_at' => $this->timestamp()->null(),
            'created_at' => $this->timestamp()->defaultExpression('CURRENT_TIMESTAMP'),
            'updated_at' => $this->timestamp()->defaultExpression('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        ]);

        // creates index for column `survey_id`
        $this->createIndex(
            '{{%idx-survey_results-survey_id}}',
            '{{%survey_results}}',
            'survey_id'
        );

        // creates index for column `respondent_id`
        $this->createIndex(
            '{{%idx-survey_results-respondent_id}}',
            '{{%survey_results}}',
            'respondent_id'
        );

        // add foreign key for table `{{%surveys}}`
        $this->addForeignKey(
            '{{%fk-survey_results-survey_id}}',
            '{{%survey_results}}',
            'survey_id',
            '{{%surveys}}',
            'id',
            'CASCADE'
        );

        // add foreign key for table `{{%user}}`
        $this->addForeignKey(
            '{{%fk-survey_results-respondent_id}}',
            '{{%survey_results}}',
            'respondent_id',
            '{{%user}}',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // drops foreign key for table `{{%surveys}}`
        $this->dropForeignKey(
            '{{%fk-survey_results-survey_id}}',
            '{{%survey_results}}'
        );

        // drops foreign key for table `{{%user}}`
        $this->dropForeignKey(
            '{{%fk-survey_results-respondent_id}}',
            '{{%survey_results}}'
        );

        // drops index for column `survey_id`
        $this->dropIndex(
            '{{%idx-survey_results-survey_id}}',
            '{{%survey_results}}'
        );

        // drops index for column `respondent_id`
        $this->dropIndex(
            '{{%idx-survey_results-respondent_id}}',
            '{{%survey_results}}'
        );

        $this->dropTable('{{%survey_results}}');
    }
}

```

- Importa la clase `Migration` de Yii2, que proporciona métodos para modificar la base de datos de manera segura.
- Crea la tabla `survey_results` mediante el metodo `safeUp()`.
- Crea los indices y llaves foráneas.
- Elimina la tabla `survey_results` mediante el metodo `safeDown()`si la migración se revierte.