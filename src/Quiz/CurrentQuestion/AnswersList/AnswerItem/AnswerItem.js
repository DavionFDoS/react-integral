import React from "react";


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