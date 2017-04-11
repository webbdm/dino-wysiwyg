var dinoArray = [];


$.ajax('./db/dinosaurs.json').done(function(data) {
        dinoArray = data.dinosaurs;
        makeDom(dinoArray);
    }).fail(function(error) {
        console.log("Failed", error);
    }).always(function() {
        console.log("Test");
    });

 function makeDom(arrayToPrint){
 	var myDomString = "";
 	for (var i = 0; i < arrayToPrint.length; i++){
 		myDomString += `<div class="dinoCard">`;
 		myDomString += `<header><h1>${arrayToPrint[i].type}</h1></header>`;
 		myDomString += `<section>`
 		myDomString += `<img class="image" src="${arrayToPrint[i].img}">`;
 		myDomString += `<p class="bio">${arrayToPrint[i].bio}</p>`;
 		myDomString += `</section>`;
 		myDomString += `<footer>${arrayToPrint[i].info}</footer>`;
 		myDomString += `</div>`;
 	}
 	$("#dinosaurs").append(myDomString);
 }