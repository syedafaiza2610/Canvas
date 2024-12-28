function draw() {
    var canvas = document.getElementById("canv");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "green";
        ctx.fillRect(30, 30, 50, 50);
    }
}

// window.onload = draw;
draw();
