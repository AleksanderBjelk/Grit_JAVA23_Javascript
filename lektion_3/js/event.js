const btn = document.querySelector("button");

btn.addEventListener("click", (event) => {
    console.log("Click", event);
});

console.log("detta händer utan att koden stannas upp");

btn.addEventListener("mouseenter", () => {
    updateElements("skyblue", "over");
});

btn.addEventListener("mouseleave", () => {
    updateElements("red", "left");
});

function updateElements(color, text) {
    document.body.style.backgroundColor = color;
    btn.innerText = text;
}
