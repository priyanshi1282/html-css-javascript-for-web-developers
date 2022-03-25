// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2


// STEP 7: Create an object, called 'byeSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
// var byeSpeaker =

// DO NOT attach the speakWord variable to the 'byeSpeaker' object.


// STEP 8: Rewrite the 'speak' function such that it is attached to the
// byeSpeaker object instead of being a standalone function.
// See Lecture 52, part 2


// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
// 'byeSpeaker' on the global scope as well.
// xxxx.xxxx = byeSpeaker;

// Function starts here
(function(window) {

    // speakword is a variable and its value is "Good Bye"
	var speakWord = "Good Bye";

    // byeSpeaker is a variale which calls a function with parameter name
	var byeSpeaker = function (name) {

        // prints "Good Bye Name_from_array" to console
  		console.log(speakWord + " " + name);
	}

	// global scope
	window.byeSpeaker = byeSpeaker;
})(window);
// Funcion ends here 