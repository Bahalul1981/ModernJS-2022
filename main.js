// HERE SOME DOM MENUPOLATION FOR PRACTISE

let secondtdiv = document.querySelector(".secondtdiv");

// VARIABLES

// I cannot const variable more then one time
const amin = "arvid dawn amin";
console.log(amin);
// amin = "dewans family";
// console.log(amin);

//Ican use let variable more the one time
let dewan;
dewan = "Dewan family";
console.log(dewan);
dewan = "Perfect family in narayanpur";
console.log(dewan);

//STRING

let myEducation;
myEducation =
  "I am a front-end developer. I have been compleater my education from Nackademin SOLNA";

//getting characters(what is the latter in index number 19)
console.log(myEducation[19]);

//To get string length of number
console.log(myEducation.length);

//To make string to upper case
console.log(myEducation.toLocaleUpperCase());
//To make string to lower case
let newMyEducation = myEducation.toLocaleLowerCase();
console.log(newMyEducation);

//Getting index of string by sending an argument
let index = myEducation.indexOf("r");
let lastindx = myEducation.lastIndexOf("a");
console.log(index, lastindx);

//MORE STRING METHODS
//From whitch number of index to whitch number of index that I want to keep
//Boath method are working same way
let slice = myEducation.slice("0", "10");
let substr = myEducation.substring("0", "10");
console.log(slice);

//replace
let replace = myEducation.replace(
  "I am a front-end developer",
  "I am a cyber cicuraty officer"
);
console.log(replace);

//NUMBERS

let guessAnumber = 700;

let add = guessAnumber + 700;
let substract = guessAnumber - 400;
let divide = guessAnumber / 2;
let multipul = guessAnumber * 700;

console.log(add, substract, divide, multipul);

// More with numbers
let guessNewNumber = 200;
const plusOne = guessNewNumber + 1;
const minusOne = guessNewNumber - 1;
const addMoreNumbers = (guessNewNumber += 300);
const substractMoreNumbers = (guessNewNumber -= 700);

console.log(plusOne, minusOne, addMoreNumbers, substractMoreNumbers);

//TEMPLET STRING
console.log(
  `My plus one is ${plusOne}\n Minus one is: ${minusOne} \n addMoreNumbers is${addMoreNumbers}`
);
// To display in browser
document.querySelector(
  ".firstdiv"
).innerHTML = `<h1>My plus one is ${plusOne} </h1> \n<h2>Minus one is: ${minusOne} </h2> \n<h2>addMoreNumbers is${addMoreNumbers}</h2>
 <h3>Substrac tMore Numbers is: ${substractMoreNumbers} \n</h3> <p>Multipul numberes is: ${multipul} </p>`;

// ARRAY

const myFamily = ["Amin", "Alvin", "Farhana", "Bindu"];

// To get element by index
console.log(myFamily[2]);

// To change element of array
myFamily[0] = "Bahalul Dewan";
console.log(myFamily);

// More methood of Array

//1. Concat
const newMyFamily = ["Bahalul", "Dewan", "Shoma", "Bindu dewan"];
const myfamilyConcat = myFamily.concat(newMyFamily);
console.log(myfamilyConcat);
//2. Join
let JoinArryWithAnything = myfamilyConcat.join("+");
console.log(JoinArryWithAnything);

//3.push("Shabbie") (Its gonna add in the end)
let pushMyfamilyConcat = myfamilyConcat.push("Sabbir");
//3.pop() (Its gonna take out from the end)
let pophMyfamilyConcat = myfamilyConcat.pop();

//5. unshift("Hello") method add new element in the first array element
let unshiftMyfamilyConcat = myfamilyConcat.unshift("Shafayet");
//4. shift() method removes the first array element and "shifts" all other elements to a lower index.
let shifthMyfamilyConcat = myfamilyConcat.shift();

//Change element in array by index
const moreElementInArray = ["mango", "Lichi", "Jackfruit"];
moreElementInArray[0] = "Banana";
//Change element in array by index
delete moreElementInArray[0];
console.log(moreElementInArray);

// splice() Replace element in array by index
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

//splce() Also to remove elements without leaving "holes" in the array:
const fruitss = ["Banana", "Orange", "Apple", "Mango"];
fruitss.splice(0, 2);
console.log(fruitss);

//RETURN KEWORD
// return keyword used only inside in a function
// By "return" keyword you can return anythings and save it to that function
// Its can be string, blooens,object, function or anythings
// Two return kew-word doesn't work in a same object.If you use you need to put the in IF else codition
// if(jdsj){return "I am fine"} else {retun "I am not fine"}

let returnstring = (name) => {
  //return string string by name
  return "My name is: " + name;
};
console.log(returnstring("Arvid dawn Amin"));

const returnObject = () => {
  return (bahalul = {
    name: "Alvin Dawn Amin",
    age: 37,
  });
};
const resultOfReturnObject = returnObject();
console.log(`His name is:${resultOfReturnObject.name}
Age: ${resultOfReturnObject.age}`);

//BOOLEANS
let myName = "Arvid dawn amin";

console.log(myName === "sdfjkk"); // return true
console.log(myName === "Arvid dawn amin"); // return false

//TYPE CONVERTION
const convertStringtonumber = "500";

//To check what type it is.
console.log(typeof convertStringtonumber);

//Convert string to a number.
let newNumber = Number(convertStringtonumber);
console.log((newNumber += 300));

//Convert number to string.
let numberConvertToString = 39797;
let newnumberConvertToString = String(numberConvertToString);
console.log((newnumberConvertToString += 700));

//LOOPS

// For Loops
let myFavouriteFoods = [
  "Mango",
  "Lichi",
  "Jackfruite",
  "Banana",
  "Mandarin",
  "Orange",
  "Passion",
];

for (let i = 0; i < myFavouriteFoods.length; i++) {
  let arrayResult = myFavouriteFoods[i];
  secondtdiv.innerHTML += ` ${arrayResult} <br>`;
}

// While loop
i = 0;
while (i < myFavouriteFoods.length) {
  console.log(`This is the result of while loop: ${myFavouriteFoods[i]}`);
  i++;
}

//Foreach loop
myFavouriteFoods.forEach((elem) => {
  console.log(`This is the result of foreach loop ${elem}`);
});

// IF CONDITION

const checkIfCondition = "My e-mail address is bahalul_tuk yahoo.com";

//And condition
if (checkIfCondition.length > 20 && checkIfCondition.includes("@")) {
  console.log(
    `Your AND condition is true and here your result: ${checkIfCondition}`
  );
}
// Or condition
else if (checkIfCondition.length > 20 || checkIfCondition.includes("@")) {
  console.log(
    `Your OR condition is true and here your result: ${checkIfCondition}`
  );
} else {
  console.log("You have nothing avobe of them");
}

// If condition always run with true conditions.Not with false condition.So we need to convert in true.
let myNewName = true;
if (!myNewName) {
  console.log(
    " If condition always run with true conditions.Not with false condition.So we need to convert in true."
  );
} else {
  console.log("You are checking if else conditions by boolean");
}

// Break condition by IF Ealse

let breakNumbers = [10, 20, 4, 45, 65, 132, 867, 323, 4, 352];

for (let i = 0; i < breakNumbers.length; i++) {
  let resultOfBreakNumber = breakNumbers[i];
  if (resultOfBreakNumber === 20) {
    console.log(
      "You have been missd the number of '20' by by usining continue methood in if condition "
    );
    continue;
  }

  console.log(resultOfBreakNumber);

  if (resultOfBreakNumber === 65) {
    console.log("you are in break poients.The cod will not continue");
    break;
  }
}
