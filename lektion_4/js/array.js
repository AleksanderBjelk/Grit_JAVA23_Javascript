const arr = [0,2, 3, 56, 75, 45, 43, 22243, -22];

function callBack(el, i, array) {
    console.log(el, i, array);
    el = 0;
    //array[i] = 0;
}

arr.forEach(callBack);

console.log(arr);

arr.forEach((el) => {
    console.log(el);
});

//filtrera alla nummer som är under 50
const lessThanFifty = arr.filter((num) => num < 50);
console.log(lessThanFifty);

//jämna nummer
const evenNumbers = arr.filter((num) => num % 2 == 0);
console.log(evenNumbers);

//när filter?
//filtrera prudukter utifrån pris

//map

const mapArr = arr.map(num => num % 2 == 0);
console.log(mapArr);
//när?
//konvertera enhet till en annan 


//sort 
console.log(arr);
const stigande = arr.sort((a,b)=>{
    console.log(a,b);
    return a-b;
});
console.log(stigande);

const fallande = arr.sort((a,b) => b-a)
console.log(fallande);

//när?
//rankinglista -> vem sprang snabbast 
// produkter, filter 