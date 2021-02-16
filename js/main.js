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
    console.log(`sprites/dino_red/tile${i}.png`);
    Atextures.push(texture);
}

app.stage.addChild(container);
app.stage.addChild(container2);
//player
const bunny = new PIXI.Sprite.from('sprites/bunny.png');
bunny.x = app.screen.width * 0.1;
bunny.y = app.screen.height / 2;
bunny.vx = 0;
bunny.vy = 0;
container.addChild(bunny);
const dino = new PIXI.AnimatedSprite(Atextures);
dino.x = app.screen.width * 0.1;
dino.y = app.screen.height / 2;
dino.scale.x *=4;
dino.scale.y *=4;
dino.animationSpeed= 0.08;
dino.gotoAndPlay(0);
dino.onFrameChange = () => {
    if(dino.currentFrame == 3)
    {
        dino.gotoAndPlay(0);
    }
    if(1) {}
    
};
container.addChild(dino);

//enemy
const enemy = new PIXI.Sprite.from('sprites/enemy.png');
enemy.x = 15;
enemy.y = app.screen.height / 2;


container2.addChild(enemy);

app.ticker.add(delta => gameLoop(delta));


function gameLoop(delta){

    movement(container,delta);

    if(collision(bunny, enemy)) {
        console.log("joisen");
    }
}


function collision(a, b){
    let aBox = a.getBounds();
    let bBox = b.getBounds();

    return aBox.x + aBox.width > bBox.x &&
           aBox.x < bBox.x + bBox.width &&
           aBox.y + aBox.height > bBox.y &&
           aBox.y < bBox.y + bBox.height;
}

