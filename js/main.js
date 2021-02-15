const keyD = keyboard("d");
const keyS = keyboard("s");
const keyA = keyboard("a");
const keyW = keyboard("w");
const keySpace = keyboard(" ");


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


    if(keyD.isDown) {
        container.x += 5*delta;
    }

    if(keyA.isDown) {
        container.x -= 5*delta;
    }

    if(keySpace.isDown) {
        container.y -= 5*delta;
    }
});
