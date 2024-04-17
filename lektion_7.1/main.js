import DogCard from "./modules/DogCard.js";

const dogCards = [];

dogCards.push(new DogCard('pomeranian'));
dogCards.push(new DogCard('hound'));
dogCards.push(new DogCard('african'));
dogCards.push(new DogCard('pitbull'));

//dogCard.getImage();
//dogCard.createCard();

console.log(dogCards[0].getBreed,  dogCards[1].getBreed);