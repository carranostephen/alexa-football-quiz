// This is Lambda code for the football quiz Alexa skill that asks the user questions
// and give the user a score for their correct answers.
// Created by: Stephen Carrano

'use strict';

// This is the array of questions that are used in the quiz.
var questions = ["Who wears the number thirteen on the New York Giants?", 
                "Who is the quarterback for the New England Patriots?",
                "How many teams are in the NFL?",
                "Who won the first super bowl?",
                "Who has the most rushing yards in a career?"];

// These are the answers to the questions above and the positions of the answers
// correlate to questions positions in each array.
var answers = ["Odell Beckham Jr.", "Tom Brady", "32", "Green Bay Packers", "Emmitt Smith"];

// Count is used to move on to the next question and score is used to calculate 
// the percentage of questions correct.
var count = 0;
var score = 0;

// This is where all of the intents are located when my skill is invoked.
var handlers = {
  // If the intent is not correct, this function will tell you there was a problem.
  'LaunchRequest': function () { 
        this.emit(':tell', "No intent by that name."); 
  },
  
  // This intent starts to read the questions in the questions array and waits for a response.
  'footballQuizIntent': function () { 
        this.response.speak(questions[count]).listen(questions[count]);
        this.emit(':responseReady');
  },
  
  // This intent take in the response from above and makes it "answer".
  // The intent then checks the answer to the answers array and adds 1 to the score
  // if they match and 1 to count in order to move on to the next question.
  'answerIntent': function() {
        let answer = this.event.request.intent.slots.answer.value;
        if(answers[count] == answer){
            score++;
            count++;
        }
        
        // If the answer is incorrect, only count goes up 1 in order to move
        // on to the next question.
        else
            count ++;
            
        // When the last question is reached, Alexa will output the score intent.
        if(count == questions.length) {
            this.emit('scoreIntent');
        }
        
        // This reads off the next question from the footballQuizIntent and restarts
        // the whole process of answering the question and checking the answer.
        this.emit('footballQuizIntent');
  },
  
  // When called in answerIntent, Alexa says "Your score is __%."
  'scoreIntent': function() {
      this.response.speak("Your score is " + percentScore(score) + "%.");
      this.emit(':responseReady');
  }
};

// This function, when called in scoreIntent, will calculate your percentage of 
// questions you got correct and return the score.
function percentScore(score) {
    return ((score / questions.length) * 100);
}
// This is the function that AWS Lambda calls every time Alexa uses your skill.
exports.handler = function(event, context, callback) {
  // Include the AWS Alexa Library.
  const Alexa = require("alexa-sdk");

  // Create an instance of the Alexa library and pass it the requested command.
  var alexa = Alexa.handler(event, context);

  // Give our Alexa instance instructions for handling commands and execute the request.
  alexa.registerHandlers(handlers);
  alexa.execute();
};
