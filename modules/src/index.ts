// forma 1 de consumir myModule.ts
// import { Generate_Random_Number, Person, PI } from "./myModule";

// const User: Person = {
//   id: 1,
//   name: "Manuel",
// };

// console.log(PI);
// console.log(User);
// console.log(Generate_Random_Number());

// forma  de consumir myModule.ts
import * as My_Code from "./myModule";

const User: My_Code.Person = {
  id: 1,
  name: "Manuel",
};

console.log(My_Code.PI);
console.log(User);
console.log(My_Code.Generate_Random_Number());
