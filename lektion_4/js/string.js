//användar input du vet inte om användaren har lagt till space av misstag

const testString = "    det här      är    en    test     string";

console.log(testString);

const trimmedString = testString.trim();

console.log(trimmedString);

//Byt ut space mot /
//se till att det inte finns några dubbel-space

console.log(trimmedString.replaceAll(' ', '/'));
console.log(trimmedString.replaceAll(' ', ''));