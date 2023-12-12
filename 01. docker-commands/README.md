# Comandos Docker

### 1. `docker version`

Muestra la versión de Docker instalada en tu sistema.

```bash
docker version
```

### 2. `docker info`

Proporciona información detallada sobre la configuración de Docker.

```bash
docker info
```

### 3. `docker pull`

Descarga una imagen de Docker desde Docker Hub o un registro personalizado. Por ejemplo, si queremos descargar Ubuntu 15.04 lo podremos hacer con:

```bash
docker pull ubuntu:15.04
```

### 4. `docker images`

Lista las imágenes de Docker que están almacenadas localmente en tu sistema.

```bash
docker images
```

### 5. `docker ps`

Muestra los contenedores en ejecución.

```bash
docker ps
```

Para ver todos los contenedores, incluyendo los detenidos, utiliza:

```bash
docker ps -a
```

### 6. `docker run`

Crea y ejecuta un contenedor a partir de una imagen.

```bash
docker run -d -p 80:80 --name my-apache httpd
```

### 7. `docker stop`

Detiene un contenedor en ejecución.

```bash
docker stop [ID_del_contenedor]
```

### 8. `docker rm`

Elimina un contenedor detenido.

```bash
docker rm [ID_del_contenedor]
```

### 9. `docker rmi`

Elimina una imagen de Docker.

```bash
docker rm [nombre_de_la_imagen]
```

### 10. `docker exec`

docker exec -it ID_del_contenedor comando.

```bash
docker exec -it [ID_del_contenedor] [comando]
```

El uso de -it permite la interactividad con el terminal del contenedor.

### 11. `docker build`

Construye una imagen de Docker a partir de un archivo Dockerfile.

```bash
docker build -t [nombre_de_la_imagen] [ruta_del_Dockerfile]
```
