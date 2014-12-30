/*
  Nuestro segundo servidor donde definimos una ruta get dinamica
  que recibe parametros en este caso particular numeros que
  posteriormente envia al cliente.
  la forma de pasar numeros al servidor es la siguiente:
  127.0.0.1:8081/numero/50
  Continuamos instalando la libreria nunjucks que nos permite
  enviar archivos html al cliente para que este los visualize.
*/

var express = require("express");
var nunjucks = require("nunjucks");
var app = express();

/*configuramos nunjucks libreria que nos permite enviar archivos html al cliente
el primer parametro es la ruta completa de nuestra carpeta html, donde guardamos el archivo inicio.html que escribimos
el segundo parametro es un objeto de javascript que asigna el objeto app (nuestro servidor) al atributo express
necesario para que nunjucks pueda enviar los archivos html
*/
nunjucks.configure(__dirname + "\\html",{
  express: app
});

console.log(__dirname + "\\html");
app.listen(8081);

app.get("/",function(req,res){
  res.render("inicio.html")

});

app.get("/inicio",function(req,res){
  res.send("Pagina de inicio");
});

app.get("/perfil",function(req,res){
  res.send("Pagina de perfil de usuario");
});

app.get("/numero/:num",function(req,res){
  var numero = req.params.num;
  //res.send("ingresaste el numero: " + numero);
  if(numero == 0){
    res.send("zero");
  }
});
