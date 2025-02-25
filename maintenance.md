# Instructions for devs 
(i.e. me, when I forget all this)

### To run locally 

`npm run dev`

then it will open [http://localhost:5173/](http://localhost:5173/)

### To build production version

`npm run build`

### To publish to GitHub Pages

`npm run deploy`

### To add another function

1. Extend the `DMP` class and override the following methods:

   * `resetFunctionParameters()`
   * `advanceGraph(pos)`
   * `createFunctionParamsGuiFolder(gui)`
   * `getFooterText()`