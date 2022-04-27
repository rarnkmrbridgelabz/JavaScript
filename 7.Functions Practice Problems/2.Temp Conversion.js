function CelsiusToFahrenheit(celsius) {
    return Math.round((celsius * 9 / 5) + 32);
}

function FahrenheitToCelsius(fahrenheit) {
    return Math.round((fahrenheit - 32) * 5 / 9);
}

function userChoice() {

    
    let choice = parseInt(2);
    switch (choice) {

        case 1:
            let fahrenheit = 98;
            
            var result = FahrenheitToCelsius(fahrenheit);
            console.log("Fahrenheit To Celusis Temperature : " + result);
            break;

        case 2:
            let celsius = 37;
            
            var result = CelsiusToFahrenheit(celsius);
            console.log("Celusis To Fahrenheit Temperature : " + result);
            break;

        default:
            console.log("Enter a valid input");
            break;
    }
}

userChoice();