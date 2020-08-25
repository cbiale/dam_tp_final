# Consideraciones

Para el uso de [Sequelize](https://sequelize.org/) en el proyecto con [Express](https://github.com/expressjs/express#readme) he usado como base al proyecto:
 
* [Basic Sequelize + Express example](https://github.com/sequelize/express-example/tree/master/express-main-example)

## Requerimientos

Tener funcionando **nodejs** con **sequelize** y **mysql2**.

El sistema fue probado en Node 10.19, para controlar su versionado ejecute:

```
$ nodejs -v
```

Para instalar Sequelize y el adaptador MySQL usado para conectarse a MariaDB ejecute:

```
$ npm i sequelize
$ nmp i mysql2
$ nmp i cors 
```

## Tablas generadas

Al usar Sequelize las tablas tienen el siguiente formato:

dispositivos
```
+----------------------------------+--------------+------+-----+---------+----------------+
| Field                            | Type         | Null | Key | Default | Extra          |
+----------------------------------+--------------+------+-----+---------+----------------+
| dispositivo_id                   | int(11)      | NO   | PRI | NULL    | auto_increment |
| nombre                           | varchar(255) | NO   |     | NULL    |                |
| ubicacion                        | varchar(255) | NO   |     | NULL    |                |
| electrovalvula_electrovalvula_id | int(11)      | NO   | MUL | NULL    |                |
+----------------------------------+--------------+------+-----+---------+----------------+
```

electrovalvulas

```
+-------------------+--------------+------+-----+---------+----------------+
| Field             | Type         | Null | Key | Default | Extra          |
+-------------------+--------------+------+-----+---------+----------------+
| electrovalvula_id | int(11)      | NO   | PRI | NULL    | auto_increment |
| nombre            | varchar(255) | NO   |     | NULL    |                |
+-------------------+--------------+------+-----+---------+----------------+
```

mediciones

```
+----------------------------+--------------+------+-----+---------+----------------+
| Field                      | Type         | Null | Key | Default | Extra          |
+----------------------------+--------------+------+-----+---------+----------------+
| medicion_id                | int(11)      | NO   | PRI | NULL    | auto_increment |
| fecha                      | datetime     | NO   |     | NULL    |                |
| valor                      | varchar(255) | NO   |     | NULL    |                |
| dispositivo_dispositivo_id | int(11)      | NO   | MUL | NULL    |                |
+----------------------------+--------------+------+-----+---------+----------------+
```

log_riegos

```
+----------------------------------+----------+------+-----+---------+----------------+
| Field                            | Type     | Null | Key | Default | Extra          |
+----------------------------------+----------+------+-----+---------+----------------+
| log_riego_id                     | int(11)  | NO   | PRI | NULL    | auto_increment |
| apertura                         | int(11)  | NO   |     | NULL    |                |
| fecha                            | datetime | NO   |     | NULL    |                |
| electrovalvula_electrovalvula_id | int(11)  | NO   | MUL | NULL    |                |
+----------------------------------+----------+------+-----+---------+----------------+
```

## Licencia

MIT
