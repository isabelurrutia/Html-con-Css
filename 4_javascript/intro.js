                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        console.log("Hola mundo"); //Imprimir en consola.

//VARIABLES
var num = 1; //alcance global
let texto = "Este es un texto"; //solo existe en el bloque que se declara, fuera de su condicional no existira.
const otro_num =2; // no pueden cambiarse
var decimales = 1.11; //flortantes son numeros decimales
var bool = true; //true o false
//lo que está en celeste, es el nombre, podria ser cualquiera
//lo ideal es que dentro de bucle o funcion use let
//los valores booleanos, numeros enteros, decimales o texto
console.log(texto);

var despues; //declaro variable, aún no tiene valor. undefined
console.log(despues);
despues = "texto colocado despues";
console.log(despues);

var num1 =1;
var num2 = 10;
var suma = num1 + num2;//suma=1+10=11
console.log(suma);

var nombre = "Elena de Troya";
var mensaje = "Mi nombre es: ";
console.log(mensaje+nombre); //Concatenación

var otro_nombre ="Juana de Arco";
var edad = 18;
var mensaje_concatenado = "Mi nombre es: "+otro_nombre+" ¿como estás? Tengo "+edad+" años."; //Concatenación
var mensaje_interpolado = `Mi nombre es: ${otro_nombre} ¿como estás? Tengo ${edad} años.`; // Interpolado
console.log (mensaje_concatenado);
console.log (mensaje_interpolado);

var combinamos_texto = "ABC";
console.log(combinamos_texto+num1); //si se encuentra primero con texto, en adelante considera todo como texto.
console.log(combinamos_texto+num1+num2);
console.log(num1+num2+combinamos_texto); //si se encuentra primero con numeros los opera y luego pega el texto.
console.log(num1+num2+combinamos_texto+num);

var orden = 10 + 20 / 6; //PRIORIDAD: 1°paréntesis 2° multiplicaciones divisiones y modulares(resto de la división)  3°sumas y restas
console.log(orden);
console.log(7%2);//modular, resto en division

var n = 14;
n += 5; //n=n+5; se puede hacer con cualquier operación.
console.log(n);

var nombre_completo = "Pedro";
console.log(nombre_completo+nombre_completo+nombre_completo);
nombre_completo +=" Páramo"; 
console.log(nombre_completo);

if(bool){//a===b; a!==b;a<b; a<=b;a>b;a>=b
    console.log("Variable verdadera");
}
else{
    console.log("Variable falsa");
}

if(n>=15){
    console.log("Número mayor a 15");
}else{
    console.log("Número menor a 15");
}

if(n<15){
    console.log("N es menor a 15"); // como no se cumple no se imprime
}

var edad_infante = 4;
if(edad_infante<2){
    console.log("Es un bebe");
}else if(edad_infante<5){
    console.log("Es un infante");
}else{
    console.log("Es un niño");
}

var temperatura = 20;
var estaLloviendo = false;
if(temperatura >= 18 && !estaLloviendo){//&& es un y ! implica negación
    console.log("Es un gran día para pasear");
}

var edad_conducir = 17;
var permisoPadres = true; //si tiene permiso de los padres
if(edad_conducir>=18 || permisoPadres){// || es un o 
    console.log("Puedes obtener tu licencia de conducir");
}

/*BUCLES/CICLOS*/
let a = "B"
for(let i=0;i<4;i++){ //repite mientras se cumple.
    console.log("Hola");
    console.log("¿Como estas?");
    let a = "A"
    console.log(a);
}
console.log(a);
//console.log(i); i solo existe en el bloque de código en el que la declaré por que usé let, si hubiera sido var existia fuera de for
for(let i=3; i>0;i--){
    console.log(i);
}

let x=0;
while(x<3){
    console.log("Entramos al while");
    x +=2;
}
let inicio = 2;
let final = 10;
while(inicio<final){
    console.log("Entramos al segundo while");
    inicio++;
    final -=2;
}

var variable1 = 1; //tipo num
var variable2 = "1" //tipo string

if(variable1 == variable2){ //== buscando que los valores sean iguales
    console.log("Tiene el mismo valor")
}
if(variable1 === variable2){ // === mismo valor y mismo tipo
    console.log("Tiene el mismo valor y tipo")
}
//ARRAY
var hobbies = ["leer", "correr", "cantar", "hacer ejercicio", "programar"];
console.log(hobbies[0]);
hobbies[1] = "caminar";
console.log(hobbies);
console.log(hobbies.length);
for (let i = 0; i < hobbies.length; i++) {
  console.log(i + " " + hobbies[i]);
}
var combinado = [1.11, "texto", true, 39, ["esta", "es,", "otra", "lista"]];
hobbies.push("ver series"); //Agrega un nuevo elemento al final de la lista
console.log(hobbies);

hobbies.unshift("Nadar");//agrega un nuevo elemento al comienzo de la lista
console.log(hobbies);
hobbies.pop();//Elimine el último elemento de la lista.
console.log(hobbies);



//arreglo bi-dimensional o matriz
var matriz =[
    [1,2,3,4,5],
    [7,8,9,10,11],
    [12,13,14,15,16],
    [17,18,19,20,21],
    [22,23,24,25,26],
];
console.log(matriz[0][3]);//el primer corchete corresponde a cual elemento de matriz[], el segundo a cual elemento dentro de él.
matriz[0].push(6);
console.log(matriz);

/* OBJETOS */
//se caracteriza por usar {} permite poner clave y valor
var estudiante = {
    "id":123,
    "nombre": "Elena",
    "apellido":"De Troya",
    "edad": 25,
    "hobbies":["leer","bailar","ver pelis"],
    "direcciones":[
        {
            "calle": "Av. Sol",
            "num": 1234,
            "ciudad": "Monterrey",
            "pais": "México"
        },
        {
            "calle": "Primera Avenida",
            "num": 345,
            "ciudad": "Guadalajara",
            "pais": "México"
        }
    ]
}
console.log(estudiante.nombre); //Puntos
console.log(estudiante["edad"]); //corchetes
estudiante.apellido = "De arco";
console.log(estudiante);
console.log(estudiante["direcciones"][1]["calle"]);
console.log(estudiante.direcciones[1].calle);
estudiante.curso = "Fundamentos de la Web"; //agrego la propiedad/clave y la igualo a un valor
console.log(estudiante);
estudiante.curso = ["Fundamentos de la Web", "Python"]; // si la vuelvo a poner se sobreescribe
console.log(estudiante);
