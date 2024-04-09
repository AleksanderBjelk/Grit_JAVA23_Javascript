const arr = [2,3,56,75,45,43,22243];

function callBack (el, i, array){
    console.log(el, i, array);
    el = 0;
    array[i] = 0;
}

arr.forEach(callBack);

console.log(arr);