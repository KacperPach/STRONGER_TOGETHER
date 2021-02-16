const app = new PIXI.Application({
    width: 800, height: 600, backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1,
});
document.body.appendChild(app.view);

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST; // naprawia skalowanie spriteów żeby nie były rozmazane 

const container = new PIXI.Container();

const container2 = new PIXI.Container();

let din = new dinozaur(24,"sprites/dino_red/tile"); 


app.stage.addChild(container);
app.stage.addChild(container2);


//enemy
const enemy = new PIXI.Sprite.from('sprites/enemy.png');
enemy.x = 500;
enemy.y = app.screen.height / 2;
app.stage.addChild(enemy);

//container2.addChild(enemy);

app.ticker.add(delta => gameLoop(delta));

let isColide = false;

function gameLoop(delta){
    
    movement(din.ob,delta);
    //console.log(dino.x);
    //console.log(dino.y);
    //console.log(dino.xb);
    //console.log(dino.yb);
    detection(din.ob);
    
}


