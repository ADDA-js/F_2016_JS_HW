//Xonatia Lee
console.log("Test works");

//finds max
var numbers = [16, 25, 4, 13, 57, 88, 102, 45];
var max = numbers[0];
for(var i = 1; i < numbers.length; i++) 
{
 	if(max > numbers[i]){
		max = max; 
		i++; 
}
	if(numbers[i] > max){
		max = numbers[i];
		i++;
	}
}
var printMax = function(numbers, max){
	return printMax + " max is " + numbers;
}
console.log(printMax(max));

//random return
var numbers = [16, 25, 4, 13, 57, 88, 102, 45]; 
var rand = numbers[Math.floor(Math.random() * numbers.length)]
var x = function(numbers, rand) {
return x + " " + numbers
}
console.log(x(rand))

//number of instances 
var string = ["Ob-La-Di", "Ob-La-Da"];
var character
var numIn = function(string, character) {
	return numIn + " " + string
}
console.log(numIn(character))
console.log(numIn(string, 'a')) //should print out 3
console.log(numIn(string, '-')) //should print out 4 

//change case 
var str = "The Quick Brown Fox"; 

for(var i = 0; i <= str.length; i++) {
	if(str.charAt(i) == str.toUpperCase()) {
		str.charAt(i) = str.toLowerCase; 
		i++;
	}
	else(str.charAt(i) == str.toLowerCase())
		str.charAt(i) = str.toUpperCase(); 
		i++;
	
}
var changeCase = function(str) {
	return changeCase + " " + str;
}
console.log(changeCase(str)); //should print 'tHE qUICK bROWN fOX'

//no repeat
var array = ['a', 'b', 'a', 'c', 'c', 'b', 'd', 'd', 'a', 'c', 'd'];
for(var i = 0; i <= array.length; i++)  {

}

