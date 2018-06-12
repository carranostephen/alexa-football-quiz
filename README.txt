This is an NFL football quiz that outputs questions for the user to answer in order to
challenge yourself and get a high score.

The quiz, once invoked, will ask a series of questions that pertain to the NFL and after
the quiz is over, Alexa will tell the user their score percentage. This quiz is supposed
to be used on an Alexa device for a fun game for everyone. By taking the index.js code and
inserting it into the function code on AWS you will be able to use this skill. Also, on the
Alexa Skills Kit Developer Console you must create the invocation name "football quiz"
along with the intents "footballQuizIntent" and "answerIntent". Under the "footballQuizIntent"
insert the sample utterances you would like to call to for the quiz. The sample utterances 
I used were: "take quiz", "take football quiz", "take the quiz", "play quiz", and "play 
football quiz". For the "answerIntent" create a sample utterance that looks like this
{answer}. To use that utterance, you must create an intent slot named "answer" with the
slot type "AMAZON.Athlete".

In order to start this football quiz the user must say "Alexa, open football quiz and take quiz."
The user may choose to use whatever sample utterance they want as long as it is in the
"footballQuizIntent" sample utterances. Once the quiz is invoked, the first question will 
be asked and the user must answer it when it is done being asked. Then another question will
be asked and the user will answer that one and so on. When there are no more questions left,
Alexa will give you your score by saying "Your score is __%" which is the percentage you
answered questions correctly. Alexa will not say anything else after it outputs a score but
the user may invoke the quiz by repeating the steps above.
