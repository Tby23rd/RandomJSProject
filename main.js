//assign a variable and connect js to html
var canvas = document.getElementById("canvas");

//declare context and the type of animation i.e 2d
var context = canvas.getContext("2d");

//declare the canvas height and width
var window_height = window.innerHeight;

var window_width = window.innerWidth;

canvas.width = window_width;

canvas.height = window_height;


canvas.addEventListener('click', () => {
    console.log('canvas click');
});

//assign background color
canvas.style.background = "black";

//style the figures
context.fillStyle = "white";

//draw a the figures, the first two are the cooordinates 
//and the last two are the width and height
window.onload = function() {
    canvas.addEventListener("mousedown", drawPentagon, false);
}

function drawPentagon(event) {
    //this will draw a pentagon whenever a mouse is clicked
    x = event.pageX;
    y = event.pageY;

    context.beginPath();
    var numberOfSides = 5,
        size = 20;
    //draw the pentagon
    context.beginPath();
    context.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));

    for (var i = 1; i <= numberOfSides; i += 1) {
        context.lineTo(x + size * Math.cos(i * 2 * Math.PI / numberOfSides), y + size * Math.sin(i * 2 * Math.PI / numberOfSides));
    }
    context.fillStyle = 'rgb(' + parseInt(Math.random() * 255) +
        ',' + parseInt(Math.random() * 255) +
        ',' + parseInt(Math.random() * 255) + ')';
    context.fill();

}
//ellipse
window.onkeyup = function(e) {
    var x = e.keyCode ? e.keyCode : e.which;

    if (x == 66 || x == 98) {  
        context.fillStyle = 'blue';
    } else if (x == 82 || x == 114) {  
        context.fillStyle = 'red';
    } else if (x == 71 || x == 103) {  
        context.fillStyle = 'green';
    } else if (x == 89 || x == 121) {  
        context.fillStyle = 'yellow';
    } else if (x == 80 || x == 112) {  
        context.fillStyle = 'purple';
    }
}

function ellipse(x, y, rw, rh) {
    context.save();
    context.scale(1, rh / rw);
    context.beginPath();
    context.arc(x, y, rw, 0, 2 * Math.PI);
    context.restore();
    context.fill();
   // context.fillStyle = fill;

}
ellipse(100, 100, 50, 30);



//color

//triangle
context.beginPath();
context.moveTo(400, 100);
context.lineTo(300, 50);
context.lineTo(350, 30);
context.closePath();


grad = context.createRadialGradient(400, 100, 50, 200, 50, 100);
grad.addColorStop(0, "red");
grad.addColorStop(0.17, "orange");
grad.addColorStop(0.33, "yellow");
grad.addColorStop(0.5, "green");
grad.addColorStop(0.666, "blue");
grad.addColorStop(1, "violet");

// the fill color
context.fillStyle = grad;
context.fill();
context.strokeStyle =1;
context.stroke();
context.rotate(20 * Math.PI / 180);


//squares

function myFunction() {
    var cont = canvas.getContext("2d");
    var x = document.getElementById("rgb").value;
    cont.lineWidth = 10;
    cont.strokeStyle = x;
    cont.stroke();
    cont.rect(300, 350, 150, 150);
    cont.rect(325, 375, 100, 100);
    cont.rect(350, 400, 50, 50);
}
myFunction();


//draw a circle
//works correctly but affects the others
/*
window.onload=function(){

    function animate() {
        var c=document.getElementById("canvas");
        var context=c.getContext("2d");
        context.save();
        context.clearRect(0, 0, c.width, c.height);
        if(i > 80) {
            i = 1;
        }
        if( i > 40) {
            context.beginPath();
            context.arc(600, 100, i-40, 0, 2 * Math.PI, true);
            var grd = context.createRadialGradient(600, 100, 50, 38, 50, 500);
            grd.addColorStop(0, "red");
            grd.addColorStop(1, "black");
        
            context.fillStyle = grd;
            context.fill();
        }
        i++;
        context.restore();
        setTimeout(animate, 20);
    }
    var i = 0;
    animate();
}
*/
