function timestTwo(x) {
    return x * 2;
}

function square(x) {
    return x * x;
}

const arr = [2, 3, 2, 56, 34, 3];

// const arrTimesTwo = [];
// const arrSquare = [];

// for (const num of arr) {
//     arrTimesTwo.push(timestTwo(num));
// }
// console.log(arrTimesTwo);

// for (const num of arr) {
//     arrSquare.push(square(num));
// }
// console.log(arrSquare);


function calculateArray (numberArr, calcFunc){
    const newArr = [];

    for(const num of numberArr){
        newArr.push(calcFunc(num))
    }
    return newArr;
}

const arrTimesTwo = calculateArray(arr,timestTwo);
console.log(arrTimesTwo);

const arrSquare = calculateArray(arr,square);
console.log(arrSquare);

