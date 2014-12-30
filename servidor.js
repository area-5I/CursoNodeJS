/*
  Nuestro primer servidor en donde simplemente enviamos
  una cadena de texto mediante la funcion send a los
  clientes que se conectan al servidor mas especificamente
  a la ruta / recuerden la direccion ip local de toda
  computadora es 127.0.0.1
*/
var express = require("express");
var app = express();

app.listen(8080);

app.get("/",function(req,res){
  console.log(req);
  res.send("Bienvenido al servidor de rafo");
});

console.log("servidor escuchando en el puerto 8080");
