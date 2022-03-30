import React , { useState } from 'react';
// import { Button, Carousel } from 'react-bootstrap';
import quizObj from '../constants';

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    // Btn click takes user to next index in obj
    const handleAnswerButtonClick = (answers) => {
        const nextQuestion = currentQuestion + 1;
        // If next question is less than total no. of questions, update state to next question
        if (nextQuestion < quizObj.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            // else, add alert when user reaches obj limit so we don't error out
            alert(`You've reached the end of the quiz!`);
        }
    }

    return (
        <div
            className="quiz"
        >
            <>
                <p className="quiz__question">
                    {quizObj[currentQuestion].question}
                </p>
                <div className="quiz__answer-section">
                    {(quizObj[currentQuestion].answers).map((a, i) => (
                        <button
                            key={`${i}_answers`}
                            type="submit"
                            disabled=""
                            onClick={() => {handleAnswerButtonClick()}}
                        >
                            {a}
                        </button>
                    ))}
                </div>
            </>
        </div>
    )
}

export default Quiz;