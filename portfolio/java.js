// first exercise//
let country = "nigeria";
console.log(country);

let continent = "africa";
console.log(continent);

let population = 200000000;
console.log(population);

//second exercise//

let isIsland = false;
console.log(isIsland);

let language;

//third exercise//
language = "Yoruba";
console.log(
  typeof isIsland,
  typeof population,
  typeof country,
  typeof language,
);

const country2 = "nigeria";
const continent2 = "africa";
const isIsland2 = false;
const language2 = "yoruba";

//assignment //
console.log(population / 2);

console.log(population + 1);

let finlandPopulation = 6000000;
console.log(population > finlandPopulation);

console.log(population >= finlandPopulation);

let averageCountryPopulation = 33000000;
console.log(averageCountryPopulation);

console.log(population < averageCountryPopulation);

let description =
  "portugual is in europe, and its 11 million people speak portuguese";
console.log(description);

let country3 = "portugal";
let continent3 = "europe";
let language3 = "portuguese";
let population3 = "11 million";

let description2 = `${country3} is in ${continent3}, and its ${population3} people speak ${language3}`;
console.log(description2);

//taking decisions (if/else statements)//
if (population > 33000000) {
  console.log(
    `${country3}'s population is ${population - averageCountryPopulation} million above average`,
  );
} else {
  console.log(
    `${country3} population is ${averageCountryPopulation - population} million below average`,
  );
}
//step 2:temporarily changing population //
population = 13000000;
if (population > averageCountryPopulation) {
  console.log(
    `${country3}'s population is ${population - averageCountryPopulation} million above average`,
  );
} else {
  console.log(
    `${country3} population is ${averageCountryPopulation - population} million below average`,
  );
}

//change back to original population//
population = 200000000;
if (population > averageCountryPopulation) {
  console.log(
    `${country3}'s population is ${population - averageCountryPopulation} million above average`,
  );
} else {
  console.log(
    `${country3} population is ${averageCountryPopulation - population} million below average`,
  );
}

//temperature converter console practice//
const celsius = 25;
const fahrenheit = (celsius * 9) / 5 + 32;
console.log(`${celsius}°C is ${fahrenheit}°F`);

const isComfortable = celsius >= 15 && celsius <= 25;
console.log(`is ${celsius}°C comfortable (15-25 range) ${isComfortable}`);

//logic operators//

let population4 = 2000000;
let averagePopulation4 = 50000000;
let country4 = "usa";
let language4 = "english";
let isIsland4 = false;

if (language4 === "english" && population4 < averagePopulation4 && !isIsland4) {
  console.log(`you should live in ${country4}`);
} else {
  console.log(`${country4} does not meet your criteria`);
}

//the conditional (ternary) operator//
population > 330000000
  ? console.log(`${country3}'s population is above average`)
  : console.log(`${country3}'s population is below average`);

//Functions//
function describeCountry(country, population, capitalCity) {
  console.log(
    `${country} has ${population} people and its capital city is ${capitalCity}`,
  );
}
describeCountry("finland", 6000000, "helsinki");

describeCountry("nigeria", 200000000, "abuja");
describeCountry("usa", 300000000, "washington dc");
describeCountry("germany", 80000000, "berlin");

//function declaration vs. expression//
function percentageOfWorld1(population, country) {
  console.log(
    `${country}: ${(population / 7900000000) * 100}% of the world population`,
  );
}

percentageOfWorld1(200000000, "Nigeria");
percentageOfWorld1(300000000, "USA");
percentageOfWorld1(80000000, "Germany");

//function expression//
const percentageOfWorld2 = function (population, country) {
  console.log(
    `${country}: ${(population / 7900000000) * 100}% of the world population`,
  );
};

percentageOfWorld2(200000000, "Nigeria");
percentageOfWorld2(300000000, "USA");
percentageOfWorld2(80000000, "Germany");

//arrow function//
const percentageOfWorld3 = (population, country) => {
  console.log(
    `${country}: ${(population / 7900000000) * 100}% of the world population`,
  );
};
percentageOfWorld3(200000000, "Nigeria");
percentageOfWorld3(300000000, "USA");
percentageOfWorld3(80000000, "Germany");

//iteration: the for loop//
for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}

function myCounter() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}
console.log(myCounter()());

//arrays//
let fruits = ["apple", "banana", "orange", "kiwi", "pear"];
console.log(fruits);

fruits.push("mango"); //adds one or more elements to the end of an array and returns the new length of the array.

fruits.pop(); //removes the last element of an array and returns that removed element.

fruits.unshift("grape"); //adds one or more elements to the beginning of an array and returns the new length of the array.

fruits.shift(); //removes the first element of an array and returns that removed element.

console.log(fruits.length); //returns the number of elements in an array.

console.log(fruits.join(", ")); //combines elements of an array into a string, separated by a specified separator (in this case, a comma and a space).

let result = fruits.slice(1, 3); //returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
console.log(result);

fruits.splice(1, 1); //changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. In this case, it removes 1 element at index 1.
console.log(fruits);

let boys = ["john", "mike", "david"];
let girls = ["sarah", "emma", "olivia"];

let allPeople = boys.concat(girls); //combines two or more arrays and returns a new array
console.log(allPeople);

console.log(fruits.at(1)); //returns the element at the specified index (in this case, index 1) of an array. If the index is negative, it counts from the end of the array.
console.log(fruits.at(-1)); //returns the last element of the array

//at(-1); last element of the array
//at(-2); second last element of the arrays

let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(function (number) {
  return number * 2;
});
console.log(doubled);

//arrow function version of the above map function
let doubledArrow = numbers.map((number) => number * 2);
console.log(doubledArrow);

let numbers2 = [1, 2, 3, 4, 5];
let result2 = numbers2.filter((number) => number > 2);
console.log(result2); // Output: [3, 4, 5]

let total = numbers2.reduce((sum, number) => {
  return sum + number;
}, 0);
console.log(total); // Output: 15
