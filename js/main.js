
let hero = document.getElementById('hero');
let bomb = document.getElementById('bomb');
let brick = document.getElementsByClassName('brick');
let controlActive = true;

// HERO MOVES//
document.addEventListener("keydown", function(e){

    let heroLeft = hero.offsetLeft;
    let heroTop = hero.offsetTop;
    let posBlockLeft = hero.offsetLeft / 50;
    let posBlockTop = hero.offsetTop / 50;

    if (controlActive) {

        switch (e.keyCode) {
        //UP
        case 38:
        if(grille[posBlockTop - 1][posBlockLeft] === 0){
            hero.style.top = (posBlockTop - 1) * 50 + "px";
            hero.style.backgroundImage = "url('./images/hero_back.png')";
        }

        break;
        //RIGHT
        case 39:
        if(grille[posBlockTop][posBlockLeft + 1] === 0){
            hero.style.left = (posBlockLeft + 1) * 50 + "px";
            hero.style.backgroundImage = "url('./images/hero_right.png')";
        }
        break;
        //DOWN
        case 40:
        if(grille[posBlockTop + 1][posBlockLeft] === 0){
            hero.style.top = (posBlockTop + 1) * 50 + "px";
            hero.style.backgroundImage = "url('./images/hero_front.png')";
        }

        break;
        //LEFT
        case 37:
        if(grille[posBlockTop][posBlockLeft - 1] === 0){
            hero.style.left = (posBlockLeft - 1) * 50 + "px";
            hero.style.backgroundImage = "url('./images/hero_left.png')";
        }

        break;
        //BOMB
        case 32:
        bomb.style.left = heroLeft + "px";
        bomb.style.top = heroTop + "px";
        bomb.style.backgroundImage = "url('./images/bomb.png')";
        bomb.style.display = "block";

        setTimeout(explode, 1500);
        setTimeout(removeExplosion, 2500);

        break;
    }
}
});

// ENEMY MOVES //

let enemy = document.getElementById('enemy');
random();
setInterval(random, 300);

function random (){

    direction = Math.floor((Math.random() * 4) + 1);
    let posBlockLeft = enemy.offsetLeft / 50;
    let posBlockTop = enemy.offsetTop / 50;
    if(direction == 1 ){
        if(grille[posBlockTop - 1][posBlockLeft] === 0){
            enemy.style.top = (posBlockTop - 1) * 50 + "px";
            enemy.style.backgroundImage = "url('./images/enemy_back.png')";
        }
    }else if(direction == 2 ){
        if(grille[posBlockTop][posBlockLeft + 1] === 0){
            enemy.style.left = (posBlockLeft + 1) * 50 + "px";
            enemy.style.backgroundImage = "url('./images/enemy_right.png')";
        }
    }else if(direction == 3 ){
        if(grille[posBlockTop + 1][posBlockLeft] === 0){
            enemy.style.top = (posBlockTop + 1) * 50 + "px";
            enemy.style.backgroundImage = "url('./images/enemy_front.png')";
        }
    }else if(direction == 4 ){
        if(grille[posBlockTop][posBlockLeft - 1] === 0){
            enemy.style.left = (posBlockLeft - 1) * 50 + "px";
            enemy.style.backgroundImage = "url('./images/enemy_left.png')";
        }
    }
}

// EXPLOSION //


// Supprime les explosions
function removeExplosion() {

    bomb.style.display = "none";
    let explo = document.getElementsByClassName('explosion');

    for (var i = explo.length - 1; i >= 0; i--) {
        explo[i].parentElement.removeChild(explo[i]);
    }
}
// creer les explosions si les cases sont breakable
function explode() {

    let posBombLeft = bomb.offsetLeft / 50;
    let posBombTop = bomb.offsetTop / 50;
    let down = grille[posBombTop + 1][posBombLeft];
    let up = grille[posBombTop - 1][posBombLeft];
    let right = grille[posBombTop][posBombLeft + 1];
    let left = grille[posBombTop][posBombLeft - 1];
    let explosion;

    // DOWN
    if (down != 1 ) {
        if (down != 3 ){

            explosion = document.createElement("div");
            explosion.setAttribute("class", "explosion");
            map.appendChild(explosion);
            explosion.style.top = (posBombTop + 1) * 50 + "px";
            explosion.style.left = posBombLeft * 50 + "px";
            bomb.style.backgroundImage = "url('./images/explo.png')";
            explosion.style.backgroundImage = "url('./images/explo.png')";
            grille[posBombTop + 1][posBombLeft] = 0;

        /*killEnemy(explosion);
        killHero(explosion);*/
        breakBrick(explosion);

        //UP
    }} if (up != 1 )  {
        if (up != 3 ){

            explosion = document.createElement("div");
            explosion.setAttribute("class", "explosion");
            map.appendChild(explosion);
            explosion.style.top = (posBombTop - 1) * 50 + "px";
            explosion.style.left = posBombLeft * 50 + "px";
            bomb.style.backgroundImage = "url('./images/explo.png')";
            explosion.style.backgroundImage = "url('./images/explo.png')";
            grille[posBombTop - 1][posBombLeft] = 0;

        /*killEnemy(explosion);
        killHero(explosion);*/
        breakBrick(explosion);

        //RIGHT
    }} if (right != 1  )  {
        if (right != 3  ){

            explosion = document.createElement("div");
            explosion.setAttribute("class", "explosion");
            map.appendChild(explosion);
            explosion.style.top = posBombTop * 50 + "px";
            explosion.style.left = (posBombLeft + 1) * 50 + "px";
            bomb.style.backgroundImage = "url('./images/explo.png')";
            explosion.style.backgroundImage = "url('./images/explo.png')";
            grille[posBombTop][posBombLeft + 1]= 0;


        /*killEnemy(explosion);
        killHero(explosion);*/
        breakBrick(explosion);

        //LEFT
    }} if (left != 1  )  {
     if (left != 3 ){

        explosion = document.createElement("div");
        explosion.setAttribute("class", "explosion");
        map.appendChild(explosion);
        explosion.style.top = posBombTop * 50 + "px";
        explosion.style.left = (posBombLeft - 1) * 50 + "px";
        bomb.style.backgroundImage = "url('./images/explo.png')";
        explosion.style.backgroundImage = "url('./images/explo.png')";
        grille[posBombTop][posBombLeft - 1] = 0;


        /*killEnemy(explosion);
        killHero(explosion);*/
        breakBrick(explosion);
    }}
}

// remplace le background par floor si explosion sur brick
function breakBrick(explosion){
 var brick = document.getElementsByClassName('brick');

    for (var i = brick.length - 1; i >= 0; i--) {
    var brickLeft = brick[i].offsetLeft / 50;
    var brickTop = brick[i].offsetTop / 50;

        if ((explosion.offsetTop / 50 == brickTop) && (explosion.offsetLeft / 50 == brickLeft)) {
            brick[i].style.backgroundImage= "url('./images/floor.png')";
        }
    }  
}

