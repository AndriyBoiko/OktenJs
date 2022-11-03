/*



*/

// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [22, 'list', true, 143, false, 44, 'text', 'object', 123, 'banana'];
console.log(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], arr[8], arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let objBookOne = {
    title: 'Bot',
    pageCount: 243,
    genre: 'fantasy',
    author: {
        name: 'Maks',
        age: 34
    }

};

let objBookTwo = {
    title: 'Характерник',
    pageCount: 361,
    genre: 'history',
    author: {
        name: 'Василь Шкляр',
        age: 44
    }
};

let objBookThree = {
    title: 'Бідний батько багатий батько',
    pageCount: 161,
    genre: 'business ',
    author: {
        name: 'Robert',
        age: 54
    }
};

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

{
    let arrTen = [
        {
            name: 'Andrey',
            username: 'Jonson',
            password: '123zxc',
        },
        {
            name: 'Oleg',
            username: 'MArtin',
            password: 'qweerty',
        },
        {
            name: 'Pedro',
            username: 'Leon',
            password: '123asdask',
        },
        {
            name: 'Maks',
            username: 'Voit',
            password: 'lasdk12231',
        },
        {
            name: 'Vasya',
            username: 'Otter',
            password: 'sklnsdn',
        },
        {
            name: 'Orest',
            username: 'Lutyi',
            password: 'qwe123',
        },
        {
            name: 'Igor',
            username: 'Lover',
            password: 'poi123',
        },
        {
            name: 'Vova',
            username: 'Paga',
            password: 'tyrst2233',
        },
        {
            name: 'Vova',
            username: 'Paga',
            password: 'tyrst2233',
        },
        {
            name: 'Vova',
            username: 'Paga',
            password: 'tyrst2233',
        },
    ];
    console.log(arrTen.length);
    console.log(arrTen[0].password);
    console.log(arrTen[1].password);
    console.log(arrTen[2].password);
    console.log(arrTen[3].password);
    console.log(arrTen[4].password);
    console.log(arrTen[5].password);
    console.log(arrTen[6].password);
    console.log(arrTen[7].password);
    console.log(arrTen[8].password);
    console.log(arrTen[9].password);
}