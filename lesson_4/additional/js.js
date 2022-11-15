/*
--створити масив з:
 - з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу
- та вивести його в консоль

-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль*/
/*let arr = []

arr.push('asdad')
arr.push('red')
arr.push('green')

console.log(arr[0])*/

/*
- є масив [2,17,13,6,22,31,45,66,100,-18] :
1. перебрати його циклом while
    2. перебрати його циклом for
    3. перебрати циклом while та вивести  числа тільки з непарним індексом
4. перебрати циклом for та вивести  числа тільки з непарним індексом
5. перебрати циклом while та вивести  числа тільки парні  значення
6. перебрати циклом for та вивести  числа тільки парні  значення
7. замінити кожне число кратне 3 на слово "okten"
8. вивести масив в зворотньому порядку.
9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)*/

{
    let numbers = [2,17,13,6,22,31,45,66,100,-18]
    for (let i = 0; i < numbers.length; i++) {
        // console.log(numbers[i])
    }
    let y = 0
    // while (y < numbers.length){
    //     if (y %2 >0){
    //
    //         // console.log(y + ' neparni')
    //     }
    //     y++;
    // }
    while (y < numbers.length){

        if (numbers[y] %3 === 0){
            console.log(numbers[y] = 'parnyi')

        }
        y++;
    }
}
/*
стоврити масив книжок (назва, кількість сторінок, автори , жанри).
-знайти наібльшу книжку.
- знайти книжку/ки з найбільшою кількістю жанрів
- знайти книжку/ки з найдовшою назвою
- знайти книжку/ки які писали 2 автори
- знайти книжку/ки які писав 1 автор*/

let books = [
    {
        bookName : 'Green',
        bookPage : 123,
        bookAuthor: 'Jon Green',
        bookGener: 'Bad'

    },
    {
        bookName : 'Red',
        bookPage : 223,
        bookAuthor: 'Jon Red',
        bookGener: 'Good'

    },
    {
        bookName : 'Silver',
        bookPage : 127,
        bookAuthor: 'Jon Silver',
        bookGener: 'Neitral'

    }
]

let max = books.reduce((prev, cur) => {
    if (prev.bookPage > cur.bookPage) {
        return prev.bookPage
    }
    return cur
})
console.log(max)