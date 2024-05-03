var count = 0;
var carsArray = [];
var test = 0;
var voiture = {
  type: "citadine",
  couleur: "red",
};
window.onload = function () {
  document
    .getElementById("formulaire")
    .addEventListener("submit", function (event) {
      //var audio = new Audio("https://lasonotheque.org/UPLOAD/mp3/0600.mp3");
      //audio.play();
      event.preventDefault();
      afficherVoiture();
      count++;
      console.log(count);
      if (count >= 4) {
        console.log("you can start");
        document
          .getElementById("course")
          .addEventListener("click", function () {
            console.log("demarre");
            // afficherVoiture();
          });
      }
    });
  function afficherVoiture() {
    var selectedCar = document.getElementById("car-select").value;
    var selectedColor = document.getElementById("color-select").value;

    console.log(selectedCar, selectedColor);
    if (selectedCar && selectedColor) {
      var voitureDiv = document.getElementById("voiture");
      var newImg = document.createElement("img");
      newImg.src = "images/" + selectedCar + ".png";
      newImg.style.backgroundColor = selectedColor;
      voitureDiv.appendChild(newImg);
      carsArray.push(newImg);

      // console.log(carsArray);
    }
  }

  document.getElementById("course").addEventListener("click", function () {
    if (carsArray.length < 4) return;
    carsArray.forEach(function (car) {
      car.style.left = "10px";
    });
  });
};
