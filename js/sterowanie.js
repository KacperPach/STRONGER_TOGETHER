const keyD = keyboard("d");
const keyS = keyboard("s");
const keyA = keyboard("a");
const keyW = keyboard("w");
const keySpace = keyboard(" ");

const movement = (o,delta) => {

     o.vx = 1;

    if(keyD.isDown) {
        o.x += o.vx*delta;
    }

    if(keyA.isDown) {
        o.x -= o.vx*delta;
    }

    if(keySpace.isDown) {
        o.y -= o.vx*delta;
    }
}
