var count = 0;
var carsArray = [];
// var test = 0;
var voiture = {
  type: null,
  couleur: null,
  vitesse: null,
  top: 0,
  left: 0,
  element: null,
};
window.onload = function () {
  var formElement = document.getElementById("formulaire");
  formElement.addEventListener("submit", function (event) {
    //var audio = new Audio("https://lasonotheque.org/UPLOAD/mp3/0600.mp3");
    //audio.play();
    event.preventDefault();
    afficherVoiture();
    count++;
    console.log(count);
    if (count >= 4) {
    }
  });
  function afficherVoiture() {
    var selectedCar = document.getElementById("car-select").value;
    var selectedColor = document.getElementById("color-select").value;
    var selectedSpeed = document.getElementById("speed").value;

    if (selectedCar && selectedColor && selectedSpeed) {
      var voitureDiv = document.getElementById("voiture");
      var newImg = document.createElement("img");
      newImg.src = "images/" + selectedCar + ".png";
      newImg.style.backgroundColor = selectedColor;
      var maVoiture = Object.create(voiture);
      maVoiture.type = selectedCar;
      maVoiture.couleur = selectedColor;
      maVoiture.vitesse = selectedSpeed;

      var nbVoit = carsArray.length;
      var top = 60 * nbVoit;
      maVoiture.top = top;
      newImg.style.top = top + "px";

      maVoiture.element = newImg;
      carsArray.push(maVoiture);

      voitureDiv.appendChild(maVoiture.element);

      // console.log(carsArray);
    }
  }

  document.getElementById("course").addEventListener("click", function () {
    //if (carsArray.length < 4) return;
    // setInterval(race, 1000);
    var board = document.getElementById("board");
    var boardBound = board.getBoundingClientRect().right;

    // test
    var winners = [];
    carsArray.forEach(function (car) {
      var speed = car.vitesse / 2;
      var i = 0;
      var myInterval = setInterval(function () {
        i += speed;
        car.left = car.left + car.vitesse;
        car.element.style.left = i + "px";
        var carBound = car.element.getBoundingClientRect().right;
        if (carBound > boardBound) {
          console.log("finished");
          winners.push(car);
          clearInterval(myInterval);
          if (winners.length == 4) {
            console.log("DONE");
            // board.innerHTML = "";
          }
        }
      }, 100);
    });
  });
};
/*
const chatRect = chat.getBoundingClientRect();

croquettes.forEach((croquette, index) => {
  const croquetteRect = croquette.getBoundingClientRect();

  // Vérifier s'il y a chevauchement entre le chat et la croquette
  if (
    chatRect.top < croquetteRect.bottom &&
    chatRect.bottom > croquetteRect.top &&
    chatRect.left < croquetteRect.right &&
    chatRect.right > croquetteRect.left
  ) {
    // Si les positions se chevauchent, le chat a mangé la croquette
    mangerCroquette(croquette, index);
  }
});*/
