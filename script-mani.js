/**
 * Main Entry Point
 */
window.onload = function () {
  /**
   * Init board object
   * -------------------------------------------------------
   */
  var boardElement = document.getElementById("board");
  var board = Board(boardElement);

  /**
   * Handle Form Submition
   * -------------------------------------------------------
   */
  var formSubmit = document.getElementById("submit");
  formSubmit.addEventListener("click", function (event) {
    event.preventDefault();

    // get form values
    var typeOption = document.getElementById("type");
    var typeValue = typeOption.value;
    var colorValue = document.getElementById("color").value;
    var speedValue = document.getElementById("speed").value;
    var filenameOption =
      typeOption.options[document.getElementById("type").selectedIndex];
    var filenameValue = filenameOption.dataset.filename;

    // test values present
    if (!typeValue && !colorValue && !filenameValue && !speedValue) return;

    // init car object
    let car = new Car(typeValue, colorValue, filenameValue, speedValue);
    // add car to the board
    board.addCar(car);
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
var Car = function (type, color, filename, speed) {
  this.type = type;
  this.color = color;
  this.filename = filename;
  this.speed = speed;

  return Object.create(this);
};

var Board = function (domElement) {
  this.cars = [];
  this.element = domElement;

  this.addCar = function (car) {
    this.cars.push(car);
  };

  this.startRace = function () {};
  this.selectCar = function () {};

  return Object.create(this);
};
