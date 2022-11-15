// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let sqrt = (a, b) => a * b;
// console.log(sqrt(13, 22));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let circle = (r) => 3.14 * r * r
// console.log(circle(20))

// - створити функцію яка приймає масив та виводить кожен його елемент

let arr = [2, 1, 'asdasd', 'bnghngngh']

let arrFunc = (arr) => {
    for (const arrElement of arr) {
        // console.log(arrElement)
    }
}
arrFunc(arr)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let createText = (text) => {
    document.write(`<p>${text}</p>`)
}
createText('asdas')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let creatList = (text, counter) => {
    document.write('<ul>')
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write('</ul>')
}

creatList('ararara', 3)

let arrCreatList = (arr) => {
    document.write('<ul>')
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`)
    }
    document.write('</ul>')
}
arrCreatList(arr)

// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let object = [
    {
        id: 1,
        name: "Andriy",
        age: 22
    },
    {
        id: 2,
        name: "Ola",
        age: 12
    },
    {
        id: 3,
        name: "Nina",
        age: 32
    },
];

let objFunc = (obj) => {
    for (const objKey of obj) {
        document.write('<div>')
        document.write(`<p>${objKey.name}</p>`)
        document.write(`<p>${objKey.id}</p>`)
        document.write(`<p>${objKey.age}</p>`)
        document.write('</div>')
    }
}
objFunc(object)


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let arrNumbs = [1, 2, 5, 6, 1, -1]
let sumArr = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    // console.log(sum)
}

sumArr(arrNumbs)

// - створити функцію яка повертає найменьше число з масиву

let minFunc = (arrnumbs) => {
    let min = arrnumbs[0];
    for (const arrnumb of arrnumbs) {
        if (arrnumb < min) {
            min = arrnumb
        }
    }
    console.log(min)

}
minFunc(arrNumbs)