var start = new Date().getTime() // to get a current time in ms

//creates a random color every time it’s called
function getColor(){
    var letters = "0123456789ABCDEF";
    var color = "#"
    for(var i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() *16)];
    }
    return color;
}

//moves the shape to a random position, size, and color


function move(){
    var left = Math.random() *200
    var top = Math.random() *200
    var wh = (Math.random() *300) +100


    //sets the style
    document.getElementById("circle").style.left = left + "px";
    document.getElementById("circle").style.top = top + "px";
    document.getElementById("circle").style.width = wh + "px";
    document.getElementById("circle").style.height = wh + "px";
    document.getElementById("circle").style.display="block";
    document.getElementById("circle").style.backgroundColor= getColor();
     start = new Date().getTime()
}
move();

 //code waits for a click on the shape
 
document.getElementById("circle").onclick = function(){
    document.getElementById("circle").style.display= "none"
    var end = new Date().getTime()
    var timeTaken = (end-start)/1000
    alert("Reaction time: " + timeTaken + " seconds");
    move();
}