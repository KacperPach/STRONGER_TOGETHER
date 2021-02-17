const app = new PIXI.Application({
    width: 800, height: 600, backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1,
});
document.body.appendChild(app.view);

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST; // naprawia skalowanie spriteów żeby nie były rozmazane 

const container = new PIXI.Container();

const container2 = new PIXI.Container();

let o = new dinozaur(24,"sprites/dino_red/tile"); 
let din2 = new dinozaur(24,"sprites/dino_gren/tile"); 


app.stage.addChild(container);
app.stage.addChild(container2);


//enemy
const enemy = new PIXI.Sprite.from('sprites/enemy.png');
enemy.x = 500;
enemy.y = app.screen.height / 2;
app.stage.addChild(enemy);


app.ticker.add(delta => gameLoop(delta));

let isColide = false;

/// do zmienianie postaci kod 
const key1 = keyboard("1");
const key2 = keyboard("2");
let currentCharacter = 1;
///

function gameLoop(delta){
    if(key1.isDown){
        currentCharacter = 1;
    }else if (key2.isDown) {
        currentCharacter = 2;
    }
    
    if(currentCharacter == 1){
        movement(o.ob,delta);
        detection(o.ob);
    }
    if(currentCharacter == 2){
        movement(din2.ob,delta);
        detection(din2.ob);
    }

    
    
}

