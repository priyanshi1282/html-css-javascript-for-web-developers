// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2


// STEP 3: Create an object, called 'helloSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
// var helloSpeaker =

// DO NOT attach the speakWord variable to the 'helloSpeaker' object.


// STEP 4: Rewrite the 'speak' function such that it is attached to the
// helloSpeaker object instead of being a standalone function.
// See Lecture 52, part 2

// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
// 'helloSpeaker' on the global scope as well.
// See Lecture 52, part 2
// (Note, Step 6 will be done in the SpeakGoodBye.js file.)
// xxxx.xxxx = helloSpeaker;

// Function starts here
(function(window) {

    // speakWord is a variable and its value is "Hello"
	var speakWord = "Hello";

    // helloSpeaker varibale calls a function with parameter name
	var helloSpeaker = function (name) {

        // printing "Hello Name_from_aray" to console
		console.log(speakWord + " " + name);
	}

    // global scope
	window.helloSpeaker = helloSpeaker;
})(window);
// Function ends here