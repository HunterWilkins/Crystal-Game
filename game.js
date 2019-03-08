//
$(document).ready(function(){

var crystals = {
    values: ["red", "green", "blue", "yellow"],
    power: [
        Math.floor(Math.random()*12)+1, 
        Math.floor(Math.random()*12)+1,
        Math.floor(Math.random()*12)+1,
        Math.floor(Math.random()*12)+1
    ],

    images: [
        "https://via.placeholder.com/200",
        "https://via.placeholder.com/200",
        "https://via.placeholder.com/200",
        "https://via.placeholder.com/200",
        
    ]
}

for (var i = 0; i < crystals.values.length; i++){
    console.log(crystals.power[i]);
    var crystalImgs = $("<img src=" + crystals.images[i] + ">").val(crystals.values[i]).addClass("col-3 images");
    $(".crystal-container").append(crystalImgs);
}
var wins = 0;
var losses = 0;
var goalNum = Math.floor(Math.random()*120)+19;
var totalScore = 0;

gameRun();

function gameRun(){
    // var totalScore = 0;

    
     
    $(".goal-number").html("<h2 class = 'col-12'>" + goalNum + "</h2>");
    
    $(".images").on("click", function(){
        if (totalScore < goalNum){
            for (var i = 0; i < crystals.values.length; i++){
                if ($(this).val() === crystals.values[i]){
                    console.log("You clicked the " + crystals.values[i] + " crystal.");
                    console.log("Secret Points Value: " + crystals.power[i]);
                    totalScore += crystals.power[i];
                    $("#score").text(totalScore);
                    crystals.power[i] = Math.floor(Math.random()*12)+1
                }
            }
        }
    
        else if (totalScore > goalNum){
            losses++;
            $("#losses").text(losses);
            totalScore = 0;
            goalNum = Math.floor(Math.random()*120)+19;
            $(".goal-number").html("<h2 class = 'col-12'>" + goalNum + "</h2>");
        }

        else if (totalScore === goalNum){
            wins++;
            $("#wins").text(wins);
            totalScore = 0;
            goalNum = Math.floor(Math.random()*120)+19;
            $(".goal-number").html("<h2 class = 'col-12'>" + goalNum + "</h2>");
        }
    })
    
    
    
}

})
