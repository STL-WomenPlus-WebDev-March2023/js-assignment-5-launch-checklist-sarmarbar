// Write your JavaScript code here!

//const { formSubmission } = require("./scriptHelper");

//const { addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {
    let list = document.getElementById("faultyItems");
    list.style.visibility = "hidden";
    let form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let pilotInput = document.querySelector("input[name=pilotName]");
        let pilot = pilotInput.value;
        
        let copilotInput = document.querySelector("input[name=copilotName]");
        let copilot = copilotInput.value;
        
        let fuelInput = document.querySelector("input[name=fuelLevel]");
        let fuelLevel = Number(fuelInput.value);
        
        let cargoInput = document.querySelector("input[name=cargoMass]");
        let cargoLevel = Number(cargoInput.value);

        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    });
    
    let listedPlanets;
    let listedPlanetsResponse = myFetch();
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   

   //console.log(listedPlanetsResponse);
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let pickedPlanet = pickPlanet(listedPlanets);
       //console.log(pickedPlanet);
       //console.log(pickedPlanet.name);
       addDestinationInfo(document, pickedPlanet.name, pickedPlanet.diameter, pickedPlanet.star, pickedPlanet.distance, pickedPlanet.moons, pickedPlanet.image);
   })
        
                
   

  
   
});