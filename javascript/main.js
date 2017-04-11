var dinoArray = [];

$.ajax('./db/dinosaurs.json').done(function(data) {
    dinoArray = data.dinosaurs;
    makeDom(dinoArray);
}).fail(function(error) {
    console.log("Failed", error);
}).always(function() {
    console.log("Test");
});



function makeDom(arrayToPrint) {
    var counter = 0;
    var myDomString = "";
    var domRow = "";
    domRow += `<div class="row">`;
    for (var i = 0; i < arrayToPrint.length; i++) {
        domRow += `<div class="dinoCard col-md-3 thumbnail">`;
        domRow += `<header><h1>${arrayToPrint[i].type}</h1></header>`;
        domRow += `<section>`
        domRow += `<img class="image" src="${arrayToPrint[i].img}">`;
        domRow += `<p class="bio">${arrayToPrint[i].bio}</p>`;
        domRow += `</section>`;
        domRow += `<footer>${arrayToPrint[i].info}</footer>`;
        domRow += `</div>`;

        counter += 1;

        if (counter % 3 === 0) { // Cap the row every 3 cards 
            domRow += `</div>`;
            myDomString += domRow;
            domRow = "";
            domRow += `<div class="row">`;
        } else if (counter === arrayToPrint.length) { // Add the closing tag to a row here if it's the last car in the array
            myDomString += `</div>`;
        }

    }
    console.log(myDomString);
    $("#dinosaurs").append(myDomString);
}

$("#dinosaurs").on("click", ".dinoCard", function(e) {
    $(".dinoCard").removeClass("dottedBorder");
    $(this).addClass("dottedBorder");
    var input = $("#textbox");
    input.val("").focus();

})

var input = $("#textbox");
input.keyup(mirrorText);

function mirrorText(e) {
    var selectedCard = $(".dottedBorder");
    var bioTyped = input.val();
    var bio = $(".dottedBorder").find("p.bio");
    bio.html(bioTyped);

    if (e.which === 13) {
        $("#textbox").val("");
    }
}
