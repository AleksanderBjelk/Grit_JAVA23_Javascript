const baseUrl = "https://dog.ceo/dog-api/";

const url1 = "https://dog.ceo/api/breed/";

const form = document.querySelector("form");

const dogContainer = document.querySelector("#dog-container");


for(i = 1; i <10; i++){
form.addEventListener('submit', event => {
    event.preventDefault();
    const searchTerm = document.querySelector("input").value;
    
    console.log(searchTerm);
  
    const doggy = url1 + `${searchTerm}/images/random`;

fetch(doggy)
    .then(response => response.json()
    .then(displayDog));
});
}




function displayDog({message}){
    const imgEl = document.createElement('img');
    imgEl.src = message;
    console.log(message);
    dogContainer.append(imgEl)
}

