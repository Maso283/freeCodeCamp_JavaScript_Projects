function convertToRoman(num) {



	//Initializing the variables we will need
	let numberSplit = [];
	let zeroes = ""

	//Roman numerals to Arabic numerals dictionary
	const romaniAdArabic = {

		I:1,
		V:5,
		X:10,
		L:50,
		C:100,
		D:500,
		M:1000

	};

	

	//convert integer to a string
	num = num.toString()

	//split num into an array
	num = num.split("");


	
	//Iterare through array in reverse
	for (counter = num.length - 1; counter >= 0; counter--) {

		

		//append zero onto zeroes
		//append zero(s) onto array item

		//alert(num)

		alert(zeroes);

		zeroes += "0";

	};

	/*For every number iterated over in the array after
	the last one in the array, append an increment 
	of zeros onto it

	i.e.

	["1", "5", "5", "8"] :Index
	  3    2    1    0   :Zeroes*/

	console.log(num);

	//use if statements and length methods to match each
	//value in the array to the values in the romani library 


	//console.log(typeof(num));

}

convertToRoman(158);
//console.log(typeof(convertToRoman(15)));