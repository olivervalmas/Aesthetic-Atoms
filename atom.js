/** Class representing an atom. */

class Atom {

  /**
   * Create an atom.
   * @param {number} posx - The x position of the nucleus of the atom.
   * @param {number} posy - The y position of the nucleus of the atom.
   * @param {number} nucleusRadius - The radius of the nucleus, in pixels.
   * @param {number} rotsPerSec - A constant that determines how fast the electrons move around their orbits.
   * @param {number} electronCount - The number of electrons in the atom.
   * @param {boolean} noise - Enables or disables noise inside the nucleus.
    */

  constructor(posx, posy, nucleusRadius, rotsPerSec, electronCount, noise) {
    this._posx = posx;
    this._posy = posy;
    this._nucleusRadius = nucleusRadius;
    this._radius = nucleusRadius * 8;
    this._electronCount = electronCount;
    this._deltaAngle = PI / electronCount;
    this._rotsPerSec = rotsPerSec;
    this._rotation = 0;
    this.generateRandoms(20);
    this._tailSpheres = 10;
    this._noise = noise;
    this._nucleusVibrate = false;
    this._electronVibrate = false;
    this._spinX = false;
    this._spinY = false;
    this._spinZ = false;
    this._enableOrbits = true;
    this._names = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium', 'Boron', 'Carbon', 'Nitrogen', 'Oxygen', 'Fluorine', 'Neon'];
    this._nucleusColor = color(3, 28, 193);
    this._electronColor = color(193, 3, 3);
    this._counterX = Math.random(100);
    this._counterY = Math.random(100);
    this._counterZ = Math.random(100);
  }

  /**
   * Gets the name of the atom (according to the periodic table).
   * @returns {string}
   */

  get name() {
    return this._names[this._electronCount - 1];
  }

  get nucleusColor() {
    return this._nucleusColor;
  }

  /**
   * Sets the color of the nucleus.
   * @param {p5.Color} newColor
   */

  set nucleusColor(newColor) {
    this._nucleusColor = newColor;
  }

  get electronColor() {
    return this._electronColor;
  }

  /**
   * Sets the color of the electrons.
   * @param {p5.Color} newColor
   */

  set electronColor(newColor) {
    this._electronColor = newColor;
  }

  get nucleusRadius() {
    return this._nucleusRadius;
  }

  /**
   * Sets the radius (in pixels) of the nucleus.
   * @param {number} newRadius
   */

  set nucleusRadius(newRadius) {
    this._nucleusRadius = newRadius;
    /* Here we update the radius of the whole atom every time we change the nucleus radius
    so that everything stays nicely proportioned. */
    this._radius = newRadius * 8;
  }

  get electronCount() {
    return this._electronCount;
  }

  /**
   * Sets the current number of electrons in the atom.
   * @param {number} newElectronCount
   */

  set electronCount(newElectronCount) {
    this._electronCount = newElectronCount;
    this._deltaAngle = PI / this.electronCount;
  }

  get electronSpeed() {
    return this._rotsPerSec;
  }

  /**
   * Sets the orbital speed of the electrons.
   * @param {number} newSpeed
   */

  set electronSpeed(newSpeed) {
    this._rotsPerSec = newSpeed;
  }

  get spinX() {
    return this._spinX;
  }

  /**
   * Sets whether spinning about the x-axis is enabled or disabled.
   * @param {boolean} newSpinX
   */

  set spinX(newSpinX) {
    this._spinX = newSpinX;
  }

  get spinY() {
    return this._spinY;
  }

  /**
   * Sets whether spinning about the y-axis is enabled or disabled.
   * @param {boolean} newSpinY
   */

  set spinY(newSpinY) {
    this._spinY = newSpinY;
  }

  get spinZ() {
    return this._spinZ;
  }

  /**
   * Sets whether spinning about the z-axis is enabled or disabled.
   * @param {boolean} newSpinZ
   */

  set spinZ(newSpinZ) {
    this._spinZ = newSpinZ;
  }

  get nucleusVibrate() {
    return this._nucleusVibrate;
  }

  /**
   * Sets whether the nucleus is vibrating.
   * @param {boolean} newVal
   */

  set nucleusVibrate(newVal) {
    this._nucleusVibrate = newVal;
  }

