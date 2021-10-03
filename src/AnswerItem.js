import React from "react";
import {Component} from 'react';

class AnswerItem extends Component{   
    render (){
        function roundToTwo(num) {    
            return +(Math.round(num + "e+2")  + "e-2");
        }
        return( <div>
            <p>Answer: {roundToTwo(this.props.answer)}</p>
            <p>Input variables: a = {this.props.a} b = {this.props.b} N = {this.props.N}</p>
            <button onClick={this.props.onDelete}>Delete</button>
        </div>
        );
    }
}
export default AnswerItem;