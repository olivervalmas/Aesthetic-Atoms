function setup() {

    let canvas = createCanvas(windowWidth, 400, WEBGL);
    canvas.parent("sketch-holder");
    canvas.style('display', 'block');

    atom = new Atom(0, 0, 20, 0.75, 3);
    document.getElementById("title").innerHTML = "Aesthetic Atoms: " + atom.name;

}

function draw() {

    //Allows user to drag and move around the world.
    orbitControl();
    atom.draw();
    
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

    let ncol = document.getElementById("nucleusColor");
    function changeNucleusColor(event){
        let val = document.getElementById("nucleusColor").value;
        atom.nucleusColor = val;
    }
    ncol.addEventListener("change", changeNucleusColor);

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

    let sm = document.getElementById("smoothing");
    function changeSmoothing(event){
        let val = document.getElementById("smoothing").checked;
        atom.smoothing = val;
    }
    sm.addEventListener("change", changeSmoothing);

    let ncc = document.getElementById("nucleusColorCycle");
    function changeNucleusColorCycle(event) {
        let val = document.getElementById("nucleusColorCycle").checked;
        atom.nucleusColorCycle = val;
    }
    ncc.addEventListener("change", changeNucleusColorCycle);

    let ecc = document.getElementById("electronColorCycle");
    function changeElectronColorCycle(event) {
        let val = document.getElementById("electronColorCycle").checked;
        atom.electronColorCycle = val;
    }
    ecc.addEventListener("change", changeElectronColorCycle);

    let cf = document.getElementById("input_form");

    cf.addEventListener("submit", function (event){
        event.preventDefault()});
});