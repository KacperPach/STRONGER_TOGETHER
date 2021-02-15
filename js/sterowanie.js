const keyD = keyboard("d");
const keyS = keyboard("s");
const keyA = keyboard("a");
const keyW = keyboard("w");
const keySpace = keyboard(" ");

const movement = (o,delta) => {


    if(keyD.isDown) {
        o.vx = 5*delta;
    }

    if(keyA.isDown) {
        o.vx = 5*delta;
    }

    if(keySpace.isDown) {
        o.vy = 5*delta;
    }
}
