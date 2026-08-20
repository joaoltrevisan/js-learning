const str = '12'
const num = +str; // converte a string em número usando o operador unário +.

let isOn = true;
console.log(!isOn); // retorna false, pois o operador ! inverte o valor booleano.

const number = 5;
console.log(~5); // retorna -6, pois o operador ~ realiza a operação bit a bit NOT.

const result = void(1 + 1); // retorna undefined, pois o operador void descarta o valor da expressão.

let a = 5;
let b = 3;
console.log(a & b); // retorna 1, pois o operador & realiza a operação bit a bit AND.
console.log(a | b); // retorna 7, pois o operador | realiza a operação bit a bit OR.
console.log(a ^ b); // retorna 6, pois o operador ^ realiza a operação bit a bit XOR.
console.log(a << 1); // retorna 10, pois o operador << realiza a operação de deslocamento de bits para a esquerda.
console.log(a >> 1); // retorna 2, pois o operador >> realiza a operação de deslocamento de bits para a direita.

const score = 85;
if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else {
    console.log("C");
}

const temp = 25;
const weather = temp > 30 ? "Hot" : "Cold"; /* operador ternário, retorna "Hot" se a condição for verdadeira,
 caso contrário, retorna "Cold".*/

 const result = true && 'hello'; // retorna 'hello', pois o operador && retorna o segundo operando se o primeiro for verdadeiro.
console.log(result); // hello

const result = 0 || 'This is truthy'; // operador || retorna o segundo operando se o primeiro for falso,
 // caso contrário, retorna o primeiro operando.
console.log(result); // This is truthy

const userSettings = {
 theme: null,
 volume: 0,
 notifications: false,
};

let theme = userSettings.theme ?? 'light'; /* operador de coalescência nula (??) retorna um valor
 apenas se o operando à esquerda for null ou undefined, caso contrário, retorna o operando à esquerda. */
console.log(theme); // light

const randomNum = Math.random(); // gera um número aleatório entre 0 (inclusive) e 1 (exclusivo).
console.log(randomNum); 

const minNum = Math.min(5, 10, 2, 8); // retorna o menor número entre os argumentos fornecidos. 2
const maxNum = Math.max(5, 10, 2, 8); // retorna o maior número entre os argumentos fornecidos. 10

console.log(Math.ceil(4.2)); // arredonda para cima, retorna 5
console.log(Math.floor(4.8)); // arredonda para baixo, retorna 4
console.log(Math.round(4.5)); // arredonda para o inteiro mais próximo, retorna 5

const rN20 = Math.floor(Math.random() * 20) + 1; // gera um número aleatório entre 1 e 20 (inclusive).

const max = 10;
const min = 5;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min; // gera um número aleatório entre min e max (inclusive).

console.log(Math.trunc(2.9)); // retorna a parte inteira de um número, descartando a parte decimal. 2

console.log(Math.sqrt(81)); // retorna a raiz quadrada de 81. 9
console.log(Math.cbrt(27)); // retorna a raiz cúbica de 27. 3

console.log(Math.abs(-5)); // retorna o valor absoluto de -5. 5

console.log(Math.pow(2, 3)); // retorna 8, pois 2 elevado a 3 é igual a 8

console.log(Number.isNaN(NaN)); // retorna true, pois NaN é um valor especial que representa "Not-a-Number".

console.log(parseFloat("3.14.5")); /* retorna 3.14, pois parseFloat converte uma string
em um número de ponto flutuante.*/

console.log(parseInt("42px")); /* retorna 42, pois parseInt converte uma string em um número inteiro,
ignorando os caracteres não numéricos após o número.*/

let num = 3,14159;
console.log(num.toFixed(2)); // retorna "3.14", pois toFixed arredonda o número para 2 casas decimais.




