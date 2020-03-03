let objCurriculum = {
    conectarServidor: function(){

        fetch("datos.json") /*Promesa*/
        .then(datos => datos.json())
        .then(datosCV=> {
            
            datosPersonales = datosCV.cv[0].DatosPersonales;
            //Foto:
            document.getElementById("fotico").src = innerHTML = datosPersonales.foto;

            //Datos personales:
            document.getElementById("name").innerHTML = datosPersonales.nombre + " " + datosPersonales.apellidos;
            document.getElementById("oficio").innerHTML = datosPersonales.profesion;
          return datosCV;
        })
        
        //cargamos los datos contacto:
       .then(datosCV => {
            contacto = datosCV.cv[1].Contacto;
            document.getElementById("emailA").innerHTML = contacto.correo;
            document.getElementById("emailA").href = contacto.correo;
            document.getElementById("telfA").innerHTML = contacto.telf;
            return datosCV;
       })

       .then(datosCV => {
            redesSociales = datosCV.cv[2].RedesSociales;
            document.getElementById("linkedinA").innerHTML = redesSociales.linkedin;
            document.getElementById("linkedinA").href = redesSociales.linkedinURL;
            document.getElementById("githubA").innerHTML =  redesSociales.git;
            document.getElementById("githubA").href =  redesSociales.gitURL;
            document.getElementById("twitterA").innerHTML = redesSociales.Twitter
            document.getElementById("twitterA").href = redesSociales.TwitterURL
            return datosCV;
       })

       .then(datosCV =>{
            intereses = datosCV.cv[3].Intereses;
            document.getElementById("linkedinA").innerHTML = redesSociales.linkedin;
            document.getElementById("githubA").innerHTML =  redesSociales.git;
            document.getElementById("twitterA").innerHTML = redesSociales.IG
            return datosCV;
       })
       .then(datosCV=>{
            eduacion = datosCV.cv[4].Educacion;
            document.getElementById("titulo-estudy").innerHTML = eduacion.Titulacion1;
            document.getElementById("fecha-estudy").innerHTML = eduacion.Centro1;
            document.getElementById("sitio-estudy").innerHTML = eduacion.Año1;

            document.getElementById("titulo-estudy2").innerHTML = eduacion.Titulacion2;
            document.getElementById("fecha-estudy2").innerHTML = eduacion.Centro2;
            document.getElementById("sitio-estudy2").innerHTML = eduacion.Año2;

            document.getElementById("titulo-estudy3").innerHTML = eduacion.Titulacion3;
            document.getElementById("fecha-estudy3").innerHTML = eduacion.Centro3;
            document.getElementById("sitio-estudy3").innerHTML = eduacion.Año3;
            return datosCV;
       })
       .then(datosCV => {
            experiencia = datosCV.cv[5].experiencia;
            document.getElementById("titulo-trabajo").innerHTML = experiencia.Laboral1;
            document.getElementById("fecha-trabajo").innerHTML = experiencia.Año1;
            document.getElementById("sitio-trabajo").innerHTML = experiencia.Centro1;
            document.getElementById("detalles-trabajo").innerHTML = experiencia.Experiencia1;
            return datosCV;
       })
       .then(datosCV=>{
            idiomas = datosCV.cv[6].idiomas;
            document.getElementById("idioma1").innerHTML = idiomas.idioma1;
            document.getElementById("idioma2").innerHTML = idiomas.idioma2;
            document.getElementById("idioma1-nivel").innerHTML = idiomas.exp1;
            document.getElementById("idioma2-nivel").innerHTML = idiomas.exp2;
            return datosCV;
       })
       .then(datosCV =>{
            skils = datosCV.cv[7].skils;
            document.getElementById("level-title1").innerHTML = skils.sk1;
            document.getElementById("barra1").style.width = skils.lv1;

            document.getElementById("level-title2").innerHTML = skils.sk2;
            document.getElementById("barra2").style.width = skils.lv2;

            document.getElementById("level-title3").innerHTML = skils.sk3;
            document.getElementById("barra3").style.width = skils.lv3;

            document.getElementById("level-title4").innerHTML = skils.sk4;
            document.getElementById("barra4").style.width = skils.lv4;
       })
    }
}
window.onload = objCurriculum.conectarServidor();