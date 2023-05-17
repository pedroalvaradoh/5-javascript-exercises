// ## Problema 3: Invertir una cadena
// Escribe una función de JavaScript llamada invertString que tome una cadena como parámetro y devuelva la cadena invertida. Por ejemplo, si la entrada es “hola”, la salida debería ser “aloh”.
// javascript
//  Ejemplo de uso:
// const cadenaInvertida = invertString('hola')
// console.log(invertString) // Resultado: "aloh"

function invertString(string) {
    let inverted = '';

    for (let i = string.length - 1; i >= 0; i--) {

        inverted += string[i];
    }

    return inverted;
}

const cadenaInvertida = invertString('hola');
console.log(cadenaInvertida);