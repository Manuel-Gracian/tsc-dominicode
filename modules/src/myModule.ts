// forma 1
// variables
// export const PI = 3.1416;

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

// interface
interface Person {
  id: number;
  name: string;
}

// function
function Generate_Random_Number(): number {
  return Math.floor(Math.random() * 100);
}

export { PI, Person, Generate_Random_Number };
