const h1E1 = document.createElement("h1");
document.body.append(h1E1);
h1E1.innerText = "JAVA23";

const topMovies = ["Fight club", "Dune", "The dark knight"];

const listEl = document.createElement("ol");
document.body.append(listEl);

for (const movie of topMovies) {
    const li = document.createElement("li");
    listEl.append(li);

    li.innerText = movie;
}

console.log(listEl.childNodes);
listEl.childNodes[1].remove();

const name = "Bob Ross";
let greeting = `Hej, ${name}! Lär mig allt du kan!`;
console.log(greeting); //Hej, Bob Ross! Lär mig allt du kan!

for (let i = 0; i < 20; i++) {
    const h2 = document.createElement("h2");
    document.body.append(h2);

    h2.innerText = `Element number ${i + 1}`;

    h2.style.backgroundColor = `hsl(${i * 20}, 70%, 80%)`;
}

addElement("p", "första elementet", "hotpink");
addElement("h1", "Rubrik", "hsl(20, 100%, 50%");

function addElement(elementType, text, color) {
    const element = document.createElement(elementType);
    document.body.append(element);

    element.innerText = text;
    element.style.color = color;
}
