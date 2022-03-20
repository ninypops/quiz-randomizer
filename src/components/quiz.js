import React from 'react';
import quizObj from '../constants';

const Quiz = () => (
    <>
        {
            quizObj.map((q, i) => (
                <p key={i}>
                    {q.question}
                </p>
            ))
        }
    </>
)

export default Quiz;