console.log("Question No =1");

let tempInCelsius: number = 23;
// to convert the temperature from celsius to fahrenheit
// formula for celsius to fahrenheit
// F=9/5(C) +32
let fahrenheit: number = 9 / 5 * (tempInCelsius) + 32;
console.log(`fahrenheit ${fahrenheit}`);

// to convert the temperature from fahrenheit
// formula for fahrenheit to celsius
// C=5/9(F-32)
let tempInFahrenheit: number = 67;
let celsius: number = 5 / 9 * (tempInFahrenheit - 32);
console.log(`celsius ${celsius}`);


console.log("Question No -2");

// to find the percentage of a number

let value: number = 8;
let totalNumber: number = 16;
let percentage: number = value / totalNumber * 100;
console.log(percentage);


console.log("Question No-3");

// no of days into weeks and days

let givenDay: number = 30;
let weeks: number = givenDay / 7;
let remainder: number = givenDay % 7;
let newGivenDay = (Math.floor(weeks));
console.log(`week=${newGivenDay}`);
console.log(`days=${remainder}`);


console.log("Question No-4");

// let priceUnit:string="$";

let price: number = 50;
if (price > 100) {
    let discount: number = (price / 100) * 10;
    let DiscountPrice: number = price - discount;
    console.log(`After Discount ${DiscountPrice}$`);
}
else {
    let discount: number = (price / 100) * 5;
    let DiscountPrice: number = price - discount;
    console.log(`After Discount ${DiscountPrice}$`);
}


console.log("Question No -5");

let age: number = 19;
if (age >= 0 && age <= 13) {
    console.log(`Child age is ${age}`);
}
else if (age >= 13 && age <= 19) {
    console.log(`Teenager age is ${age}`);
}
else {
    console.log(`Adult age is ${age}`);
}



console.log("Question No -6");

let temperatureMeasuresIn: string = "Celsius";

let temperature: number = -2;

if (temperature <= 18 && temperature >= -2) {
    console.log("it is good to wear sweater");

}
else {
    console.log("it is advised to wear cloth according to their choice");

}


console.log("Question No -7");

// to check out the numbeer is divided by 3 and 5 or both

let givenNumber: number = 9

let divided1: number = givenNumber / 3
let divided2: number = givenNumber / 5
console.log(divided1);
console.log(divided2);
if (divided1 != 0) {
    console.log("is divisible");

}
else {
    console.log("does not divisible");

}
if (divided2 != 0) {
    console.log("is divisible");

}
else {
    console.log("does not divisible");

}

if (divided1 != 0 && divided2 != 0) {
    console.log("yes both is divisible");

}
else {

    console.log(" both does not divisible");
}



console.log("Question No -8");

let year: number = 2028;
//leapYears of half centuary=2000, 2004, 2008, 2012, 2016, 2020, 2024, 2028, 2032, 2036, 2040, 2044, and 2048
let divide: number = year % 4
console.log(divide)
// we check out the loop year by dividing by 4, if answer is zero(0), then it is loop year.     
if (divide == 0) {
    console.log("yes it is loop year");

}
else {
    console.log("it is not loop year");

}

console.log("Question No -9")


let givenNumbers: number = 7

if (givenNumbers == 1) {
    console.log("The day is monday");
}

else if (givenNumbers == 2) {
    console.log("The day is tuesday");
}
else if (givenNumbers == 3) {
    console.log("The day is wednesday");
}
else if (givenNumbers == 4) {
    console.log("The day is thursday");
}
else if (givenNumbers == 5) {
    console.log("The day is friday");
}
else if (givenNumbers == 6) {
    console.log("The day is saturday");
}
else if (givenNumbers == 7) {
    console.log("The day is sunday");
}
else {
    console.log("Invalid number please try again");

}


console.log("Question No -10");


let units: number = 550;


if (units > 100 && units < 200) {
    let tax: number = (10 / 100) * units
    let bill: number = tax + units
    console.log(`newBill ${bill}`);
}
else if (units > 200 && units < 500) {
    let tax: number = (15 / 100) * units
    let bill: number = tax + units
    console.log(`newBill ${bill}`);
}

else if (units > 500) {
    let tax: number = (25 / 100) * units
    let bill: number = tax + units
    console.log(`newBill ${bill}`);
}

else {
    console.log(`"there is no tax" bill is${units}`);

}



























































