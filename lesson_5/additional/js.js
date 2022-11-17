//     - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let arr = [2, 5, 8, 7, 12]
let numberSum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return console.log(sum / arr.length)
}

numberSum(arr)

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let newArr = (arr) => {
    let newArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        // console.log(arr[i])
        newArr.push(arr[i])
    }
    console.log(newArr)
}
newArr(arr)