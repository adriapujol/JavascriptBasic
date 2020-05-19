//Exercici 1

console.log('hello world');

//Exercici 2

alert('Adrià Pujol');


//Exercici 3
const name = 'Adrià';
const surname = 'Pujol';

console.log(`Hello, my name is ${name} ${surname}!`);

//Exercici 4

const a = 23;
const b = 11;

const suma = (x, y) => x+y;

console.log(suma(a, b));


//Exercici 5
const nota_examen = prompt('Quina ha sigut la nota del teu examen?');

nota_examen >= 5 ? alert(`Has aprovat amb un ${nota_examen}`) : alert(`Has suspès amb un ${nota_examen}`);


//Exercici 6

const str = 'Tinc un cotxe de color verd';
const str2 = str.replace('verd', 'blau');
const str3 = str2.split('o').join('u');
console.log(str);
console.log(str2);
console.log(str3);


//Exercici 7

const arr = ['taula', 'cadira', 'ordinador', 'llibreta'];

for (let i = 0; i < arr.length; i++) {
    console.log(`L'objecte ${arr[i]} està a la posició ${i}`);
}

//Exercici 8

const calculadora = (operador, valor1, valor2) => {
    switch (operador) {
        case 'suma' :
        case '+':
            console.log(valor1+valor2);
            break;
        case 'resta':
        case '-':
            console.log(valor1-valor2);
            break;
        case 'multiplicacio':
        case 'multiplicació':
        case '*':    
            console.log(valor1*valor2);
            break;
        case 'divisio':
        case 'divisió':
        case '/':    
            console.log(valor1/valor2);
            break;
        default:
            console.log('Something went wrong');       
    }

}
