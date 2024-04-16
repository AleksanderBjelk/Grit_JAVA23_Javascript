//  const url = `https://dog.ceo/api/breed/${breed}/images/random/${amount}`;

async function getDogImages(breed, amount) {
    const url = `https://dog.ceo/api/breed/${breed}/images/random/${amount}`;

    // console.log('in getDogImages, before fetch');

    const response = await fetch(url);
    // console.log('in getDogImages, response json');
    const data = await response.json();

    // console.log('in getDogImages, after json');
    return data.message;
}

function displayDogImages(dogUrArray) {
    // console.log(obj);
    // const {message} = obj;

    const imgContainer = document.querySelector("#dog-container");
    imgContainer.innerHTML = "";

    for (const imgUrl of dogUrArray) {
        const imgEl = document.createElement("img");
        imgContainer.append(imgEl);
        imgEl.src = imgUrl;
    }
}

//console.log(getDogImages('hound', 3));

// console.log('before get dog images');

//getDogImages(breed, amount).then(displayDogImages);

// console.log('after get dog images');

const form = document.querySelector("form");
form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const breed = document.querySelector("#breedInput").value;
    const amount = document.querySelector("#amountInput").value;

    console.log(breed, amount);
    const images = await getDogImages(breed, amount);
    displayDogImages(images);
});
