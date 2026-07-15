function Results({ questionBank, userAnswers ,restartQuiz}) {
    console.log(questionBank, userAnswers);

    function getScore() {
        let finalScore = 0;

        userAnswers.forEach((answer, index) => {
            if (answer === questionBank[index].answer) {
                finalScore++;
            }
        });

        return finalScore;
    }

    return (
        <div>
            <h2>Quiz Completed!</h2>
            <p>
                Your score: {getScore()}/{questionBank.length}
            </p>
            <button className="restart-button" onClick={restartQuiz}>Restart Quiz</button>
        </div>
    );
}

export default Results;