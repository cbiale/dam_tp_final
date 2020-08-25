##### Autor:  Claudio Omar Biale - 2020

# Introducción

El proyecto corresponde al trabajo final de la asignatura **Desarrollo de Aplicaciones Multiplataforma** de la *Especialización en Internet de las Cosas* dictada en la *Facultad de Ingenieria* de la *Universidad de Buenos Aires*.

El sistema permite:
- controlar la apertura y cierre de la electroválvula de diferentes dispositivos,
- ver las mediciones de cada dispositivo y
- ver el logs de operaciones sobre la electroválvula.


Tabla de contenidos:
=========================
* [Correr la aplicación](#Correr-la-aplicación)  
* [Detener la aplicación](#Detener-la-aplicación)
* [Notas sobre el backend](#notas-sobre-el-backend)
* [Contribuir](#Contribuir)
* [Licencia](#Licencia)



## Correr la aplicación

Para correr la aplicación es necesario descargar el repositorio y luego ejecutar el siguiente comando:

```sh
docker-compose up
```

## Detener la aplicación

Para detener la aplicación es necesario ejecutar el siguiente comando:

```sh
docker-compose down
```

También es posible realizar `Ctrl-C` desde el shell donde se encuentra corriendo el sistema.

## Notas sobre el backend

Para obtener un detalle de los requerimientos y tablas generadas en el backend dirijase al siguiente enlace:
[notas](backend/README.md)

## API

| Método | Punto Final |  Uso | Recibe | Retorna |
| ---- | ---- | ---- | ---- | ---- |
| GET | /devices | Obtiene los dispositivos existentes | Filtro | Dispositivos |
| GET | /devices/{id} | Obtiene datos de un dispositivo |  | Dispositivo |
| POST | /devices | Cambia el estado de un dispositivo | Estado | Estado |

## Contribuir

Para contribuir realizar un pull request con las sugerencias.


## Licencia

GPL
