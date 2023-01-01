# Instructions for devs 
(i.e. me, when I forget all this)

### To run locally 

`npm start`

then it will open [http://localhost:3000](http://localhost:3000)

### To build production version

`npm run build`

### To publish to Github Pages

`npm run predeploy`

`npm run deploy`
                                     
how to do it came from here: [React GH Pages](https://github.com/gitname/react-gh-pages)

### To add another function

1. Extend the `DMP` class and override the following methods:

   * `resetFunctionParameters()`
   * `advanceGraph(pos)`
   * `createFunctionParamsGuiFolder(gui)`
   * `getFooterText()`