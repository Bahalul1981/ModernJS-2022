// Inner text: Target a text by dom and change them by 'innetText'. To add new line (append) use +=
let addTextWithNewText = document.querySelector(".dom-manipulation-element");

addTextWithNewText.innerText += " MANIPULATION";

// Inner HTML: I can target main div also and can change inside the div by same way.
let addTextWithInsideDiv = document.querySelector(".dom-menipulation");
addTextWithInsideDiv.innerHTML += "<h1>New element</h1>";

// This is my database
const myDatabase = [
  "Arbetsförmeldningen",
  "Försäkringkassan",
  "Pollice Myndiheten",
  "Scanina",
  "Skatteverket",
];

let addingNewElementByJs = document.querySelector(".adding-new-element-by-js");
myDatabase.forEach(
  (newelem) => (addingNewElementByJs.innerHTML += `<p>${newelem}</br></p>`)
);

// GET ATTRIBUTE:
let getTheLink = document.querySelector(".set-attribute-for-atag");
console.log(getTheLink.getAttribute("href"));

// SET ATTRIBUTE:
getTheLink.setAttribute("href", "https://www.facebook.com");

// CREAT SET ATTRIBUTE

let setAttributeImage = document.querySelector(".set-attribute-image");
// target src then change the element.
setAttributeImage.setAttribute("src", "/image/aminalvin.jpg");

// I NEED TO WRITE THIS COD IF WANT CREAT COMPLEATLY CREAT NEW IMAGE IN JAVA SCRIPT
// let creatAnImage = document.createElement("img");
// addTextWithInsideDiv.appendChild(creatAnImage);

// CLASS/ID
let getAllP = document.querySelectorAll("p");
getAllP.forEach((p) => {
  const newcolor = p.textContent;
  if (newcolor.includes("success")) {
    p.classList.add("success-massage");
  } else if (newcolor.includes("normal")) {
    p.classList.add("gray-color");
  } else if (newcolor.includes("error")) {
    p.classList.add("red-color");
  }
});
