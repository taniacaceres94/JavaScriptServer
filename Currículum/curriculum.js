//Iniciamos AJAX
//Obtenemos la instancia del objeto XMLHttpRequest
var xmlhttp = new XMLHttpRequest();
console.log("Hola");
//Preparamos la función respuesta:

xmlhttp.onreadystatechange = function(){
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
        var jsonResponse = xmlhttp.responseText;
        var objeto_json = JSON.parse(jsonResponse);
         datosRecibidos = objeto_json.cv;

         //console.log(datosRecibidos);
         utilizarDatos(datosRecibidos);
    }
}
xmlhttp.open("GET", "datos.json");
xmlhttp.send();

function utilizarDatos(datos){
   //metemos los datos en la tabla del div "DatosPersonales"

}
