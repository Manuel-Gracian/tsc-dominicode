const user_name = "Manuel";
let myTypeString: string = "Hello World";
let myTypeNumber: number = 12;
let myTypeBoolean: boolean = true;

myTypeNumber = parseFloat("0");

// array
let arrayNumber: number[] = [1, 4, 7];
let arrayString: string[] = ["Hi", "my", "Darling", "!"];

// tuple
let tuplePlayers: [string, number, boolean] = ["x", 1, false];

// Incorrect (assign string "true" where is boolean)
//tuplePlayers = ["x", 1, "true"];

// Array of Tuple
let players: [number, string][];
players = [
  [1, "Lebron"],
  [2, "Durant"],
  [3, "Pipen"],
];

// Inferencia de tipo se asigna el tipod e datos en base
// al valor que se le asigna:
let myString = "es string y no podra asignarsele otro tipo";
// Error
// myString = 0;
let myNumber = 14578;
// Error
//myNumber = false;

// composición de tipos
// Unions
let variable3: string | number | null;
// ok
variable3 = "Hello";
variable3 = 1;
variable3 = null;
// wrong
// variable3 = false
