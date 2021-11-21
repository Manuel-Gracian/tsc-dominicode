// Type assertion
let channel: any = "Dominicode";

// las aserción de tipo viene siende el casteo.
// type assertion de dos formas
let channelStr = channel as string;
let channelStr2 = <string>channel;

let channelStr3 = channel;

console.log(`${channelStr} , ${channelStr2} , ${channelStr3}`);

// type assertion de dos formas
const my_canvas = document.getElementById("main") as HTMLCanvasElement;
const my_canvas_b = <HTMLCanvasElement>document.getElementById("main");
