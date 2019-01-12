<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [Atom][1]
    -   [Parameters][2]
    -   [name][3]
    -   [nucleusColor][4]
        -   [Parameters][5]
    -   [electronColor][6]
        -   [Parameters][7]
    -   [nucleusRadius][8]
        -   [Parameters][9]
    -   [electronCount][10]
        -   [Parameters][11]
    -   [electronSpeed][12]
        -   [Parameters][13]
    -   [spinX][14]
        -   [Parameters][15]
    -   [spinY][16]
        -   [Parameters][17]
    -   [spinZ][18]
        -   [Parameters][19]
    -   [nucleusVibrate][20]
        -   [Parameters][21]
    -   [electronVibrate][22]
        -   [Parameters][23]
    -   [noise][24]
        -   [Parameters][25]
    -   [generateRandoms][26]
    -   [calcDeltaTime][27]
    -   [drawNucleus][28]
    -   [drawElectrons][29]
    -   [drawElectron][30]
        -   [Parameters][31]
    -   [drawOrbits][32]
        -   [Parameters][33]
    -   [draw][34]

## Atom

Class representing an atom.

### Parameters

-   `posx` **[number][35]** The x position of the nucleus of the atom.
-   `posy` **[number][35]** The y position of the nucleus of the atom.
-   `nucleusRadius` **[number][35]** The radius of the nucleus, in pixels.
-   `rotsPerSec` **[number][35]** A constant that determines how fast the electrons move around their orbits.
-   `electronCount` **[number][35]** The number of electrons in the atom.
-   `noise` **[boolean][36]** Enables or disables noise inside the nucleus.

### name

Gets the name of the atom (according to the periodic table).

Returns **[string][37]** 

### nucleusColor

Sets the color of the nucleus.

#### Parameters

-   `newColor` **p5.Color** 

### electronColor

Sets the color of the electrons.

#### Parameters

-   `newColor` **p5.Color** 

### nucleusRadius

Sets the radius (in pixels) of the nucleus.

#### Parameters

-   `newRadius` **[number][35]** 

### electronCount

Sets the current number of electrons in the atom.

#### Parameters

-   `newElectronCount` **[number][35]** 

### electronSpeed

Sets the orbital speed of the electrons.

#### Parameters

-   `newSpeed` **[number][35]** 

### spinX

Sets whether spinning about the x-axis is enabled or disabled.

#### Parameters

-   `newSpinX` **[boolean][36]** 

### spinY

Sets whether spinning about the y-axis is enabled or disabled.

#### Parameters

-   `newSpinY` **[boolean][36]** 

### spinZ

Sets whether spinning about the z-axis is enabled or disabled.

#### Parameters

-   `newSpinZ` **[boolean][36]** 

### nucleusVibrate

Sets whether the nucleus is vibrating.

#### Parameters

-   `newVal` **[boolean][36]** 

### electronVibrate

Sets whether the electrons vibrate.

#### Parameters

-   `newVal` **[boolean][36]** 

### noise

Sets whether the nucleus has noise.

#### Parameters

-   `newVal` **[boolean][36]** 

### generateRandoms

Generates 20 random rotations between 0 and 2π.
These random rotations determine the starting location of each atom meaning that they are not all in sync.

### calcDeltaTime

Calculates the time passed between each call of draw().

Returns **[number][35]** 

### drawNucleus

Draws the nucleus to the canvas.

### drawElectrons

Draws the specified number of electrons to the canvas.

### drawElectron

Draws a specific electron. Its position relative to other electrons is determined by the index of the electron.

#### Parameters

-   `index` **[number][35]** 

### drawOrbits

Draws the orbit for each electron onto the canvas.

#### Parameters

-   `thickness` **[number][35]** The thickness of the orbit.

### draw

Draws the nucleus, electrons and orbits to the canvas.

[1]: #atom

[2]: #parameters

[3]: #name

[4]: #nucleuscolor

[5]: #parameters-1

[6]: #electroncolor

[7]: #parameters-2

[8]: #nucleusradius

[9]: #parameters-3

[10]: #electroncount

[11]: #parameters-4

[12]: #electronspeed

[13]: #parameters-5

[14]: #spinx

[15]: #parameters-6

[16]: #spiny

[17]: #parameters-7

[18]: #spinz

[19]: #parameters-8

[20]: #nucleusvibrate

[21]: #parameters-9

[22]: #electronvibrate

[23]: #parameters-10

[24]: #noise

[25]: #parameters-11

[26]: #generaterandoms

[27]: #calcdeltatime

[28]: #drawnucleus

[29]: #drawelectrons

[30]: #drawelectron

[31]: #parameters-12

[32]: #draworbits

[33]: #parameters-13

[34]: #draw

[35]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[36]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[37]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String