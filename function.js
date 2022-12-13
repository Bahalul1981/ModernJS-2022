//  FUNCTION

//Function Declaretion: I can call this function even before.

const functionDisplay = document.querySelector(".function-declaretions");
const functionDeclaretionElement = document.querySelector(
  ".function-declaretion"
);
document
  .querySelector(".function-expration")
  .addEventListener("click", function () {
    declarationFunction();
    function declarationFunction() {
      functionDeclaretionElement.innerHTML =
        "Function declaretion: I can call this function even before initialization.";
    }
  });

//Function Expretion:I cannot call this function before.I have to call this function after.
document
  .querySelector(".function-declaration")
  .addEventListener("click", function () {
    const exprationFunction = function (text) {
      console.log(text);
      let creatPelement = document.createElement("p");
      creatPelement.classList.add("created-p-element-for-expration-function");
      creatPelement.innerHTML = text;
      functionDisplay.appendChild(creatPelement);
    };
    exprationFunction(
      "Function Expretion:I cannot call this function before.I have to call this function after."
    );
  });

// More function expretion

let moreFunctionExpretion = function (a, b) {
  let result = a * b;
  return result;
};
let storeMoreFunctionExpretion = moreFunctionExpretion(3, 4);

console.log(storeMoreFunctionExpretion);

// More function expretion
let greetMe = function (a, b) {
  let saveData = `Hello ${a}. Hope you are fine ${b}`;
  return saveData;
};
// Can use this data anytime
let storeGreetme = greetMe("Dawn Amin Ahmed", "How are you today");
console.log(storeGreetme);

// Arrow function with Return keword.

const totalBestCountries = ["Sweden", "Australia", "Canada", "England", "USA"];

let bestCountry = () => {
  let arrayResultOfBestCountries = "";
  for (let i = 0; i < totalBestCountries.length; i++) {
    arrayResultOfBestCountries += totalBestCountries[i];
  }
  return arrayResultOfBestCountries;
};
let store = bestCountry();
console.log(store);

// CALCULATOR FUNCTION

let calculator = (a, b) => {
  let sumOfnumber = a * b;
  return sumOfnumber;
};
console.log(calculator(12, 33));

// CALLBACK FUNCTION

let callbackfunction = (a) => {
  console.log(a * 30);
};

let chieldOfCallBack = () => {
  return 50;
};
callbackfunction(chieldOfCallBack());

// TO DO LIST WITH ARROW FUNCTION.
const callBackFunctionDisplay = document.querySelector(".call-back-function");
const addButtonForToDo = document.querySelector(".add-your-name");

let addToDoFunctioon = () => {
  const callBackDisplay = document.querySelector(
    ".callBack-function-display"
  ).value;
  let newList = document.createElement("li");
  newList.innerHTML = callBackDisplay;
  callBackFunctionDisplay.appendChild(newList);
};

addButtonForToDo.addEventListener("click", addToDoFunctioon);

// method :A method is a function which is a property of an object. There are two kinds of methods: instance methods which are built-in tasks performed by an object instance, or static methods which are tasks that are called directly on an object constructor.

let methodFunction = [
  "Mango",
  "Lichi",
  "Ananas",
  "Jackfruit",
  "Orange",
  "Papaiya",
  "Mandarin",
  "Banana",
  "Grap",
];

let functionMethod = () => {
  let functionmethod = document.querySelector(".function-method");
  methodFunction.forEach((elem, index) => {
    let creatElement = document.createElement("h2");
    creatElement.innerHTML = `NUMBER:-${index},  NAME:${elem}`;
    functionmethod.appendChild(creatElement);
    return creatElement;
  });
};
document
  .querySelector(".function-method-button")
  .addEventListener("click", functionMethod);
