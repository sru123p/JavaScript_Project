
var i=0;
var j=0;
var myList = [];
$(document).keypress(function (){
    myList = [];
    createRandom();
});

function createRandom(){
    j=0;
    i++;
    $("h1").text("Level " + i);
    var m = Math.random();
    r = Math.floor(m*4)+1;
    myList.push(r);
    switch(r){
        case 1:
            var audio = new Audio("./sounds/green.mp3");
            audio.play();
            $("#green").fadeOut().fadeIn();
            break;
        case 2:
            var audio = new Audio("./sounds/red.mp3");
            audio.play();
            $("#red").fadeOut().fadeIn();
            break;
        case 3:
            var audio = new Audio("./sounds/yellow.mp3");
            audio.play();
            $("#yellow").fadeOut().fadeIn();
            break;
        case 4:
            var audio = new Audio("./sounds/blue.mp3");
            audio.play();
            $("#blue").fadeOut().fadeIn();
            break;
    }
    console.log(myList+ "/");
}


$(".green").on("click", function (){
    var audio = new Audio("./sounds/green.mp3");
    audio.play();
    $("#green").fadeOut().fadeIn();
    if(myList.length>j&&myList[j]===1){
        j++;
        if(j===myList.length) 
        {
            setTimeout(createRandom,1000);
        }
    }
    else
    {
        $("h1").text("Game Over Press any Key To Restart!");
        var audio = new Audio("./sounds/wrong.mp3");
        audio.play();
        $("body").css("background-color", "red");
        setTimeout(function (){ $("body").css("background-color", "#011F3F") },200);
    }
});

$(".red").on("click", function (){
    var audio = new Audio("./sounds/red.mp3");
    audio.play();
    $("#red").fadeOut().fadeIn();
    if(myList.length>j&&myList[j]===2){
        j++;
        if(j===myList.length){ setTimeout(createRandom,1000); }
    }
    else
    {
        $("h1").text("Game Over Press any Key To Restart!");
        var audio = new Audio("./sounds/wrong.mp3");
        audio.play();
        $("body").css("background-color", "red");
        setTimeout(function (){ $("body").css("background-color", "#011F3F") },200);
    }
});

$(".yellow").on("click", function (){
    var audio = new Audio("./sounds/yellow.mp3");
    audio.play();
    $("#yellow").fadeOut().fadeIn();
    if(myList.length>j&&myList[j]===3){
        j++;
        if(j===myList.length){  setTimeout(createRandom, 1000); }
    }
    else
    {
        $("h1").text("Game Over Press any Key To Restart!");
        var audio = new Audio("./sounds/wrong.mp3");
        audio.play();
        $("body").css("background-color", "red");
        setTimeout(function (){ $("body").css("background-color", "#011F3F") },200);
    }
});

$(".blue").on("click", function (){
    var audio = new Audio("./sounds/blue.mp3");
    audio.play();
    $("#blue").fadeOut().fadeIn();
    if(myList.length>j&&myList[j]===4){
        j++;
        if(j===myList.length){ setTimeout(createRandom,1000); }
    }
    else
    {
        $("h1").text("Game Over Press any Key To Restart!");
        var audio = new Audio("./sounds/wrong.mp3");
        audio.play();
        $("body").css("background-color", "red");
        setTimeout(function (){ $("body").css("background-color", "#011F3F") },200);
    }
});


