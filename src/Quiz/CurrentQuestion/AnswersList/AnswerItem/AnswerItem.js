import React from "react";
import classes from './AnswerItem.css'

const AnswerItem = props =>{
    return(
        <li 
        className = {classes.AnswerItem}
        onClick = {() => props.onAnserClick(props.answer.id)}>
            {props.answer.text}
        </li>
    )
}

export default AnswerItem