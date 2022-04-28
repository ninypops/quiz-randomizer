import React , { useState } from 'react';
// import { Button, Carousel } from 'react-bootstrap';
import quizObj from '../constants';

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [showExplanation, setShowExplanation] = useState(false);

    console.log((quizObj[currentQuestion].answers).map((answer, answerIndex) => answerIndex), "answers");
    
    const answeredIndex = quizObj[currentQuestion].answers.map((answer, index) => (index));

    console.log(answeredIndex, "answeredindex");

    // Btn click takes user to next index in obj
    const handleAnswerButtonClick = (answerIndex) => {
        if (quizObj[currentQuestion].correct === answerIndex) {
            alert("the answer is correct");
        } else {
            alert("the answer is wrong");
        }

        console.log(answeredIndex[answerIndex], "answeredindex");
        console.log(quizObj[currentQuestion].correct === answerIndex, 'y or n');
        console.log(answerIndex, "answer key");

        // Show answer explanation to user
        setShowExplanation(true);
    }

    // const indexOfAnswer = (quizObj[currentQuestion].answers).map((answer, answerIndex) => answerIndex);
    // console.log(indexOfAnswer, "index of answer");

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
            className="quiz__content"
        >
                {
                    showScore ? (
                        <div className='score-section'>
                        {/* You scored {score} out of {quizObj.length} */}
                        </div>
                    ) : (
                        <>
                            <h1 className="quiz__question">
                                {quizObj[currentQuestion].question}
                            </h1>
                            <div className="quiz__answers">
                                {(quizObj[currentQuestion].answers).map((answer, answerIndex) => (
                                    <button
                                        className="quiz__answers__btn"
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
                                        <div className="quiz__explanation">
                                        {/* TODO: make this work */}
                                        { answeredIndex[quizObj[currentQuestion].correct] ? (
                                            <p>yes</p>
                                            ) : (
                                            <p>no</p>
                                        )}
                                            <p>
                                                {quizObj[currentQuestion].explanation}
                                            </p>
                                            <button
                                                className="quiz__explanation__btn"
                                                type="submit"
                                                disabled=""
                                                onClick={() => {loadNextQuestion()}}
                                            >
                                                Next question
                                            </button>
                                        </div>
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