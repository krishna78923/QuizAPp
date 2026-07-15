import { useState } from "react";
import Results from "./results.jsx";


function Quiz() {
  const questionBank = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "London", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question: "Which language is used for web apps?",
      options: ["PHP", "Python", "Javascript", "All"],
      answer: "All",
    },
    {
      question: "What does JSX stand for?",
      options: [
        "JavaScript XML",
        "Java Syntax eXtension",
        "Just a Simple eXample",
        "None of the above",
      ],
      answer: "JavaScript XML",
    },
  ];

  const initialAnswers = [null, null, null];

  const [userAnswers, setUserAnswers] = useState(initialAnswers);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const selectedAnswer = userAnswers[currentQuestion];

  const [isQuizFInished ,setIsQuizFinished]= useState(false);

  function handleSelectedOption(option) {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = option;
    setUserAnswers(newUserAnswers);
  }

  function goToNext() {
    if(currentQuestion === questionBank.length - 1){
      setIsQuizFinished(true);
    }
    if (currentQuestion < questionBank.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  function goToPrev() {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }

  if(isQuizFInished){
    return <Results userAnswers={userAnswers} questionBank={questionBank} restartQuiz={restartQuiz}/>
  }

  function restartQuiz(){
    setUserAnswers(initialAnswers);
    setCurrentQuestion(0);
    setIsQuizFinished(false);
  }

  return (
    <div className="quiz-container">
      <h2>Question {currentQuestion + 1}</h2>

      <p className="question">
        {questionBank[currentQuestion].question}
      </p>

      {questionBank[currentQuestion].options.map((option) => (
        <button
          key={option}
          className={
            "option" + (selectedAnswer === option ? " selected" : "")
          }
          onClick={() => handleSelectedOption(option)}
        >
          {option}
        </button>
      ))}

      <div className="nav-buttons">
        <button
          onClick={goToPrev}
          disabled={currentQuestion === 0}
        >
          Previous
        </button>

        <button onClick={goToNext} disabled={!selectedAnswer}>
  {currentQuestion === questionBank.length - 1 ? "Finish Quiz" : "Next"}
</button>
      </div>
    </div>
  );
}

export default Quiz;