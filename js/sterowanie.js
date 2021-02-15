const keyD = keyboard("d");
const keyS = keyboard("s");
const keyA = keyboard("a");
const keyW = keyboard("w");
const keySpace = keyboard(" ");

const movement = (o,delta) => {

     o.xv = 1;

    if(keyD.isDown) {
        o.x += 5*delta*o.xv;
        o.xv += 1*delta;
    }

    if(keyA.isDown) {
        o.x -= 5*delta;
    }

    if(keySpace.isDown) {
        o.y -= 5*delta;
    }
}
