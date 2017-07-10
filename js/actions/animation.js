/* ------------------ Animate  ------------------ */

var draw = function() {
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);  
    
  var upDown = Math.sin(Date.now()/300)*window.innerHeight/50;
  
  var new_cube = {
        x1: 100,
        x2: 100,
        y: 100,
        color: '#ff9900',
        xposition:window.innerWidth/2,
        yposition:window.innerHeight/2
    };
    
  var position1=window.innerWidth/2;
  var position2=window.innerHeight/2;
  var position3=xposition;
  var position4=yposition;
    
  var current_cube_lw;
    
  if(is_saving) {
      current_cube_lw = 0.2;
   } else {
      current_cube_lw = 5;
   }
    
  cubes.forEach(function(cube) {
 
      if(cube === current_cube) {
          
          drawCube(
                cube.xposition,
                cube.yposition + upDown + cube.y/2,
                cube.x1,
                cube.x2,
                cube.y,
                cube.color,
                current_cube_lw
           );
          
       }else if (cube === new_cube) {
          
           drawCube(
                cube.position1,
                cube.position2 + upDown + cube.y/2,
                cube.x1,
                cube.x2,
                cube.y,
                cube.color,
                current_cube_lw
           );

        }else{
      
           drawCube(
                cube.xposition,
                cube.yposition + upDown + cube.y/2,
                cube.x1,
                cube.x2,
                cube.y,
                cube.color,
                0.2
           );
        }
  });  

  requestAnimationFrame(draw);
}

draw();

