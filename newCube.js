
    
    var tx = 0;
    var ty = 0;

    // tx should be (tx += mouseX - pmouseX)

/* ------------------ Draw a cube ------------------*/

var drawCube = function (x, y, wx, wy, h, color,lw) {
    
    ctx.setLineDash([2, 7]);
    console.log(ctx.getLineDash());
    
    //tx -= 1;
    
    //ctx.translate(tx, ty);
    
    
    
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - wx, y - wx * 0.5);
    ctx.lineTo(x - wx, y - h - wx * 0.5);
    ctx.lineTo(x, y - h * 1);
    ctx.closePath();
    ctx.lineWidth=lw;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.fillStyle = shadeColor(color, -20);
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + wy, y - wy * 0.5);
    ctx.lineTo(x + wy, y - h - wy * 0.5);
    ctx.lineTo(x, y - h * 1);
    ctx.closePath();
    ctx.lineWidth=lw;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.fillStyle = shadeColor(color, 5);
    ctx.strokeStyle = shadeColor(color, 50);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(x, y - h);
    ctx.lineTo(x - wx, y - h - wx * 0.5);
    ctx.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5));
    ctx.lineTo(x + wy, y - h - wy * 0.5);
    ctx.closePath();
    ctx.lineWidth=lw;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.fillStyle = shadeColor(color, 20);
    ctx.strokeStyle = shadeColor(color, 60);
    ctx.stroke();
    ctx.fill();
    
    //ctx.translate(-tx, -ty);
    
  }
