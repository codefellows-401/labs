
# 04: Buffers - Bitmap Transformer
## Overview
For this assignment you will be building a bitmap (.bmp) transformer CLI. It will read a bitmap in from disk, run one or more color or raster transforms and then write it out to a new file. This project will require the use of node buffers in order to manipulate binary data. Your solution should be composed of small tested modules that solve specific problems. Your modules should be thoughfuly named and well documented. The entry point to your CLI should be an index.js file in the root of your package, and all helper modules should be placed in your lib/ directory. Your bitmap transformer modules should not use any third party libraries.

- **Assignment 1:** Do this with callbacks
- **Assignment 2:** Modularize the code
- **Stretch Goal:** Refactor to use promises

Also consider the following: 
- What should be unique, testable modules? 
- What structure should you use to most easily export? 
- How best can we make this scale?

## Tools & Dependencies
- **NodeJS: FileSystem (module)**
- **JestJS**

## Checklist
- **[x] Setup project**
- **[ ] Create bitmap transformer CLI**
- **[ ] Testing**
- **[ ] Stretch Goals**

## Team
- Ben Harris
- Emery Parks
- Jennifer Cardigan

## Q&A
- Explain how this works: const [file, operation] = process.argv.slice(2);
  - Whenever you run this code in the CLI (via 'node index.js') you can pass a set of arguments that will be brough into the code when  the code executes. These additional arguments are stored as an array in 'params.argv', where the first index (index 0) contains the address of the program running the script (i.e. node) and the second index (index 1) contains the program's complete filepath. Any additional arguments run after the 'node index.js' are stored as separate indexes of the array, which can be useful for loading in additional information. Regarding '.slice(2)', this slices the first two indexes off of params.argv, and assigns the individual values (respectively) to 'file' and 'operation'. This is a common practice in programming, as these can be used throughout your program to quickly find 