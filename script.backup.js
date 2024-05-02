var count = 0;
/**
 * Main Entry Point
 */
window.onload = function () {
  /**
   * Handle Form Submition
   * -------------------------------------------------------
   */
  let formSubmit = document.getElementById("submit");

  var typeOption = document.getElementById("type");

  var typeValue = typeOption.value;
  var colorValue = document.getElementById("color").value;
  var speedValue = document.getElementById("speed").value;
  var filenameOption =
    typeOption.options[document.getElementById("type").selectedIndex];
  var filenameValue = filenameOption.dataset.filename;
  console.log(filenameValue);

  formSubmit.addEventListener("click", (event) => {
    event.preventDefault();

    var car = new Car(typeValue, colorValue, speedValue, filenameValue);

    var boardElement = document.getElementById("board");
    var board = new Board(boardElement);

    board.addCar(car);

    var cars = new Cars();
    cars.push(car);

    // console.log(board.cars);
  });
  /**
   * Handle Start Submition
   * -------------------------------------------------------
   */
  let startSubmit = document.getElementById("start");

  startSubmit.addEventListener("click", function () {});
};

/**
 * Objects
 */
var Car = function (type, color, speed, filename) {
  this.type = type;
  this.color = color;
  this.speed = speed;
  this.filename = filename;

  return Object.create(this);
};

var Board = function (domElement, cars) {
  var cars = [];

  this.element = domElement;

  this.addCar = function (car) {
    cars.push(car);

    var carElement = document.createElement("div");
    carElement.classList.add("car");
    carElement.style.backgroundColor = car.color;
    this.element.appendChild(carElement);
  };

  this.create = function () {};
  this.startRace = function () {};
  this.selectCar = function () {};

  return Object.create(this);
};

var Cars = function (car) {
  this.cars = [];

  this.push = function () {
    this.cars.push(car);
  };
};

/*var Board = function (domElement) {
  this.element = domElement;
   this.cars=[];
   this.addCar = function(car){
    this.cars.push(car);
    var carElement = document.createElement("div");
    carElement.innerHTML = "Type: " + car.type + ", Couleur: " +car.color +", Vitesse: " + car.speed;
    this.element.appendChild(carElement);
   };
};*/
