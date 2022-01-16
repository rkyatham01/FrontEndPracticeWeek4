//A IIFE function
//Immedietly Invoked Function Expression
//Wraps it around
(function() {
//creating an object
var helloSpeaker = {}
//the speakword
var speakword = "Hello"

var helloSpeaker = {
  speak: function(anything){
    console.log(speakword + " " + anything)
  }
} 

//Exposed through the window the helloSpeaker globally
window.helloSpeaker = helloSpeaker;
})();