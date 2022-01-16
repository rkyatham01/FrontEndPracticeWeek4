//A IIFE function
//Immedietly Invoked Function Expression
//Wraps it around
(function() {
//creating an object
var byeSpeaker = {}
//the speakword
var speakWord = "Good Bye";

var byeSpeaker = {
  speak: function(anything){
    console.log(speakWord + " " + anything)
  }
} 

//Exposed through the window the helloSpeaker globally
window.byeSpeaker = byeSpeaker;
})();