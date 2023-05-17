// ## Problema 5: Verificar si una cadena es un palíndromo
// Escribe una función de JavaScript llamada isPalindrome que tome una cadena como parámetro y devuelva true si la cadena es un palíndromo (se lee igual de adelante hacia atrás que de atrás hacia adelante) y false en caso contrario.
// javascript
// // Ejemplo de uso:
// console.log(isPalindrome('civic')) // Resultado: true

function isPalindrome (word) {
    if (word.split("").reverse().join("") === word){
        return true;
    } else return false;
}

console.log(isPalindrome('aerea'))


