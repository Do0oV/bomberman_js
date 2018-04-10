
let hero = document.getElementById('hero');
let bomb = document.getElementById('bomb');
let controlActive = true;


document.addEventListener("keydown", function(e){

    let heroLeft = hero.offsetLeft;
    let heroTop = hero.offsetTop;
    let posBlockLeft = hero.offsetLeft / 50;
    let posBlockTop = hero.offsetTop / 50;
    /*console.log('up ' + grille[posBlockTop - 1][posBlockLeft]);
    console.log('right ' +grille[posBlockTop][posBlockLeft + 1]);
    console.log('down ' + grille[posBlockTop + 1][posBlockLeft]);
    console.log('left ' + grille[posBlockTop][posBlockLeft - 1]);*/


    if (controlActive) {
        //console.log('isactive');

        switch (e.keyCode) {
        //UP
        case 38:
        //console.log('up');
        if(grille[posBlockTop - 1][posBlockLeft] === 0){
            hero.style.top = (posBlockTop - 1) * 50 + "px";
            hero.style.backgroundImage = "url('./images/hero_back.png')";
        }

        break;
        //RIGHT
        case 39:
        //console.log('right');
        if(grille[posBlockTop][posBlockLeft + 1] === 0){
            hero.style.left = (posBlockLeft + 1) * 50 + "px";
            hero.style.backgroundImage = "url('./images/hero_right.png')";
        }
        break;
        //DOWN
        case 40:
        //console.log('down');
        if(grille[posBlockTop + 1][posBlockLeft] === 0){
            hero.style.top = (posBlockTop + 1) * 50 + "px";
            hero.style.backgroundImage = "url('./images/hero_front.png')";
        }

        break;
        //LEFT
        case 37:
        //console.log('left');
        if(grille[posBlockTop][posBlockLeft - 1] === 0){
            hero.style.left = (posBlockLeft - 1) * 50 + "px";
            hero.style.backgroundImage = "url('./images/hero_left.png')";
        }

        break;
                //BOMB
                case 32:
                //console.log('bomb');
                bomb.style.left = heroLeft + "px";
                bomb.style.top = heroTop + "px";
                bomb.style.backgroundImage = "url('./images/bomb.png')";
                bomb.style.display = "block";

                break;
            }
        }
    });
