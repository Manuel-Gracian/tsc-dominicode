"use strict";
// forma 1
// variables
// export const PI = 3.1416;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Generate_Random_Number = exports.PI = void 0;
// // interface
// export interface Person {
//   id: number;
//   name: string;
// }
// // function
// export function Generate_Random_Number(): number {
//   return Math.floor(Math.random() * 100);
// }
// forma 2
// variables
const PI = 3.1416;
exports.PI = PI;
// function
function Generate_Random_Number() {
    return Math.floor(Math.random() * 100);
}
exports.Generate_Random_Number = Generate_Random_Number;
