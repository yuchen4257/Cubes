/* ------------------ Set up  ------------------ */
var can = document.getElementsByTagName('canvas')[0];
can.width = window.innerWidth;
can.height = window.innerHeight;
var ctx = can.getContext('2d');

var x1 = document.querySelector('#x1');
var x2 = document.querySelector('#x2');
var y = document.querySelector('#y');
var xposition = document.querySelector('#xposition');
var yposition = document.querySelector('#yposition');
var color = document.querySelector('#color');

//can.setBackgroundColor('rgba(255, 73, 64, 0.6)');

var cubes = [];

// TO change current cube:
//current_cube = cubes[1];

//current_cube.x1 = x1.value;



/* ------------------ Shade color  ------------------ */

function shadeColor(color, percent) {
  color = color.substr(1);
  var num = parseInt(color, 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    G = (num >> 8 & 0x00FF) + amt,
    B = (num & 0x0000FF) + amt;
  return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 + (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
}


/* Interface Helpers */

var update_cube_sliders = function() {
    color.value = current_cube.color;
    x1.value = current_cube.x1;
    x2.value = current_cube.x2;
    y.value = current_cube.y;
    xposition.value = current_cube.xposition;
    yposition.value = current_cube.yposition;
}

/* Interface Updates */

x1.oninput = function(e) {
  console.log(x1.value);
  current_cube.x1 =  Number(x1.value);
};

x2.oninput = function(e) {
  console.log(x2.value);
  current_cube.x2 =  Number(x2.value);
};

y.oninput = function(e) {
  console.log(y.value);
  current_cube.y =  Number(y.value);
};

color.oninput = function(e) {
  console.log(color.value);
  current_cube.color = color.value;
};

xposition.oninput = function(e) {
  console.log(xposition.value);
  current_cube.xposition =  Number(xposition.value);
};

yposition.oninput = function(e) {
  console.log(yposition.value);
  current_cube.yposition =  Number(yposition.value);
};


/* New Button */

var new_btn = document.getElementById('new');
new_btn.onclick = function (e) {
    e.preventDefault();
    var new_cube = {
        x1: 100,
        x2: 100,
        y: 100,
        color: '#ff9900',
        xposition:window.innerWidth/2,
        yposition:window.innerHeight/2
    };
    
    // Update interface to defaults.
   
    cubes.push(new_cube);
    current_cube = new_cube;
    update_cube_sliders();
    console.log(cubes.length);
};

new_btn.click();


/* Last & Next */

var get_current_cube_index = function () {
    var index;
    cubes.forEach(function(cube, i) {
        if(cube === current_cube) {
            index = i;
            return;
        }
    });
    return index;
};


var next_cube = document.getElementById('next');

next_cube.onclick = function (e) {
    e.preventDefault();
    
    var current_i = get_current_cube_index();
    current_i += 1;
    if(current_i === cubes.length) {
        current_i = 0;
    }
    current_cube = cubes[current_i];
    update_cube_sliders();
}

next_cube.click();


var last_cube = document.getElementById('last');

last_cube.onclick = function (e) {
    e.preventDefault();
    
    var current_i = get_current_cube_index();
    current_i -= 1;
    if(current_i < 0) {
        current_i = cubes.length-1;
    }
    current_cube = cubes[current_i];
    update_cube_sliders();
}


/*
var last_cube = function () {
    var current_i = get_current_cube_index();
    current_i += 1;
    if(current_i === cubes.length) {
        current_i = 0;
    }
    current_cube = cubes[current_i];
    update_cube_sliders();
}
*/

/* Delete */

var del_btn = document.getElementById('delete');

del_btn.onclick = function (e) {
    e.preventDefault();
    
    var current_i = get_current_cube_index();
   
    cubes.splice(current_i,1);
    current_cube = cubes[current_i];
     if(current_i === cubes.length) {
        current_i = cubes.length - 1;
    }
    
    update_cube_sliders();
    console.log(cubes.length);
};

//del_btn.click();


/* Save */

//canvas download link

var is_saving = false;

var save = document.getElementById('save');
save.onclick = function (e) {
    e.preventDefault();
    var old_current_cube = current_cube;
    is_saving = true;
    draw();
    window.open('about:blank','image from canvas').document.write("<img src='"+document.getElementById("canvas").toDataURL("image/png")+"' alt='from canvas'/>");
    is_saving = false;
    
}


