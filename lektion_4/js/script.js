const obj = {
    x: 10,
    y: 20
}

function add(objPar, num){

    objPar.x+=num;
}

console.log(obj);

add(obj,3)

console.log(obj);

const x =10;
function addPrimitive(xPar,num){
    xPar+=num;
}

console.log(x);
addPrimitive(x,3);
console.log(x);