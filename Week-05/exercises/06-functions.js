console.log('--EXERCISE 6: FUNCTIONS');

// a.Crear una función suma que reciba dos valores numéricos y retorne el resultado.
// Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha
// variable en la consola del navegador.

console.log('--Exercise 6.a');

function sum(a,b){
 return a + b;
}
var resultEx6a = sum(1,2);
console.log(resultEx6a);

// b.Copiar la función suma anterior y agregarle una validación para controlar si
// alguno de los parámetros no es un número; de no ser un número, mostrar un alert
// aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.

console.log('--Exercise 6.b');

function sum(a,b){
    if ((isNaN(a)) || (isNaN(b))){
        alert('One of the parameters has an error');
        return NaN;
    }else{
        return a + b;
    }
}
var resultEx6b = sum(1,'e');
console.log(resultEx6b);

// c.Crear una función “validateInteger” que reciba un número como parámetro y
//devuelva verdadero si es un número entero.

console.log('--Exercise 6.c');

function validateInteger(a){
   return Number.isInteger(a);
}
var numberEx6c = validateInteger(3.5);
console.log(numberEx6c);

// d.Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a
// la función del ejercicio 6c. y que valide que los números sean enteros. En caso
// que haya decimales mostrar un alert con el error y retornar el número convertido a entero (redondeado).

console.log('--Exercise 6.d');

function sumEx6d(a,b){
    if ((isNaN(a)) || (isNaN(b))){
        alert('One of the parameters has an error');
        return NaN;
    }else{
        if(validateInteger(a) && validateInteger(b)){
            return a + b;
        }else{
            alert('One of the numbers is not integer')
            return Math.round(a) + Math.round(b);
        }
    }
}
var resultEx6d = sumEx6d(1,2.5);
console.log(resultEx6d);

// e.Convertir la validación del ejercicio 6d) en una función separada y llamarla
// dentro de una nueva función probando que todo siga funcionando igual que en el apartado anterior.

console.log('--Exercise 6.e');

function validation (x){
    if ( isNaN(x)){
        alert( x + ' is not a number');
        return NaN;
    }else{
        if (x % 1 === 0){
            return x;
        }else{
            alert('The number ' + x + ' is not integer')
            return Math.round(x);
        }
    }
}

function sumEx6e(a,b){
    return validation(a) + validation(b);
}
console.log(sumEx6e(2,2.4));
