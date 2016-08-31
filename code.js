/*
Functions 2.1
Write a function that takes in two numbers as parameters, adds them together, and sets newNum to equal the sum of the two numbers, then returns newNum.
*/

function sum(num1, num2) {
  var newNum = num1 + num2;
  return newNum;
}

sum(1, 3);


/*
Functions 2.2
The first parameter represents a number to be multiplied against itself and the second parameter represents how many times it is multiplied by itself. The function should return the result of this operation. exponent(2,3) should return 8
*/

function exponent(num, times) {
  var newNum = num;
  for(var i = times - 1; i > 0; i--) {
    newNum = num * newNum;
  }
  num = newNum;
  return num;
}

exponent(2, 3)

/*
Functions 2.3
Write a function called isPrime that accepts 1 parameter and checks if that parameter is a prime number. If the number is prime return true else return false
*/

function isPrime(num) {
  if(num < 2) return false;
  for(var i = 2; i < num; i++) {
    if((num % i) > 0) {
      return true;
    }
    return false;
  }
  return true;
}

isPrime(41)


/*
Functions 2.4
Use the isPrime function to check if a number is prime. If the number is prime then push that number to the primeNumbers array. The listPrimes function takes a number as a parameter then returns all the prime numbers up to the given number
*/


function isPrime(num) {
   if(num < 2) return false;
   for (var i = 2; i < num; i++) {
       if(num%i===0) {
           return false;
       }
   }
   return true;
}
function listPrimes(max) {
    var primeNumbers = []
    for(var i = 0; i < max; i++){
      if(isPrime(i)) {
        primeNumbers.push(i);
      }
    }
    return primeNumbers
}

listPrimes(11)


/*
Functions 2.5
Write a function called longestWord that will find the the longest word in a string
*/

function longestWord(str)
{
  	// str.match is creating an array of individual words
    // Example words = ["this","is","a","test"]
    var words = str.match(/\w[a-z]{0,}/gi);
    var longest = words[0];

    for(var i = 1 ; i < words[i].length ; i++) {
      // If the length of result is less than the length of stringToArray[i] then set the result variable to  stringToArray[i]
      if(words[i].length > longest.length) {
        longest = words[i];
      }
    }
    return longest;
}

longestWord("Words can get longer and longest")


/*
Functions 2.6
Below we have a function called sum that will take an unknown number of arguments and loop over them. Inside the for loop add each argument to the total. Example sum(1,2,3,4) should equal 10
*/


function sum() {
    var i,
        n = arguments.length,
        total = 0;
    for(i = 0; i < n; i++) {
      total = total + arguments[i];
    }
    return total

}

sum(1,2,3,4)

/*
Functions 3.1
This function should return true if there are an equal number of "x"s and "o"s. Inside your for loop, you will need to check if the str[i] is either an "x" or an "o". If it is an "x", push it to the arrayX, and if it is an "o", push it to the arrayO.
*/


var str = 'oxooxxxxooxo'

function exOh(str) {
    var  arrayX = [],
         arrayO = [];

    for(var i = 0; i < str.length; i++){
      if(exOh[i]==="o") {
        arrayO.push(i);
      }
      if(exOh[i]==="x") {
        arrayX.push(i);
      }
    }

    if(arrayX.length === arrayO.length) return true;
    return false

}

exOh(str)



/*
Functions 3.2
Write a function that takes a string parameter and counts how many vowels the string has. Return the count value.
*/


function vowelCount(str1)
{
    var vowels = 'aeiouAEIOU';
    var count = 0;
    var vowelSplit = str1.split('');
    for(var i = 0; i < str1.length; i++)
    {
    	for(var j = 0; j < vowels.length; j++)
    		if(str1[i] === vowels[j]) {
    			++count;
    		}
    }
    return count;
}
vowelCount('followers')
