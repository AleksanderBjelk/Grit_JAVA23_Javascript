const car = {
    make: 'volvo',
    model: 'S80',
    year: 1996,
    drive(velocity){
        console.log(`i'm driving at ${velocity} km/h`);

    }

}



console.log(car);
console.log(car.make);

car.drive(140);


car.make='saab';
console.log(car.make);

console.log(car);

car.keyCode = 12345;

console.log(car);

car.mdel = '95';