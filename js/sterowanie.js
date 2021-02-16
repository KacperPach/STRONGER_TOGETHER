const keyD = keyboard("d");
const keyS = keyboard("s");
const keyA = keyboard("a");
const keyW = keyboard("w");
const keySpace = keyboard(" ");
let dirp = 0; // przechowóje kierunek ruszania się postaci  1=right ; -1=left

const movement = (o,delta) => {

     o.vx = 1;

    if(keyA.isDown) {
        o.x -= o.vx*delta;
        dirp = -1;
    }

    if(keyD.isDown) {
        o.x += o.vx*delta;
        dirp = 1;
    }

    if(keySpace.isDown) {
        o.y -= o.vx*delta;
    }
}
