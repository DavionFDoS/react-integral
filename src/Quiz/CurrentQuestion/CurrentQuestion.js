import React from 'react';
import classes from './CurrentQuestion.css'
import AnswersList from './AnswersList/AnswersList.js'


const CurrentQuestion = props =>(
    <div className = {classes.CurrentQuestion}>
        <p className = {classes.Question}>
            <span>
                <strong>
                    {props.questionNumber}
                </strong>&nbsp;
                {props.question}
            </span>
            <small>
                {props.questionNumber} из {props.quizLength}
            </small>
        </p>
        <AnswersList 
        answers = {props.answers}
        onAnserClick = {props.onAnserClick}
        />
    </div>
)

export default CurrentQuestion
