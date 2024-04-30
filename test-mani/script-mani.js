// // var color = ["bleu", "green", "rouge"];
var cars = [
  {name: "Berline", value: "berline", filename: "berline.png"},
  {name: "citadine", value: "citadine", filename: "citadine.png"},
  {name: "Familial", value: "familial", filename: "familial.png"},
];
// var type = {
//   berline: {name: "berline", filename: "berline.png"},
//   citadine: {name: "citadine", filename: "citadine.png"},
//   familial: {name: "familial", filename: "familial.png"},
// };

var color = [
  {"name-fr": "bleu", "name-en": "blue"},
  {"name-fr": "vert", "name-en": "green"},
  {"name-fr": "rouge", "name-en": "red"},
];

var Car = {
  // Propriété
  type: "",
  color: "",
  speed: 0,
  filename:

  create(type, color) {
    this.type = type;
    this.color = color;
    return this;
  },
  move() {},
};

window.onload = function (event) {
  var selectedType = document.getElementById("type-select");
  var selectedColor = document.getElementById("color-select");

  for (ele of cars) {
    var typeOption = document.createElement("option");
    typeOption.text = ele["name"];
    typeOption.text = ele["value"];
    selectedType.appendChild(typeOption);
  }

  for (ele of color) {
    var typeOption = document.createElement("option");
    typeOption.text = ele["name-fr"];
    selectedColor.appendChild(typeOption);
  }

  var formulaire = document.getElementById("formulaire");
  var submit = document.getElementById("submit");
  submit.addEventListener("click", function (event) {
    event.preventDefault();

    var board = document.getElementById("board");

    if (!selectedType && !selectedColor) return;

    var selectedCar = Car.create(selectedType, selectedColor);

    var img = document.createElement("img");
    img.src = "images/" + selectedCar[filename] + ".png";
    img.style.backgroundColor = selectedColor;

    board.appendChild(img);
  });
  formulaire.addEventListener("click", function () {});

  // function addCar(event) {
  //   event.preventDefault();

  //   var formulaire = document.getElementById("formulaire");
  //   formulaire.addEventListener("submit", function () {});

  //   if (selectedType && selectedColor) {
  //     var selectedCar = car.create(selectedType, selectedColor);

  //     var voitureDiv = document.getElementById("voiture");
  //     var newImg = document.createElement("img");
  //     newImg.src = "images/" + selectedCar.filename + ".png";
  //     newImg.style.backgroundColor = selectedColor;
  //     voitureDiv.appendChild(newImg);
  //   }

  //   var board = document.getElementById("board");

  //   var domEle = document.createElement("img");
  //   // domEle.src =

  //   var car = car.create(cars, color);
  //   cars.push(car);
  // }

  // function startGame() {}
};
