const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const breed = document.querySelector("#breedInput").value;
    const amount = document.querySelector("#amountInput").value;

    console.log(breed, amount);

    const url = `https://dog.ceo/api/breed/${breed}/images/random/${amount}`;

    fetch(url)
        .then((response) => {
            console.log(response);
            if (response.status == 404) {
                throw new Error("Breed not found");
            } else if (response.ok) {
                return response.json();
            } else {
                throw new Error("Something went wrong");
            }
        })
        .then(displayDogImages)
        .catch(displayErrorMessage);
});

function displayErrorMessage(error) {
    console.log(error);
    const imgContainer = document.querySelector("#dog-container");
    imgContainer.innerHTML = "";

    const errorEl = document.createElement("h1");
    imgContainer.append(errorEl);
    errorEl.innerText = error.message;
}

function displayDogImages({ message }) {
    // console.log(obj);
    // const {message} = obj;

    console.log(message);
    const imgContainer = document.querySelector("#dog-container");
    imgContainer.innerHTML = "";

    for (const imgUrl of message) {
        const imgEl = document.createElement("img");
        imgContainer.append(imgEl);
        imgEl.src = imgUrl;
    }
}
