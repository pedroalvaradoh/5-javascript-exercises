// ## Problema 4: Encontrar el factorial de un número
// Escribe una función de JavaScript llamada factorial que tome un número entero positivo como parámetro y devuelva su factorial. El factorial de un número es el producto de todos los números enteros positivos menores o iguales a ese número. Por ejemplo, el factorial de 5 (escrito como 5!) es 5 _ 4 _ 3 _ 2 _ 1 = 120.
// javascript
// Ejemplo de uso:
// const valorFactorial = factorial(5)
// console.log(valorFactorial) // Resultado: 120

function factorial(num) {
    let result = 1;

    for (let i = 1; i <= num; i++) {
        result = result * i;

        
    }
    return result;
}

const valorFactorial = factorial(5)
 console.log(valorFactorial)

//  Después de toda esa parafernalia que hice Julio me mostró el return word.split("").reverse().join(""); jajaj