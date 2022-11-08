//
//
// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = -2

if (x !== 0) {
    console.log("Nice!")
} else {
    console.log("Warning")
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).


let time = 431
if (0 <= time && time < 15) {
    console.log('I')
} else if (15 <= time && time < 30) {
    console.log('II')
} else if (30 <= time && time < 45) {
    console.log('III')
} else if (45 <= time && time < 60) {
    console.log('IV')
} else {
    console.log('Введіть число від 0 до 60')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 1;

if (day >= 1 && day <= 10) {
    console.log('Перша декада');
} else if (day > 10 && day <= 20) {
    console.log('Друга Декада');
} else if (day > 20 && day <= 31) {
    console.log('Третя Декада');
} else {
    console.log('Місяць має всього 31 день ');
}
//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

{
    let days = 7;

    switch (days) {
        case  1:
            console.log('Monday');
            break;
        case  2:
            console.log("Tuesday");
            break;
        case  3:
            console.log("Wednesday");
            break;
        case 4 :
            console.log("Thursday");
            break;
        case  5:
            console.log("Friday");
            break;
        case  6:
            console.log("Saturday");
            break;
        case  7:
            console.log('Sunday');
            break;
    }
}

// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
let numb1 = 22;
let numb2 = 22;

if (numb1 < numb2) {
    console.log(numb2)
} else if (numb1 > numb2) {
    console.log(numb1)
} else if (numb1 === numb2) {
    console.log('Rivni')
} else {
    console.log('error')
}


// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)



{

    let x = '2131' || 'number'
    console.log(x)

}