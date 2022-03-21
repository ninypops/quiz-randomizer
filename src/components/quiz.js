import React from 'react';
import quizObj from '../constants';

const Quiz = () => (
    <>
        {
            quizObj.map((q, i) => (
                // TODO: Wrap in carousel
                <>
                    <p key={i}>
                        {q.question}
                    </p>
                    <ul className="test">
                        {(q.answers).map((a, i) => (
                            <li key={`${i}_answers`}>
                                {a}
                            </li>
                        ))}
                    </ul>
                    <button
                        type="button"
                        disabled=""
                        onClick={() => {console.log('button is clicked')}}
                    >
                        Check answer
                    </button>
                </>
            ))
        }
    </>
)

export default Quiz;