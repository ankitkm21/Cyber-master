
var Beginform, database,episode1,episode2,episode3,episode4,end;

function setup() {
    console.log("abcd")
    database = firebase.database();
    var canvas = createCanvas(700, 700);
    Beginform = new Beginning();


}
function draw() {
    Beginform.display();

}

