var numero = 1;
numero = "cadena";

var persona = new Object();
persona.nombre = "Homero";
persona.edad = 40;
persona.peso = 80.5; //esto es una variable que guarda un decimal

console.log(persona.peso);

var persona2 = {
  nombre: "Bart",
  edad: 7,
  peso: 50
}

console.log(persona2.nombre);
//definimos la funcion saludar
function saludar(objeto){
  console.log("hola mi nombre es " + objeto.nombre);
}
//llamamos a la funcion
saludar(persona);
saludar(persona2);
//funcion anonima
var suma = function(a,b){
  return a+b;
}
console.log("el resultado de sumar 5 + 5 es igual a " + suma(5,5));
/*practica escribir 3 funciones anonimas para
multiplicar *
dividir /
restar -
*/
var multiplicar = function(a,b){
  return a*b;
}
var dividir = function(a,b){
  return a/b;
}
var restar = function(a,b){
  return a-b;
}

var operacion = function(miFuncion,a,b){
  return miFuncion(a,b);
}
console.log("esto es una suma " + operacion(suma,6,7));
console.log("esto es una multiplicacion " + operacion(multiplicar,10,50));
console.log("esto es una division " + operacion(dividir,8,2));
console.log("esto es una resta " + operacion(restar,8,7));

var operacionG = function(funcion,a,b){
  if(funcion == suma){
    console.log("el resultado de la suma es " + funcion(a,b));
  }

  if(funcion == restar){
    console.log("el resultado de la resta es " + funcion(a,b));
  }

  if(funcion == multiplicar){
    console.log("el resultado de la multiplicacion es " + funcion(a,b));
  }

  if(funcion == dividir){
    console.log("el resultado de la division es " + funcion(a,b));
  }
}

operacionG(suma,5,5);
console.log("" + suma);










/*
esto
es
un
comentario de muchas lineas
*/
