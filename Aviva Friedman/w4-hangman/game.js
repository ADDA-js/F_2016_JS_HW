console.log("game.js is working");

function Game() {
	this.guesses=10, 
	this.guessedLetters = str.split[], 
	this.words = str.split[]; 
	this.currentWord = [ ], 
	
	this.startGame= function (wordsArray){
		this.guesses=10,
		math.random((wordsArray)*1), 
		this.currentWord = word, 
		this.guessedLetters = , 
		this.words = wordArray, 
		this.currentWord

		getLetters(currentWord)


	}


this.guess=function(letter){
if letter = false, 
	try(letter); 

} else {
	return ('You already tried that')
}

this.isOver = function(){
	if (currentWord = true|| guesses = 0) {
		return true;
	} else {
		return false; 
	}
		
}

this.overMessage = function (){

	if (currentWord = true){

		return ("you win");

	} else if{ (guesses = 0){

		return ("you Lose");

	} else {

		return (' ');
	}
	
	}
}

this.render = function (){
	return (word + guesses + guessedLetters)
}




	
}


