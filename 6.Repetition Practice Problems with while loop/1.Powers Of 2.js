let number = 6;

let endPoint = Math.pow(2, number);
let result = 1;
let index = 1;
while((index <= endPoint) && (result <= endPoint) && (result < 256)) {
    result *= 2;
    console.log("2 ^ " + index + " = " + result);
    index++;
}