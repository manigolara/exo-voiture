var path = {
  img: "../images/",
};

var board = null;
// var cars = [];
// var car = null;

window.onload = function () {
  /**
   * Init board object
   * -------------------------------------------------------
   */
  var boardElement = document.getElementById("board");
  board = Board(boardElement);
  console.log(board);
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
    var car = Car(typeValue, colorValue, filenameValue, speedValue);
    console.log(car);
    // add car to the board
    board.addCar(car);

    var startSubmit = document.getElementById("start");
    // test can start
    if (board.canStart()) {
      formSubmit.setAttribute("disabled", "");
      startSubmit.removeAttribute("disabled");
    }
  });

  /**
   * Handle Start Submition
   * -------------------------------------------------------
   */
  var startSubmit = document.getElementById("start");
  startSubmit.addEventListener("click", function () {
    board.startRace();
  });
};

/**
 * Objects
 */
var Car = function (type, color, filename, speed) {
  // Private function
  function createElement(filename, color) {
    var img = document.createElement("img");
    img.src = path.img + filename;
    img.style.backgroundColor = color;
    img.className = "cars";
    return img;
  }

  // Public methods
  return {
    type: type,
    color: color,
    filename: filename,
    speed: speed,
    element: createElement(filename, color),
  };
};

var Board = function (domElement) {
  var cars = [];
  var rootElement = null;

  function createCarsElement(rootElement) {
    var carsElement = document.createElement("div");
    carsElement.className = "cars";
    rootElement.appendChild(carsElement);
    return carsElement;
  }

  function addCars(car) {
    console.log(car);
  }
  // Public properties and methods
  return {
    cars: cars,
    rootElement: domElement,
    carElement: createCarsElement(domElement),
    addCars: addCars(car),
  };
};

var Board2 = {
  cars: [],
  rootElement: null,
  carsElement: null,
  offset: 100,
  top: 100,

  create: function (domElement) {
    this.cars = [];
    // board element
    this.rootElement = domElement;
    // car element
    this.carsElement = document.createElement("div");
    this.carsElement.className = "cars";
    // append car to root
    this.rootElement.appendChild(this.carsElement);
    // return object
    return Object.create(this);
  },

  addCar: function (car) {
    if (!this.canStart()) {
      car.element.style.top = this.top + "px";
      this.top += this.offset;
      this.carsElement.appendChild(car.element);
      // console.log(car);
      this.cars.push(car);
    }
  },

  canStart: function (cars) {
    return this.cars.length == 4;
  },

  startRace: function () {
    this.cars.forEach(function (car) {
      // car.element.style.left = "100px";
      // console.log(car);
    });
  },
  selectCar: function () {},
};
