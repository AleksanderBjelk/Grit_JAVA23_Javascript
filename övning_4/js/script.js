const testString = "If you judge people, you have no time to love them";

const lowerCase =
    "THE SUCCESSFUL WARRIOR IS THE AVERAGE MAN, WITH LASER-LIKE FOCUS";

console.log(testString.toUpperCase());
console.log(lowerCase.toLowerCase());

const string1 = "Learn to val";
const string2 = "ue yourself, which means: t";
const string3 = "o fight for your happiness.";

console.log(string1.concat(string2, string3));

const meaning =
    "The most weird things are the funniest to say, because martians diminish them";

console.log(meaning.replaceAll("weird", "important"));
console.log(meaning.replaceAll("funniest", "hardest"));
console.log(meaning.replaceAll("martians", "words"));

const string4 = "In order to be irreplaceable one must always be different";
const string5 = "hose who dare to fail miserably can achieve greatly";
const string6 = "Well done is better than well said";
const string7 = "You are what you believe yourself to be";

const lastChar = string4[string4.length - 1];
console.log(lastChar);

const egenString = "15 minuter en kvart - Babban";
const splitt = egenString.split("a");
console.log(splitt);

//array
const arr1 = [4, 23, 65, 23, 1, 2, 88, 54, 103, 23, 53, 65, 2, 54, 33, 24, 100];
const found = arr1.find((Element) => Element == 33);
console.log(found);

const arr2 = [4, 23, 65, 23, 1, 2, 88, 54, 103, 23, 53, 65, 2, 54, 33, 24, 100];
console.log(arr2.pop());
console.log(arr2.shift());
console.log(arr2);

const arr3 = [23, 65, 23, 1, 2, 88, 54, 103, 23, 53, 65, 2, 54, 33, 24];
// const result = arr3.filter((arr) => [3]);
//  console.log(result);
//console.log(arr3.keys(3,4,5,6,7));
const sliceee = arr3.splice(2,6);
console.log(sliceee);

console.log(sliceee.reverse());

console.log(arr3.slice());

const result = arr1.filter((Element) => Element > 20 & Element < 70)
console.log(result)

arr1.forEach((element) => console.log(element));

const mapArr = arr1.map(num => num * 2);
console.log(mapArr);

const mapArr2 = arr1.map(num => num % 2 == 0);
console.log(mapArr2);

const mapArr3 = arr1.map(num => num * 3);
console.log(mapArr3);

const mapArr4 = arr1.map(num => num * 2);
console.log(mapArr4);