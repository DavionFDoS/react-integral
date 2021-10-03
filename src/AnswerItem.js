import { Component } from "react";
class AnswerItem extends Component{
    
    render (){
        return( <div>
            <p>Answer: {this.props.answer}</p>
            <button onClick={this.props.onDelete}>X</button>
        </div>
        );
    }
}
export default AnswerItem;