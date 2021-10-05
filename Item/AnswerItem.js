import { Component } from "react";

class AnswerItem extends Component{
    
    render (){
        return( <div>
            <p>Answer: {this.props.answer}</p>
            <Button btnStyle="primary" btnSize="large" onClick={this.props.onDelete}>X</Button>
        </div>
        );
    }
}
export default AnswerItem;