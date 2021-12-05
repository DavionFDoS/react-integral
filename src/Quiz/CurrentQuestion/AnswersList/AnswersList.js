import React from "react";
import AnswerItem from "./AnswerItem/AnswerItem";
import classes from './AnswersList.css'

const AnswersList = props =>(
    <ul className = {classes.AnswersList}>
        {props.answers.map((answer, index) =>{
            return(
                <AnswerItem 
                key ={index} 
                answer = {answer}
                onAnserClick = {props.onAnserClick}
                />
            )
        })}
    </ul>
)

export default AnswersList