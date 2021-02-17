//to narazie nie działa 

const AnimToFrom = (o,f0,fe) => {
    if (o.currentFrame > fe-1) {
        o.gotoAndPlay(f0);
    } 
}

class dinozaur {
    constructor(numofFrames,imgpath) {
        this.Atextures = [];


        for (let i = 0; i < numofFrames; i++) {
            this.texture = PIXI.Texture.from(imgpath+`${i}.png`);
            this.Atextures.push(this.texture);
        }
        this.ob = new PIXI.AnimatedSprite(this.Atextures);
        this.ob.dirp = 0;
        app.stage.addChild(this.ob);
        this.ob.x = app.screen.width * 0.1;
        this.ob.y = 354;
        this.ob.xb = 0;
        this.ob.yb = 0;
        this.ob.dy=2;
        this.ob.scale.x *=4;
        this.ob.scale.y *=4;
        this.ob.animationSpeed= 0.2;
        this.ob.anchor.set(0.5,0);
        this.ob.gotoAndPlay(0);
        this.ob.onFrameChange = () => {

            if(this.ob.dirp == 0){
        
                AnimToFrom(this.ob,0,3); //idle animation  
            }
            if(this.ob.dirp == 1) {
                if(this.ob.scale.x < 0 ) {
                    this.ob.scale.x *= -1;
                }
                AnimToFrom(this.ob,4,10);
            }
            if(this.ob.dirp == -1) {
                if(this.ob.scale.x > 0 ) {
                    this.ob.scale.x *= -1;
                }
                AnimToFrom(this.ob,4,10);
            }
        
        }
       
    }


    



}

const create_animated_dino = (o) => {

    }