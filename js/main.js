

const app = new PIXI.Application({
    width: 800, height: 600, backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1,
});
document.body.appendChild(app.view);

const container = new PIXI.Container();

app.stage.addChild(container);

// Create a new texture
const texture = PIXI.Texture.from('sprites/bunny.png');

//player
const bunny = new PIXI.Sprite(texture);
bunny.x = app.screen.width * 0.1;
bunny.y = app.screen.height / 2;
container.addChild(bunny);


app.ticker.add((delta) => {

    movement(container,delta);
    
});
