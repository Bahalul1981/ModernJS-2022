// OBJECT

let bahalul = {
  favioretFoods: ["Biriyani", "Khisuri", "Lassi"],
  name: "Arvid Dawn Amin",
  age: 38,
  height: 75,
  address: {
    house: "Vårbergsvägen-139",
    lgh: 1302,
    area: "Skärholmen",
    city: "Stockholm",
    country: "Sweden",
  },

  profession: function () {
    console.log(`You are modern front-end developer.`);
    let newElement = this.favioretFoods;
    newElement.forEach((elem) => {
      console.log(elem);
    });
  },
};

const learningObjectButton = document.querySelector(".learning-object-button");
const objectMainDiv = document.querySelector(".object-display-div");
let objectDom = () => {
  console.log(bahalul.profession());
  let name = bahalul.name;
  let age = bahalul.age;
  let height = bahalul.height;
  let address = bahalul.address;
  let newAddress = `House:${address.house}</br> Legenhet: ${address.lgh}</br> City: ${address.city}</br> Country: ${address.country}</br>`;
  let profession = bahalul.profession();
  console.log(profession);
  let creatNewElem = document.createElement("h3");
  creatNewElem.innerHTML = `Name: ${name} </br> Age: ${age} </br> Height: ${height}</br> Address: ${newAddress}</br> Profession: ${profession} `;
  objectMainDiv.appendChild(creatNewElem);
};
learningObjectButton.addEventListener("click", objectDom);

let alvin = {
  alvinsCharacter: [
    {
      name: "Alvin Dawn",
      age: 6,
      favouritFood: "milk and mash potato",
    },
    {
      name: "Smile and eat fooe",
      age: 7,
      favouritFood: "everything",
    },
  ],
};
let arrayOfAlvin = alvin.alvinsCharacter;
arrayOfAlvin.forEach((newelementofalvin) => {
  console.log(
    `My babys Name: ${newelementofalvin.name}.My babys Age: ${newelementofalvin.age}.My babys Favourite food: ${newelementofalvin.favouritFood}.`
  );
});

//STACK: Value of variable. Here you can work with every changes.

let myAge = 40;
let newAge = 45;
console.log(` My new age is: ${newAge}`);

newAge = 100;
console.log(`  My new age is: ${newAge}`);

//HEAP:Value of object. It will reacive always last change of object and will be apply everywhere.

let sweden = {
  country: "It is a nordic country",
  economy: "Economy is enough good",
};

let norway = sweden;
console.log(
  `Country name is: ${norway.country} and economy is: ${norway.economy}`
);

sweden = {
  country: "Its a really poor country",
  economy: "Economy is not enough good",
};
console.log(
  `Country name is: ${norway.country} and economy is: ${norway.economy}`
);
