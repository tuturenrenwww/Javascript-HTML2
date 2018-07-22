var canvas = document.querySelector('.myCanvas');
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');

var cell= function(x,y,number){
this.x= x;
this.y= y;
this.number=number;
};

var grid = [];
for (var i=0;i<4;i++) {
     grid[i] = [0,0,0,0];

  }



for(var x=0;x<4;x++){
   for(var y=0;y<4;y++){ grid[x][y]=new cell(x,y,Math.floor(Math.random()*3));   }}

var fullcheck = function(){
var i=0;
for(var x=0;x<4;x++){
for(var y=0;y<4;y++){
if (grid[x][y].number>0){i++;}

}}
return (i==16);
}

var score= function(){
var i=0;
for(var x=0;x<4;x++){
for(var y=0;y<4;y++){
i+=grid[x][y].number;

}}
return (i);
}


var spawn = function(){
if(!fullcheck()){
x=0;y=0;
do{x=Math.floor(Math.random()*4);y=Math.floor(Math.random()*4);
}while(grid[x][y].number>0);
grid[x][y].number=Math.floor(Math.random()*3)
if(grid[x][y].number==0){grid[x][y].number=1;}
}};






var draw= function() {

ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.fillRect(0, 0, width, height);

ctx.fillStyle = 'rgb(9, 163, 219)';
ctx.strokestyle= 'rgb(245, 217, 37)';

ctx.fillRect(25,25,350,350);

ctx.lineWidth=3.5;


      
      
for(var x=0;x<4;x++){
for(var y=0;y<4;y++){
    ctx.fillstyle='rgb(0, 0, 0)';
    ctx.strokestyle='rgb(0,0,0)';
    ctx.strokeRect(25+x*87.5,25+y*87.5,87.5,87.5);
    ctx.fillStyle='rgb(255, 255, 255)';

    if(grid[x][y].number>0){

    ctx.fillText(grid[x][y].number,67+x*87.5,70+y*87.5);}
}
}

ctx.font="30px sans-serif";      
ctx.fillText("Score: " + score()*10000,400,50);
ctx.font="10px sans-serif";      

  };

var keypushed=function(e){
         var keynum;
keynum= e.which || e.keyCode;

if(keynum==38){
for(var i=0;i<3;i++){
for(var x=0;x<4;x++){
for(var y=1;y<4;y++){

if(grid[x][y-1].number==0){
grid[x][y-1].number=grid[x][y].number;grid[x][y].number=0;
}
else if(grid[x][y].number==grid[x][y-1].number){
grid[x][y-1].number*=2;grid[x][y].number=0;
}

}}}

ctx.clearRect(0, 0, canvas.width, canvas.height);
spawn();
draw();

};

if(keynum==40){
for(var i=0;i<3;i++){
for(var x=0;x<4;x++){
for(var y=2;y>-1;y--){

if(grid[x][y+1].number==0){grid[x][y+1].number=grid[x][y].number;grid[x][y].number=0;}
else if(grid[x][y].number==grid[x][y+1].number){grid[x][y+1].number*=2;grid[x][y].number=0;}

}}}

ctx.clearRect(0, 0, canvas.width, canvas.height);
spawn();
draw();
};


if(keynum==37){
for(var i=0;i<3;i++){
for(var x=1;x<4;x++){
for(var y=0;y<4;y++){

if(grid[x-1][y].number==0){grid[x-1][y].number=grid[x][y].number;grid[x][y].number=0;}
else if(grid[x][y].number==grid[x-1][y].number){grid[x-1][y].number*=2;grid[x][y].number=0;}

}}}

ctx.clearRect(0, 0, canvas.width, canvas.height);
spawn();
draw();
};

if(keynum==39){
for(var i=0;i<3;i++){
for(var x=2;x>-1;x--){
for(var y=0;y<4;y++){

if(grid[x+1][y].number==0){grid[x+1][y].number=grid[x][y].number;grid[x][y].number=0;}
else if(grid[x][y].number==grid[x+1][y].number){grid[x+1][y].number*=2;grid[x][y].number=0;}

}}}

ctx.clearRect(0, 0, canvas.width, canvas.height);
spawn();
draw();
};



    
  };
