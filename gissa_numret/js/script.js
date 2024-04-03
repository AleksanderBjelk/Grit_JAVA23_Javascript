const btn = document.querySelector("button");

const randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);

let guesses = 0;

const form = document.querySelector("form");
form.addEventListener("submit", handleGuess);

function handleGuess(event) {
    event.preventDefault();
    const numberGuess = document.querySelector("input").value;
    const resultEl = document.querySelector("#resultMessage");

    guesses++;

    if (numberGuess > randomNumber) {
        resultEl.innerText = "Gissningen är för hög!";
    } else if (numberGuess < randomNumber) {
        resultEl.innerText = "Gissningen är för låg!";
    } else {
        resultEl.innerText = `Gissning är rätt! Det tog dig ${guesses} gissningar.`;
        document.querySelector("button").disabled = true;
    }
}
