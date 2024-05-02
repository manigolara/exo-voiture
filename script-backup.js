var count = 0;
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
      count++;
      console.log(count);
      afficherVoiture();
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
    }
  }
};
