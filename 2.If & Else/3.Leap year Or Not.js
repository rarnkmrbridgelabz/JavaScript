let year = 2020;
let yearToCheck = parseInt(year);

if ((yearToCheck % 4 == 0 && yearToCheck % 100 == 0) || yearToCheck % 400 == 0) {
	console.log("This year is a LeapYear");
} else {
	console.log("This year is not a LeapYear");
}