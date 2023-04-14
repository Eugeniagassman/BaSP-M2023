console.log('--EXERCISE 2: STRNGS');

/* a.Crear una variable de tipo string con al menos 10 caracteres
y convertir todo el texto en mayúscula (utilizar toUpperCase). */

console.log('--Exercise 2.a');

var txtEx2A = 'exercise n2a';
console.log(txtEx2A.toUpperCase());

/* b.Crear una variable de tipo string con al menos 10 caracteres y generar
un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log('--Exercise 2.b');

var txtEx2B = 'exercise n2b';
var resultEx2B = txtEx2B.substring(0,5);
console.log(resultEx2B);

/* c.Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log('--Exercise 2.c');

var txtEx2C = 'exercise n2c';
var resultEx2C = txtEx2C.substring(9);
console.log(resultEx2C);

/* d.Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra
en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable
(utilizar substring, toUpperCase, toLowerCase y el operador +).*/

console.log('--Exercise 2.d');

var txtEx2D = 'helloWorld';
var resultEx2D = txtEx2D.substring(0,1).toUpperCase() + txtEx2D.substring(1).toLowerCase();
console.log(resultEx2D);

/* e.Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición
 del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/

console.log('--Exercise 2.e');

var txtEx2E = 'hello world';
var resultEx2E = txtEx2E.indexOf(' ');
console.log(resultEx2E);

/* f.Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase
y el operador +). */

console.log('--Exercise 2.f');

var txtEx2F = 'exercise numBer2';
var resultEx2F = (txtEx2F.substring(0,1).toUpperCase() + txtEx2F.substring(1,9) + txtEx2F.substring(9,10).toUpperCase() 
+ txtEx2F.substring(10).toLowerCase());
console.log(resultEx2F);