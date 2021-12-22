import React from "react";
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = props =>(
    <ul className = {'AnswersList'}>
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