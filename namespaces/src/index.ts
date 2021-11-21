/*
comando para crear tsconfig.json
tsc --init

Configuraciones en tsconfig.json

"module": "system",
"outFile": "./dist/output.js",
"outDir": "./dist",

Con esto generamos el archivo output.js en carpeta ./dist
archivo que lleva la funcionalidad de utility.ts y las llamadas desde index.ts
*/
/// <reference path="utility.ts" />
let util = Utility.Taxes;
console.log(util.Calculate_Tax(100));
console.log(util.Calculate_Penalty_Tax(200));
