
let state;

const app = new PIXI.Application({
    width: 800, height: 600, backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1,
});
document.body.appendChild(app.view);

const container = new PIXI.Container();

const container2 = new PIXI.Container();


app.stage.addChild(container);
app.stage.addChild(container2);
//player
const bunny = new PIXI.Sprite.from('sprites/bunny.png');
bunny.x = app.screen.width * 0.1;
bunny.y = app.screen.height / 2;
bunny.vx = 0;
bunny.vy = 0;
container.addChild(bunny);

//enemy
const enemy = new PIXI.Sprite.from('sprites/enemy.png');
enemy.x = 15;
enemy.y = app.screen.height / 2;

state = play();

container2.addChild(enemy);

app.ticker.add(delta => gameLoop(delta));


function gameLoop(delta){

    movement(container,delta);

    play(delta);

    console.log(bunny.vx);
    console.log(bunny.vy);
}

function play(){
    bunny.x += bunny.vx;
    bunny.y += bunny.vy;

}


