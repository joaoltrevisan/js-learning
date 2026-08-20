let result = 5 + 3; // Adição
let result = 5 - 3; // Subtração
let result = 5 * 3; // Multiplicação
let result = 5 / 3; // Divisão
let result = 5 % 3; // Resto da divisão

const num1 = 10;
const num2 = 2;
const exponent = num1 ** num2; // Exponenciação

let x = 5;
x++; // Incremento de 1
x--; // Decremento de 1
++x; // Incremento de 1 antes da atribuição
--x; // Decremento de 1 antes da atribuição

let num = 5
num += 3; // Adição e atribuição
num -= 3; // Subtração e atribuição
num %= 3; // Resto da divisão e atribuição
num **= 3; // Exponenciação e atribuição
num &= 3; // AND bit a bit e atribuição
num |= 3; // OR bit a bit e atribuição

console.log(5 == '5'); // true, compara apenas o valor e verifica a igauldade
console.log(5 === '5'); // false, compara valor e tipo e verifica a igualdade
console.log(5 != '5'); // false, compara apenas o valor e verifica a desigualdade
console.log(5 !== '5'); // true, compara valor e tipo e verifica a desigualdade

let a = 6;
let b = 9;
console.log(a > b); // false
console.log(b > a); // true
console.log(a >= b); // false
console.log(a < b); // true
console.log(a <= b); // true

const timmyAge = 18;

if (timmyAge >= 16) {// verifica se Timmy tem idade suficiente para dirigir
  console.log("Timmy is old enough to drive."); 
} else {// caso contrário, exibe a mensagem de que Timmy não tem idade suficiente para dirigir
  console.log("Timmy is not old enough to drive.")
}

