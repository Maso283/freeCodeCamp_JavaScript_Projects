function convertToRoman(num) {



	//Initializing the variables we will need
	let zeroes = "";
	//Catches the Roman numerals
	let romanNumerals = "";

	//Roman numerals to Arabic numerals dictionary
	const romaniAdArabic = {

		I:'1',
		IV:'4',
		V:'5',
		VX:'9',
		X:'10',
		L:'50',
		C:'100',
		D:'500',
		M:'1000'

	};

	

	//convert integer into a string
	num = num.toString()

	//split num into an array
	num = num.split("");


	
	//Iterare through array in reverse
	for (counter = num.length - 1; counter >= 0; counter--) {

		num[counter] += zeroes;
		alert(num[counter]); //for testing purposes only
		zeroes += "0";

	};


	/* For the length of the array
			For the length of the string
				if (array[iteration] is length of 1){
					if (array[iteration][0] is less than 4) {
						add "I" * array[iteration][0 value] to romanNumerals
					} else if (array[iteration][0] is equal to 4) {
							add "IV" to romanNumerals}

					  else if (array[iteration][0] is equal to or greater than 5 and less than 9) {
					  		add "V" and how many "I"'s left over to romanNumerals}*/

	//Prototype of Arabic to Roman conversion
	if (num[1][0] == 5) {

		romanNumerals += "V";

	}

	console.log(romanNumerals)

	//console.log(num[1][0]); OK

	//if (num[0])

	//use if statements and length methods to match each
	//value in the array to the values in the romani library 


	//console.log(typeof(num));

}

convertToRoman(158);
//console.log(typeof(convertToRoman(15)));