// funcion que no retorna void (vacio)
function greet(name: string = "m"): void {
  console.log(`My name is: ${name.toUpperCase()}`);
}

greet("Manuel Valenzuela");
greet();

// funcion que retorna un number
function Get_Number(): number {
  return Math.floor(Math.random() * 100);
}

let v = Get_Number();
console.log(v);

// funcion sin tipo de retorno (void)
function Print_Position(position: { lat: number; lenght: number }): void {
  console.log(
    `Latitude and Longitude are: : ${position.lat}, ${position.lenght}`
  );
}
// comment
interface iPosition {
  lat: number;
  lenght: number;
}
let obj: iPosition = {
  lat: 12,
  lenght: 14,
};
let obj2 = { l: 1, m: 2 };
Print_Position({ lat: 145.25, lenght: 4578.24 });
Print_Position(obj);
console.log(obj.lat);
console.log(obj2);
