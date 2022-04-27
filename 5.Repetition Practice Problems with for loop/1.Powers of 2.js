let number = 6;
let endPoint = Math.pow(2, number);

let result = 1;
for (let index = 1; index <= endPoint; index++) {
    if (result <= endPoint) {
        result *= 2;
        console.log("2 ^ " + index + " = " + result);
    }
    else{
        break;
    }
}