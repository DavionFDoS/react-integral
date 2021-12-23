import React from "react";
import classes from './AnswerItem.css'

const AnswerItem = props =>{
    return(
        <li 
        className = {'AnswerItem'}
        onClick = {() => props.onAnserClick(props.answer)}>
            {props.answer}
        </li>
    )
}

export default AnswerItem