  get electronVibrate() {
    return this._electronVibrate;
  }

  /**
   * Sets whether the electrons vibrate.
   * @param {boolean} newVal
   */

  set electronVibrate(newVal) {
    this._electronVibrate = newVal;
  }

  get noise() {
    return this._noise;
  }

  /**
   * Sets whether the nucleus has noise.
   * @param {boolean} newVal
   */

  set noise(newVal) {
    this._noise = newVal;
  }

  /**
   * Generates 20 random rotations between 0 and 2π.
   * These random rotations determine the starting location of each atom meaning that they are not all in sync.
   * @param {number} numberOfRandoms
   */

  generateRandoms(numberOfRandoms) {
    this._randoms = [];
    for (let i = 0; i < numberOfRandoms+1; i++) {
      this._randoms.push(random(2 * PI));
    }
  }

  /**
   * Calculates the time passed between each call of draw().
   * @returns {number}
   */

  calcDeltaTime() {
    this._old;
    this._now = Date.now();

    if (this._old == null) {
      this._old = Date.now();
    }
    return this._now - this._old;
  }

  /**
   * Draws the nucleus to the canvas.
   */

  drawNucleus() {

    push();
    if (this._nucleusVibrate) {
      translate(this._posx + random(-2, 2), this._posy + random(-2, 2));
    } else {
      translate(this._posx, this._posy);
    }

    //Draws a sphere to the canvas in the specified color.
    fill(this._nucleusColor);
    sphere(this._nucleusRadius);
    pop();

    //If noise is enabled, draw 50 small white lines from the center of the nucleus to the bounding edge.
    if (this._noise) {
      for (let i = 0; i < 50; i++) {
        //Generates a random vector then multiplies it by the nucleus radius to prevent lines leaving the sphere.
        let rand = p5.Vector.random3D();
        rand.mult(this._nucleusRadius);
        //Lines are drawn in white with an alpha value (transparency) of 30.
        stroke(255, 255, 255, 30);
        line(this.posx, this.posy, 0, rand.x, rand.y, rand.z);
        noStroke();
      }
    }
  }

  /**
   * Draws the specified number of electrons to the canvas.
   */

  drawElectrons() {
    for (let i = 0; i < this._electronCount; i++) {
      //Rotates the canvas by deltaAngle then draws each electron.
      rotateZ(this._deltaAngle);
      this.drawElectron(i);
    }
  }

  /**
   * Draws a specific electron and tail. Its position relative to other electrons is determined by the index of the electron.
   * @param {number} index
   */

  drawElectron(index) {
    //Gets the current rotation and takes the electron's random relative rotation into account.
    let baseRot = this._rotation + this._randoms[index];
    let deltaRot = PI / 256;
    let jiggle = 0;

    //Loops through
    for (let i = 0; i < this._tailSpheres; i++) {
      let rate = i / this._tailSpheres;
      push();
      rotateY(baseRot + deltaRot * i * rate);
      if (this._electronVibrate) {
        jiggle = random(-0.5, 0.5);
      }
      translate(this._radius + jiggle, jiggle);
      let size = rate * this._nucleusRadius / 5;

      fill(this._electronColor);
      ellipsoid(size * 1.5, size);

      pop();
    }
  }

  /**
   * Draws the orbit for each electron onto the canvas.
   * @param {number} thickness - The thickness of the orbit.
   */

  drawOrbits(thickness) {
    push();
    rotateX(PI / 2);
    fill(0);
    for (let i = 0; i < this._electronCount; i++) {
      rotateY(this._deltaAngle);
      torus(this._radius, thickness, 50, 50);
    }
    pop();
  }

  /**
   * Draws the nucleus, electrons and orbits to the canvas.
   */

  draw() {

    let deltaTime = this.calcDeltaTime();
    /*
    A bunch of maths that increments the rotation variable depending on the time since the draw function was last called.
    This keeps things looking smooth and consistent if the framerate fluctuates.
     */
    this._rotation += (deltaTime * 2 * PI * this._rotsPerSec / 1000);
    noStroke();

    this.drawNucleus();

    if (this._enableOrbits) {
      this.drawOrbits(0.75);
    }

    this.drawElectrons();

    //Resets this._old so that calcDeltaTime() can be called again.
    this._old = this._now;
  }
}
