/** Class representing an atom. */

class Atom {

  /**
   * Create an atom.
   * @param {number} posX - The x position of the nucleus of the atom.
   * @param {number} posY - The y position of the nucleus of the atom.
   * @param {number} nucleusRadius - The radius of the nucleus, in pixels.
   * @param {number} rotsPerSec - A constant that determines how fast the electrons move around their orbits.
   * @param {number} electronCount - The number of electrons in the atom.
   * @param {number} tailSpheres - The number of spheres that makes up each electron.
    */

  constructor(posX=0, posY=0, nucleusRadius=15, rotsPerSec=1, electronCount=3, tailSpheres=15) {
    this._posX = posX;
    this._posY = posY;
    this._nucleusRadius = nucleusRadius;
    this._radius = nucleusRadius * 8;
    this._electronCount = electronCount;
    this._deltaAngle = PI / electronCount;
    this._rotsPerSec = rotsPerSec;
    this._rotation = 0;
    this.generateRandoms(20);
    this._tailSpheres = tailSpheres;
    this._noise = false;
    this._nucleusVibrate = false;
    this._electronVibrate = false;
    this._spinX = false;
    this._spinY = false;
    this._spinZ = false;
    this._enableOrbits = true;
    this._names = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium', 'Boron', 'Carbon', 'Nitrogen', 'Oxygen', 'Fluorine', 'Neon'];
    this._nucleusColor = color(3, 28, 193);
    this._electronColor = color(193, 3, 3);
    //Keeps track of spinning in x-axis
    this._counterX = Math.random(100);
    //Keeps track of spinning in y-axis
    this._counterY = Math.random(100);
    //Keeps track of spinning in z-axis
    this._counterZ = Math.random(100);
  }

  /**
   * Gets the name of the atom (according to the periodic table).
   * @returns {string}
   */

  get name() {
    return this._names[this._electronCount - 1];
  }

  /**
   * Gets the color of the nucleus.
   * @returns {p5.Color}
   */

  get nucleusColor() {
    return this._nucleusColor;
  }

  /**
   * Sets the color of the nucleus.
   * @param {p5.Color} newColor
   * @returns {undefined} nothing
   */

  set nucleusColor(newColor) {
    this._nucleusColor = newColor;
  }

  /**
   * Gets the color of the electrons.
   * @returns {p5.Color}
   */

  get electronColor() {
    return this._electronColor;
  }

  /**
   * Sets the color of the electrons.
   * @param {p5.Color} newColor
   * @returns {undefined} nothing
   */

  set electronColor(newColor) {
    this._electronColor = newColor;
  }

  /**
   * Gets the radius (in pixels) of the nucleus.
   * @returns {number}
   */

  get nucleusRadius() {
    return this._nucleusRadius;
  }

  /**
   * Sets the radius (in pixels) of the nucleus.
   * @param {number} newRadius
   * @returns {undefined} nothing
   */

  set nucleusRadius(newRadius) {
    this._nucleusRadius = newRadius;
    /* Here we update the radius of the whole atom every time we change the nucleus radius
    so that everything stays nicely proportioned. */
    this._radius = newRadius * 8;
  }

  /**
   * Gets the current number of electrons in the atom.
   * @returns {number}
   */

  get electronCount() {
    return this._electronCount;
  }

  /**
   * Sets the current number of electrons in the atom.
   * @param {number} newElectronCount
   * @returns {undefined} nothing
   */

  set electronCount(newElectronCount) {
    this._electronCount = newElectronCount;
    this._deltaAngle = PI / this.electronCount;
  }

  /**
   * Gets the orbital speed of the the electrons.
   * @returns {number}
   */

  get electronSpeed() {
    return this._rotsPerSec;
  }

  /**
   * Sets the orbital speed of the electrons.
   * @param {number} newSpeed
   * @returns {undefined} nothing
   */

  set electronSpeed(newSpeed) {
    this._rotsPerSec = newSpeed;
  }

  /**
   * Gets whether spinning about the x-axis is enabled or disabled.
   * @returns {boolean}
   */

  get spinX() {
    return this._spinX;
  }

  /**
   * Sets whether spinning about the x-axis is enabled or disabled.
   * @param {boolean} newSpinX
   * @returns {undefined} nothing
   */

  set spinX(newSpinX) {
    this._spinX = newSpinX;
  }

  /**
   * Gets whether spinning about the y-axis is enabled or disabled.
   * @returns {boolean}
   */

  get spinY() {
    return this._spinY;
  }

  /**
   * Sets whether spinning about the y-axis is enabled or disabled.
   * @param {boolean} newSpinY
   * @returns {undefined} nothing
   */

  set spinY(newSpinY) {
    this._spinY = newSpinY;
  }

  /**
   * Gets whether spinning about the z-axis is enabled or disabled.
   * @returns {boolean}
   */

  get spinZ() {
    return this._spinZ;
  }

  /**
   * Sets whether spinning about the z-axis is enabled or disabled.
   * @param {boolean} newSpinZ
   * @returns {undefined} nothing
   */

  set spinZ(newSpinZ) {
    this._spinZ = newSpinZ;
  }

  /**
   * Gets whether the nucleus is vibrating.
   * @returns {boolean}
   */

  get nucleusVibrate() {
    return this._nucleusVibrate;
  }

  /**
   * Sets whether the nucleus is vibrating.
   * @param {boolean} newVal
   * @returns {undefined} nothing
   */

  set nucleusVibrate(newVal) {
    this._nucleusVibrate = newVal;
  }

  /**
   * Gets whether the electrons are vibrating.
   * @returns {boolean}
   */

  get electronVibrate() {
    return this._electronVibrate;
  }

  /**
   * Sets whether the electrons are vibrating.
   * @param {boolean} newVal
   * @returns {undefined} nothing
   */

  set electronVibrate(newVal) {
    this._electronVibrate = newVal;
  }

  /**
   * Gets whether the nucleus has noise.
   * @returns {boolean}
   */

  get noise() {
    return this._noise;
  }

  /**
   * Sets whether the nucleus has noise.
   * @param {boolean} newVal
   * @returns {undefined} nothing
   */

  set noise(newVal) {
    this._noise = newVal;
  }

  /**
   * Gets the counterX value.
   * @returns {number} _counterX
   */

  get counterX() {
    return this._counterX;
  }

  /**
   * Gets the counterY value.
   * @returns {number} _counterY
   */

  get counterY() {
    return this._counterY;
  }

  /**
   * Gets the counterZ value.
   * @returns {number} _counterZ
   */

  get counterZ() {
    return this._counterZ;
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
      translate(this._posX + random(-2, 2), this._posY + random(-2, 2));
    } else {
      translate(this._posX, this._posY);
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
        line(this.posX, this.posY, 0, rand.x, rand.y, rand.z);
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
   * Increment counterX by amount if spinX is enabled.
   * @param {number} amount
   */

  incrementCounterX(amount) {
    if (atom.spinX) {
      this._counterX += amount;
    }
  }

  /**
   * Increment counterY by amount if spinY is enabled.
   * @param {number} amount
   */

  incrementCounterY(amount) {
    if (atom.spinY) {
      this._counterY += amount;
    }
  }

  /**
   * Increment counterZ by amount if spinZ is enabled.
   * @param {number} amount
   */

  incrementCounterZ(amount) {
    if (atom.spinZ) {
      this._counterZ += amount;
    }
  }

  /**
   * Draws the nucleus, electrons and orbits to the canvas.
   */

  draw() {

    this.incrementCounterX(0.1);
    this.incrementCounterY(0.1);
    this.incrementCounterZ(0.1);

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
