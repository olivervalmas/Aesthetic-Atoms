function setup() {

    let canvas = createCanvas(windowWidth, 400, WEBGL);
    canvas.parent("sketch-holder");
    canvas.style('display', 'block');

    atom = new Atom(0, 0, 20, 0.75, 3);
    counterX = Math.random(100);
    counterY = Math.random(100);
    counterZ = Math.random(100);
}

function draw() {

    orbitControl();
    clear();

    if (atom.spinX) {
        counterX += 0.1;
    }

    if (atom.spinY) {
        counterY += 0.1;
    }

    if (atom.spinZ) {
        counterZ += 0.1;
    }

    rotateX(counterX*PI/16);
    rotateY(counterY*PI/16);
    rotateZ(counterZ*PI/16);
    atom.draw();

    if (document.getElementById("smoothing").checked) {
        console.log("smooth");
        smooth(5);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, 400);
}

document.addEventListener("DOMContentLoaded", function(){

    let nr = document.getElementById("nucleusRadius");
    function changeNucleusRadius(event){
        let val = document.getElementById("nucleusRadius").value;
        atom.nucleusRadius = val;
    }
    nr.addEventListener("change", changeNucleusRadius);

    let ec = document.getElementById("electronCount");
    function changeElectronCount(event){
        let val = document.getElementById("electronCount").value;
        atom.electronCount = val;
        document.getElementById("title").innerHTML = "Aesthetic Atoms: " + atom.name;
    }
    ec.addEventListener("change", changeElectronCount);

    let nv = document.getElementById("nucleusVibrate");
    function changeNucleusVibrate(event){
        let val = document.getElementById("nucleusVibrate").checked;
        atom.nucleusVibrate = val;
    }

    nv.addEventListener("change", changeNucleusVibrate);

    let es = document.getElementById("electronSpeed");
    function changeElectronSpeed(event){
        let val = document.getElementById("electronSpeed").value;
        atom.electronSpeed = val;
    }
    es.addEventListener("change", changeElectronSpeed);

    let nc = document.getElementById("nucleusColor");
    function changeNucleusColor(event){
        let val = document.getElementById("nucleusColor").value;
        atom.nucleusColor = val;
    }
    nc.addEventListener("change", changeNucleusColor);

    let ecol = document.getElementById("electronColor");
    function changeElectronColor(event){
        let val = document.getElementById("electronColor").value;
        atom.electronColor = val;
    }
    ecol.addEventListener("change", changeElectronColor);

    let ev = document.getElementById("electronVibrate");
    function changeElectronVibrate(event){
        let val = document.getElementById("electronVibrate").checked;
        atom.electronVibrate = val;
    }
    ev.addEventListener("change", changeElectronVibrate);

    let sx = document.getElementById("spinX");
    function changeSpinX(event){
        let val = document.getElementById("spinX").checked;
        atom.spinX = val;
    }
    sx.addEventListener("change", changeSpinX);

    let sy = document.getElementById("spinY");
    function changeSpinY(event){
        let val = document.getElementById("spinY").checked;
        atom.spinY = val;
    }
    sy.addEventListener("change", changeSpinY);

    let sz = document.getElementById("spinZ");
    function changeSpinZ(event){
        let val = document.getElementById("spinZ").checked;
        atom.spinZ = val;
    }
    sz.addEventListener("change", changeSpinZ);

    let n = document.getElementById("noise");
    function changeNoise(event){
        let val = document.getElementById("noise").checked;
        atom.noise = val;
    }
    n.addEventListener("change", changeNoise);

    let cf = document.getElementById("input_form");

    cf.addEventListener("submit", function (event){
        event.preventDefault()});
});