import React , { useState } from 'react';
// import { Button, Carousel } from 'react-bootstrap';
import quizObj from '../constants';

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [showExplanation, setShowExplanation] = useState(false)

    // console.log((quizObj[currentQuestion].answers).map(answer => answer.index), "answers");

    // Btn click takes user to next index in obj
    const handleAnswerButtonClick = (answerIndex) => {
        if (quizObj[currentQuestion].correct === answerIndex) {
            alert("the answer is correct");
        } else {
            alert("the answer is wrong");
        }

        console.log(answerIndex, "answer key");
        // Show answer explanation to user
        setShowExplanation(true);
    }

    const loadNextQuestion = () => {
        const nextQuestion = currentQuestion + 1;
        // If next question is less than total no. of questions, update state to next question
        if (nextQuestion < quizObj.length) {
            setCurrentQuestion(nextQuestion);
            setShowExplanation(false);
            // TODO: Add explanation
        } else {
            alert('you reached the end of the quiz');
            setShowScore(true);
        }
    }

    return (
        <div
            className="quiz"
        >
                {
                    showScore ? (
                        <div className='score-section'>
                        {/* You scored {score} out of {quizObj.length} */}
                        </div>
                    ) : (
                        <>
                            <p className="quiz__question">
                                {quizObj[currentQuestion].question}
                            </p>
                            <div className="quiz__answer-section">
                                {(quizObj[currentQuestion].answers).map((answer, answerIndex) => (
                                    <button
                                        key={answerIndex}
                                        type="submit"
                                        disabled=""
                                        onClick={() => {handleAnswerButtonClick(answerIndex)}}
                                    >
                                        {answer}
                                    </button>
                                ))}
                                {
                                    showExplanation && (
                                        <>
                                            <p>
                                                {quizObj[currentQuestion].explanation}
                                            </p>
                                            <button
                                                type="submit"
                                                disabled=""
                                                onClick={() => {loadNextQuestion()}}
                                            >
                                                Next question
                                            </button>
                                        </>
                                    )
                                }
                            </div>
                        </>
                    )
                }
        </div>
    )
}

export default Quiz;