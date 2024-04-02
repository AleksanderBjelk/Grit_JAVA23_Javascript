const y = 3;
const x = "3";

console.log(x == y);
console.log(x === y);

const trees = ["Oak", "Bristlecone", "Birch", "Redwood"];

const treeArray = ["Oak", "Bristlecone", "Birch", "Redwood"];

for (const treeElement of treeArray) {
    console.log(treeElement);
}

//Funktionen definieras
function minFunktion() {
    console.log("I funktionen minFunktion");
}

//Funktionen anropas
minFunktion();
