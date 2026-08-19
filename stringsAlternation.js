console.log(learningIsFunSentence.indexOf("Learning")); 
/* retorna a posição do índice da primeira ocorrência de uma substring em uma string.
se a substring não for encontrada, retorna -1. */

const lastCharacter = subject[subject.length - 1]; // exemplo de como acessar o último caractere de uma string.

let letter = "A";
console.log(letter.charCodeAt(0)); // retorna o valor Unicode do caractere na posição especificada.

let char = String.fromCharCode(65); // retorna o caractere correspondente ao valor Unicode especificado.

console.log(String.fromCharCode(66));

let sentence = 'I am a person';
let search = sentence.includes('I'); // retorna true se a substring for encontrada na string, caso contrário, retorna false.

let text = 'What is JavaStript?';
let result = text.includes('JavaScript', 8); // verificar uma substring começando em um índice específico na string.

let str = 'Hello, World!';
let part = str.slice(0, 5); // retorna uma parte da string, começando no índice inicial e terminando antes do índice final.

let say = 'Sup'
let upperCase = say.toUpperCase(); // converte todos os caracteres da string para maiúsculas.
let loweCase = say.toLowerCase(); // converte todos os caracteres da string para minúsculas.

let message = '   Hello   ';
let trimmedMessage = message.trim(); // remove os espaços em branco do início e do fim da string.

let text = "I live in Europe";
let otherText = text.replace("Europe", "America"); // substitui uma substring por outra na string.

let be = '!';
let beRepeated = be.repeat(3); // repete a string um número específico de vezes.