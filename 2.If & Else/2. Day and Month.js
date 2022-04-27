let date = 04;
let month = 05;
let year = 2020;
console.log("Date : " + date + "/" + month + "/" + year);

date = parseInt(date);
month = parseInt(month);
year = parseInt(year);

if (month<3 || month>6) 
	console.log("False"); 
else if((date<20 && month==3) || (date>20 && month==6)) 
	console.log("False");
else
    console.log("True");