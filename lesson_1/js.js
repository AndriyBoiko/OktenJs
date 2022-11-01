/*
- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
    Вивести кожну змінну за допомогою: console.log

- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)




*/
let hello = 'hello';
let owu = 'owu';
let com = 'com';
let ua = 'ua';
let n1 = 1;
let n10 = 10;
let n99 = -999;
let n123 = 123;
let n3 = 3;
let pi = 3.14;
let n2 = 2.7;
let n16 = 16;
let boolTrue = true;
let boolFalse = false;

console.log(hello);
console.log(owu);
console.log(com);
console.log(ua);
console.log(n1);
console.log(n10);
console.log(n99);
console.log(n123);
console.log(n3);
console.log(pi);
console.log(n2);
console.log(n16);
console.log(boolTrue);
console.log(boolFalse);


{
    let firsName = 'Boiko';
    let middleName = ' Andriy ';
    let lastName = 'Volodymyrovych'

    let person = firsName + middleName + lastName
    console.log(person);
}

/*
- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
    let a = 100; let b = '100'; let c = true;*/
{
    let a = 100;
    let b = '100';
    let c = true;

    console.log(typeof a)
    console.log(typeof b)
    console.log(typeof c)
}

/*
Додаткове для тих хто цікавився prompt`oм
- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль*/

let firsName = prompt('Як тебе звати?');
let middleName = prompt('Яке в тебе прізвище?');
let lastName = prompt('Як ти по-батькві?');
console.log(firsName, lastName, middleName)