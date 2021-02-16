//to narazie nie działa 

const create_animated_dino = (dino) => {
    let Atextures = [];
    for (let i = 0; i < 24; i++) {
        const texture = PIXI.Texture.from(`sprites/dino_red/tile${i}.png`);
        Atextures.push(texture);
    }
    const AnimToFrom = (o,f0,fe) => {
        if (o.currentFrame > fe-1) {
            o.gotoAndPlay(f0);
        } 
    }
    dino = new PIXI.AnimatedSprite(Atextures);
    dino.x = app.screen.width * 0.1;
    dino.y = app.screen.height / 2;
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
    return 
    };
}