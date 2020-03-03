---
title: Currículum
author: Tania Cáceres
header-includes: |
lang: es-ES
---

# Currículum mediante asincronía - Tania Cáceres
## Fichero JSON:

Hemos creado un currículum en el que los datos se insertará de forma todalmente asíncrona, de ésta manera será más sencillo a la hora de querer cambiar un dato.

Los datos estarán almacenados en un fichero JSON el cual se estructura en un array bidimensional, se estructura de la siguiente manera para que nos hagamos una idea:

```js
    datosCV ["DatosPersonales", "Contacto", "RedesSociales", "Intereses", "Educación",
    "Experiencia", "Idiomas", "Skils"]
```

Array dentro del array, ejemplo de "DatosPersonales":

```js
    DatosPersonales ["nombre", "apellidos", "profesión", "Intereses", "fechaNacimiento", "Nacionalidad", "Foto"]
```
Así con todos los datos.

## Fichero JS:

En el fichero de js hemos creado la clase 'objCurriculum' la cual se ejecutará nada mas abrir la ventana.
Esta se compone de un método al que hemos llamado 'conectarServidor' el cual nos permitirá sacar los datos de nuestro fichero JSON 'datos.json' mediante el método 'Asynk/Await' de tal forma que vamos a ir sacando los apartados según se vayan creado, es decir, primero sacaremos los 'datosPersonales' y una vez que éstos se han pintado en nuestro fichero HTML pediremos que lo siguiente que nos devuelva sean los datos de 'RedesSociales' y así sucesivamente.

```js
    let objCurriculum = {
        conectarServidor: function(){

            fetch("datos.json") /*Promesa*/
            .then(datos => datos.json())
            .then(datosCV=> {
```

Para abreviar a la hora de llamar al dato deseado, hemos creado una variable que contendrá el objeto JSON, la posición del array y la categoría, de tal forma que solo tendremos que poner la categoría y llamar al dato deseado:

```js
    datosPersonales = datosCV.cv[0].DatosPersonales;
```
Ahora solo nos quedará escribir el dato en el contenedor de nuestro HTML que deseemos:

```js
     document.getElementById("name").innerHTML = datosPersonales.nombre
```
En algunos casos hemos tenido que modificar alguna de las propiedades de dichos elementos, como es en el caso de los enlaces, que además de introducir los datos hemos tenido que asignarles
su 'href' correspondiente:

### JSON
```json

    "RedesSociales" :{
                "IG" : "tannis.baratheon",
                "Twitter": "tannisbaratheon",
                "TwitterURL": "https://twitter.com/tannisbaratheon",
                "Facebook" : "Tania Cáceres Santy",
                "linkedin": "TaniaCáceres/linkedin",
                "linkedinURL": "https://www.linkedin.com/in/tania-c%C3%A1ceres-santy-357b5119b/",
                "git" : "github.com/taniacaceres94",
                "GITurl": "https://github.com/taniacaceres94"
            }
```
### JS
```js
 document.getElementById("linkedinA").href = redesSociales.linkedinURL;
```

**Dato importante**
Si queremos que una vez que se nos vuelva a devolver datos una vez que hayamos cargado todos los de una categoría, para continuar con la siguiente debemos hacer un return de los datos que se nos devolvió en el primer '.then' para poder obtenerlos en el siguiente, si no se producirá un error:

```js
       return datosCV;
```

## Fichero HTML & CSS

El currículum consta de un HTML con el que llamamos a los elementos mediante clases e IDs, es totalmente responsive, para ello hemos utilizado 'BOOSTRAP'.
Es sencillo y minimalista, consta de una serie de iconos, barras de progreso en la cual definimos las skils personales con un cierto nivel, que es insertado a partir de nuestro fichero JSON modificando mediante JS el 'style' del elemento:

```js
    document.getElementById("barra1").style.width = skils.lv1;
```

También cuenta con una serie de iconos bien chingones los cuales hemos sacado de la librería de 'font-awesome'.