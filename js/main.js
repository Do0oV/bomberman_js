let map = document.getElementById('map');
window.onload = function() {
    drawMap();
} 

var grille = [
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,0,0,2,2,0,0,2,2,0,2,0,2,2,2,2,0,0,1],
[1,0,3,2,3,0,3,0,3,2,3,0,3,2,3,2,3,0,1],
[1,0,2,2,0,2,2,0,2,0,2,2,0,2,2,0,0,0,1],
[1,0,3,0,3,0,3,0,3,0,3,2,3,2,3,0,3,0,1],
[1,0,0,2,2,0,0,2,2,0,2,2,2,2,2,2,0,0,1],
[1,2,3,2,3,0,3,0,3,0,3,0,3,2,3,0,3,0,1],
[1,0,0,2,2,2,2,2,0,2,2,0,0,2,0,0,0,0,1],
[1,0,3,2,3,0,3,0,3,2,3,2,3,2,3,2,3,0,1],
[1,0,0,2,2,0,2,2,2,0,2,0,2,2,2,2,0,0,1],
[1,0,3,2,3,0,3,0,3,0,3,0,3,2,3,0,3,0,1],
[1,0,0,2,2,2,0,2,2,2,0,2,2,2,0,0,0,0,1],
[1,0,3,2,3,0,3,2,3,2,3,0,3,2,3,2,3,0,1],
[1,2,2,2,0,0,0,2,0,2,2,2,0,2,0,0,0,0,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

function drawMap(){

    let frame;
    let floor;
    let brick;
    let wall;

    for(let i = 0; i < 15; i++ ){
        for(let j=0; j<19;j++){
            if(grille[i][j] === 1){
                frame = document.createElement("div");
                frame.setAttribute("class", "frame");
                map.appendChild(frame);

            }
            else if(grille[i][j] === 0){
                floor = document.createElement("div");
                floor.setAttribute("class", "floor");
                map.appendChild(floor);
            }
            else if(grille[i][j] === 2){
             brick = document.createElement("div");
             brick.setAttribute("class", "brick");
             map.appendChild(brick);
         }
         else if(grille[i][j] === 3){
            wall = document.createElement("div");
            wall.setAttribute("class", "wall");
            map.appendChild(wall);
        }

    }
}
}






window.onload = function() {
    drawMap();
} 