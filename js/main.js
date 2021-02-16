const app = new PIXI.Application({
    width: 800, height: 600, backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1,
});
document.body.appendChild(app.view);

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST; // naprawia skalowanie spriteów żeby nie były rozmazane 

const container = new PIXI.Container();

const container2 = new PIXI.Container();


let Atextures = [];

for (let i = 0; i < 24; i++) {
    const texture = PIXI.Texture.from(`sprites/dino_red/tile${i}.png`);
    Atextures.push(texture);
}

app.stage.addChild(container);
app.stage.addChild(container2);

//player
const AnimToFrom = (o,f0,fe) => {
    if (o.currentFrame > fe-1) {
        o.gotoAndPlay(f0);
    } 
}

const dino = new PIXI.AnimatedSprite(Atextures);
dino.x = app.screen.width * 0.1;
dino.y = app.screen.height / 2;
dino.xb = 0;
dino.yb = 0;
dino.scale.x *=4;
dino.scale.y *=4;
dino.animationSpeed= 0.2;
dino.anchor.set(0.5,0);
dino.gotoAndPlay(0);
dino.onFrameChange = () => {


    
    if(dirp == 0){
        
        AnimToFrom(dino,0,3); //idle animation  
    }
    if(dirp == 1) {
        if(dino.scale.x < 0 ) {
            dino.scale.x *= -1;
        }
        AnimToFrom(dino,4,10);
    }
    if(dirp == -1) {
        if(dino.scale.x > 0 ) {
            dino.scale.x *= -1;
        }
        AnimToFrom(dino,4,10);
    }

    
};
container.addChild(dino);

//enemy
const enemy = new PIXI.Sprite.from('sprites/enemy.png');
enemy.x = 500;
enemy.y = app.screen.height / 2;
app.stage.addChild(enemy);

//container2.addChild(enemy);

app.ticker.add(delta => gameLoop(delta));

let isColide = false;

function gameLoop(delta){

    movement(dino,delta);
    //console.log(dino.x);
    //console.log(dino.y);
    //console.log(dino.xb);
    //console.log(dino.yb);
    detection(dino);
    
}


