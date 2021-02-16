const keyD = keyboard("d");
const keyS = keyboard("s");
const keyA = keyboard("a");
const keyW = keyboard("w");
const keySpace = keyboard(" ");
let dirp = 0; // przechowóje kierunek ruszania się postaci  1=right ; -1=left

function collision(a, b){

    let aBox = a.getBounds();
    let bBox = b.getBounds();

    return aBox.x + aBox.width > bBox.x &&
           aBox.x < bBox.x + bBox.width &&
           aBox.y + aBox.height > bBox.y &&
           aBox.y < bBox.y + bBox.height;
           
}


const movement = (o,delta) => {
     o.vx = 4;
     din.dirp = 0;
    
    if(keyA.isDown) {
        o.x -= o.vx*delta;
        din.dirp = -1;
    }

    if(keyD.isDown) {
        o.x += o.vx*delta;
        din.dirp = 1;
    }

    if(keyW.isDown) {
        o.y -= o.vx*delta;
    }

    if(keyS.isDown) {
        o.y += o.vx*delta;
    }
}

//sprawdza z której strony jest kolizja

const detection = (o) => {
    if(collision(o, enemy)) {   
        
        if(o.xb == 0){
            o.xb = o.x;
        }
    
        if(o.yb == 0){
            o.yb = o.y;
        }

        if(o.xb < o.x){
            o.x=o.xb;  
        }
        if(o.xb > o.x){
            o.x=o.xb;
        }
   
        if(o.yb < o.y){
            o.y=o.yb;
        }

        if(o.yb > o.y){
            o.y=o.yb;
        }
    }
    o.xb = o.x;
    o.yb = o.y;
}