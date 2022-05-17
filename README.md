# **HACK THE OCEAN**

## tema: Especies en peligro de extincion

## Parte de BACKEND

hakaton  13 de mayo 2022 a 15 de mayo 2022

### Objetivo

* Hacer uso  de las herramientas aprendidas en [LaunchX-InnovaccionVirtual](https://github.com/LaunchX-InnovaccionVirtual)
* Desarrollar una aplicación de acuerdo a la problemática

### Introducción

Este proyecto crea una pequeña Api de animales en peligro de extinción con el uso de server express de forma local, donde se toma un `.json` como base de datos.

### Diagrama de flujo

![hack flujo color](https://user-images.githubusercontent.com/99068430/168505411-7d15f63a-6226-4110-8fff-95838fb47551.jpg)

### Tecnologías usadas

* git
* Jests
* Node JS
* Eslint
* Express
* github actions

## Creación del proyecto

* Primero se creo el repositorio de github
* Se clono y para tenerlo de manera local
* se añadió el `package.json` con `mpm init`
* se agregaron los módulos de `jest , express y eslint`
  se instala `jest`
  `npm install --save-dev jest@26.0.0`

Nota : se agrega la versión 26.0.0 porque github acction nos da error porque con la última versión de jest manda error.

Se instala `express`
  `npm install express --save`

  Se instala `ESlint`
  `npm install  eslint --save -dev`
  Se  ejecuta el comando  `npm init @eslint/config` y se configuro de la siguiente forma

![hack linter](https://user-images.githubusercontent.com/99068430/168502165-a3cf4804-337f-4b3d-90b6-c847f5d770ff.png)

### Creacion de pruebas

 Se crearon primero las pruebas de unidad y de ahí empezó hacer el proyecto

 ![hack pruebas de controller y services](https://user-images.githubusercontent.com/99068430/168502067-01a8db43-e86a-4013-ac38-5d7f2ccf5bc7.png)

![hack resder](https://user-images.githubusercontent.com/99068430/168501836-3adc4fbf-5fe9-4760-afc9-371f72d4b80c.png)

Se crean `AnimalService.js` y dos metodos `allAnimals(dbAnimal)` que muestra todos los animales den la base de datos  y `animalFilter(dbAnimal,name)` que filtra los animales por nombre.

Pasan las pruebas de unidad

![hack animalservices test](https://user-images.githubusercontent.com/99068430/168502283-4f404dac-6606-4656-b476-ac33b5165222.png)

![hack readertest](https://user-images.githubusercontent.com/99068430/168502277-9e56e416-ceb0-4609-8d35-087639bd90db.png)

Se importan los módulos de los archivos a `AnimalContoller`y estos a su vez se pasan a el servidor

### Servidor

Para el servidor se crea `server.js` y crean dos endpoints uno que muestra todo los animales
y el otro el filtrado por `name`

   ![hack servercodigo](https://user-images.githubusercontent.com/99068430/168502904-136b742d-75f7-45b3-a0e6-0c4105816a72.png)

### Corriendo el server de forma local

 Corremos del server con el comando `npm server.js`

 ![hack server](https://user-images.githubusercontent.com/99068430/168503032-a91042d3-d0c3-4d3e-9e4a-b864b9cc2420.png)

Para poder entrar en el navegador ponemos `http://localhost:3000`y nos arroja una bienvenida,
para ver todo los animales alojados en la Api ponemos `http://localhost:3000/v1/allAnimales`

![hack allAnimals](https://user-images.githubusercontent.com/99068430/168503276-3fc0d539-2d30-4ed3-8556-dbb3a87b75f4.gif)

Para poder ver los animales por nombre ponemos en le navegador `http://localhost:3000/v1//v1/Animales/:name` donde  `:name` recibira el el animal a filtrar

![hack consulta name](https://user-images.githubusercontent.com/99068430/168503524-7ad1f0ac-d43f-410b-b72b-4a95beee6a81.gif)

Una ves finalizado todo de aplica linter para que arregle todas las inconsistencias de codigo con `npm run linter` muestra los errores y con `npm run linter-fix los arregla`.

![hack linterfinal](https://user-images.githubusercontent.com/99068430/168503793-6e3fea5f-ae77-4b8a-98c0-2d67588d6aa4.png)

link de la parte  Frontend

|  Proyecto  |                     Link al repo                     |
| :---------: | :--------------------------------------------------: |
| `FRONEND` | [Link al repo](https://github.com/Jovana-ch/Hackathon-) |
