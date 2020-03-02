let objCurriculum = {

    datos: "",

    /*---METODOS---*/
    //Conectar con el servidor:
    conectarServidor: function(){

        //Iniciamos AJAX
        //Obtenemos la instancia del objeto XMLHttpRequest
        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function(){
            if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
                var jsonResponse = xmlhttp.responseText;
                var objeto_json = JSON.parse(jsonResponse);
        
                /*Por qué aqui no se usa el "this"?*/
                datos = objeto_json.cv;

                /*Pintamos los datos en el HTML*/
                //Foto:
                document.getElementById("fotico").src = innerHTML = datos[0].DatosPersonales.foto;
                //Datos personales:
                document.getElementById("name").innerHTML = datos[0].DatosPersonales.nombre + " " + datos[0].DatosPersonales.apellidos;
                document.getElementById("oficio").innerHTML = datos[0].DatosPersonales.profesion;

                //contacto y redes sociales:
                document.getElementById("emailA").innerHTML = datos[1].Contacto.correo;
                document.getElementById("telfA").innerHTML = datos[1].Contacto.telf;
                document.getElementById("linkedinA").innerHTML = datos[2].RedesSociales.linkedin;
                document.getElementById("githubA").innerHTML =  datos[2].RedesSociales.git;
                document.getElementById("twitterA").innerHTML = datos[2].RedesSociales.IG


                //Experiencia laboral:
                document.getElementById("titulo-trabajo").innerHTML = datos[5].experiencia.Laboral1;
                document.getElementById("fecha-trabajo").innerHTML = datos[5].experiencia.Año1;
                document.getElementById("sitio-trabajo").innerHTML = datos[5].experiencia.Centro1;
                document.getElementById("detalles-trabajo").innerHTML = datos[5].experiencia.Experiencia1;

                //Eduación:
                document.getElementById("titulo-estudy").innerHTML = datos[4].Educacion.Titulacion1;
                document.getElementById("fecha-estudy").innerHTML = datos[4].Educacion.Centro1;
                document.getElementById("sitio-estudy").innerHTML = datos[4].Educacion.Año1;

                document.getElementById("titulo-estudy2").innerHTML = datos[4].Educacion.Titulacion2;
                document.getElementById("fecha-estudy2").innerHTML = datos[4].Educacion.Centro2;
                document.getElementById("sitio-estudy2").innerHTML = datos[4].Educacion.Año2;

                document.getElementById("titulo-estudy3").innerHTML = datos[4].Educacion.Titulacion3;
                document.getElementById("fecha-estudy3").innerHTML = datos[4].Educacion.Centro3;
                document.getElementById("sitio-estudy3").innerHTML = datos[4].Educacion.Año3;
               
            

                //Skills
                document.getElementById("level-title1").innerHTML = datos[7].skils.sk1;
                document.getElementById("barra1").style.width = datos[7].skils.lv1;

                document.getElementById("level-title2").innerHTML = datos[7].skils.sk2;
                document.getElementById("barra2").style.width = datos[7].skils.lv2;

                document.getElementById("level-title3").innerHTML = datos[7].skils.sk3;
                document.getElementById("barra3").style.width = datos[7].skils.lv3;

                document.getElementById("level-title4").innerHTML = datos[7].skils.sk4;
                document.getElementById("barra4").style.width = datos[7].skils.lv4;
            }
        }

        
        xmlhttp.open("GET", "datos.json");
        xmlhttp.send();

    }/*,
     pintarFormulario: function(){
            //console.log(datos[0].DatosPersonales.nombre)
            document.getElementById("name").innerHTML = datos[0].DatosPersonales.nombre + " " + datos[0].DatosPersonales.apellidos;

     }*/
}
//Ejecutamos el método de la conexión:
window.onload = objCurriculum.conectarServidor();

//Botón que nos pinta el CV
var btn = document.getElementById("btnVerCV");
btn.onclick = function(a){
    objCurriculum.pintarFormulario();
}

