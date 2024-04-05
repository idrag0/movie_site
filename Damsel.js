document.addEventListener("DOMContentLoaded", function() {
    // Damsel Movie
    var damselButton = document.getElementById("Damsel");
    damselButton.addEventListener("click", function () {
        window.open("Damsel.html", "_blank");
    });


    var cardTexts = document.querySelectorAll(".card-text");
    cardTexts.forEach(function(cardText) {
        cardText.addEventListener("click", function() {
            var url = this.getAttribute("data-url");
            if (url) {
                window.open(url, "_blank");
            }
        });
    });

    // Fighter Movie
    
    var damselButton = document.getElementById("Fighter");
    damselButton.addEventListener("click", function () {
        window.open("Fighter.html", "_blank");
    });


    var cardTexts = document.querySelectorAll(".card-text");
    cardTexts.forEach(function(cardText) {
        cardText.addEventListener("click", function() {
            var url = this.getAttribute("data-url");
            if (url) {
                window.open(url, "_blank");
            }
        });
    });


    // Spaceman Movie
    var spacemanButton = document.getElementById("Spaceman");
    spacemanButton.addEventListener("click", function () {
        window.open("spaceman.html", "_blank");
    });

    var cardTexts = document.querySelectorAll(".card-text");
    cardTexts.forEach(function(cardText) {
        cardText.addEventListener("click", function() {
            var url = this.getAttribute("data-url");
            if (url) {
                window.open(url, "_blank");
            }
        });
    });

    // Art of Love Movie
    var artofloveButton = document.getElementById("Artoflove");
    artofloveButton.addEventListener("click", function () {
        window.open("Artoflove.html", "_blank");;
    });

    var cardTexts = document.querySelectorAll(".card-text");
    cardTexts.forEach(function(cardText) {
        cardText.addEventListener("click", function() {
            var url = this.getAttribute("data-url");
            if (url) {
                window.open(url, "_blank");
            }
        });
    });

    // Badland Hunters Movie

    var artofloveButton = document.getElementById("Badlander");
    artofloveButton.addEventListener("click", function () {
        window.open("Badlander-Hunters.html", "_blank");;
    });

    var cardTexts = document.querySelectorAll(".card-text");
    cardTexts.forEach(function(cardText) {
        cardText.addEventListener("click", function() {
            var url = this.getAttribute("data-url");
            if (url) {
                window.open(url, "_blank");
            }
        });
    });
});