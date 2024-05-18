/*
Función: es un bloque de código al que nombramos y podemos invocar las veces que lo necesite.
function nombre_funcion(parametro1, parametro2..){
    codigo
    return valor/variable
}
*/
function saludo(){
    console.log ("Hola");
    console.log ("¿como estás?");
}

saludo();
saludo();
saludo();
saludo();
console.log("-------------------");
function saludo_nombre(nombre){
    console.log(`Hola${nombre}!`);
}
saludo_nombre(" Elena");
saludo_nombre(" Juana");
console.log("-------------------");
function saludo_especial(nombre, apellido){
    console.log(`Hola ${nombre} ${apellido}!`);//solo lo ve el desarrollador
}
saludo_especial("Elena", "De Troya");
console.log("-------------------");
function sumatoria(num1, num2){
    return num1+num2;//permite que el resultado salga de la función, solo 1 return y cuando se ejecuta te sales de la funcion.
}
var resultado = sumatoria(10,20);
console.log(resultado*2);
console.log("-------------------");