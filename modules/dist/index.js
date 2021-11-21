"use strict";
// forma 1 de consumir myModule.ts
// import { Generate_Random_Number, Person, PI } from "./myModule";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// const User: Person = {
//   id: 1,
//   name: "Manuel",
// };
// console.log(PI);
// console.log(User);
// console.log(Generate_Random_Number());
// forma  de consumir myModule.ts
const My_Code = __importStar(require("./myModule"));
const User = {
    id: 1,
    name: "Manuel",
};
console.log(My_Code.PI);
console.log(User);
console.log(My_Code.Generate_Random_Number());
