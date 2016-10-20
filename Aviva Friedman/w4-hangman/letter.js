console.log("letter.js is working");

function Letter(value) {
	this.value = 'string'; 
	this.hidden = true; 

	this.hide = function(){
		this.hidden = true; 
	} 

	this.show = function(){
		this.hidden = false; 
	} 

	this.render= function(){
		if(this.hidden == true){
			return "_"; 

		} else {

			return this.value; 
		}

	}

	
}

var first = new Letter ('a'); 

// ## letter.js 
// Letter is a function that returns a Letter object.  

// ### Letter Properties and Functions
// - `value`, a string
// - `hidden`, a boolean
// - `hide()`, a function that will set `hidden` to true
// - `show()`, a function that will set `hidden` to false
// - `render()`, a function that will return ` _ ` if the letter is hidden. Return the value if the letter is not hidden


