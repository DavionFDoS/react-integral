import React, { Component } from "react";
import Sidebar from '../Sidebar';
import CurrentQuestion from './CurrentQuestion/CurrentQuestion'
import axios from "axios";
import classes from './Quiz.css'
export default class Quiz extends Component{

    state = {
        activeQuestion: 0,
        rightAnswersCount: 0,
        questions:[{
              answers: [
              ]
            }]
    }

    componentDidMount(){  
        const headers = {
            'Content-Type': 'application/json'
        }
        axios.get("http://localhost:56619/api/Quiz",{
        headers: headers
      })
        .then(res => {
            console.log(res);
            this.setState({
                questions:  res.data.slice()
            });
            console.log(this.state.questions);
        })
        .catch(error => console.log(error));
    } 

    onAnswerClickHandler = (answerText) =>{
        if(answerText === this.state.questions[this.state.activeQuestion].answers[this.state.questions[this.state.activeQuestion].correctAnswer - 1]){
            const timeout = window.setTimeout(() => {
                if(this.isQuizFinished()){
                    this.setState({
                        rightAnswersCount:  this.state.rightAnswersCount + 1
                    });
                    alert('Ваша оценка ' + String(this.state.rightAnswersCount));
                    this.RestartQuiz();
                }else{
                    this.setState({
                        rightAnswersCount: this.state.rightAnswersCount + 1
                    });
                    this.setState({
                        activeQuestion: this.state.activeQuestion+1
                    })
                }
                window.clearTimeout(timeout);
            }, 200)
        }else{
            if(this.isQuizFinished()){
                alert('Ваша оценка ' + String(this.state.rightAnswersCount));
                this.RestartQuiz();     
            }else{
                this.setState({
                    activeQuestion: this.state.activeQuestion+1
                })
            }
        }
    }

    RestartQuiz(){
        this.setState({
          activeQuestion: 0,
          rightAnswersCount: 0,
              quiz:[{
                  questionText: 'Тестирование окончено!',
                    answers: [
                    ],
                    correctanswer:0
                  }]
        })
    }

    isQuizFinished(){
        return this.state.activeQuestion + 1 === this.state.questions.length
    }

    submitHandler = (event) =>{
        event.preventDefault();
    }

    render(){
        return(     
        <div>
            <Sidebar/>
            <div className = {'Quizy'}>               
                <div>
                    <div className = {'Wrapper'}>                       
                        <h1>Ответьте на вопросы, чтобы получить оценку</h1>
                        <CurrentQuestion key = {Math.random(10)}
                            answers = {this.state.questions[this.state.activeQuestion].answers}
                            question = {this.state.questions[this.state.activeQuestion].questionText}
                            onAnserClick = {this.onAnswerClickHandler}
                            quizLength = {this.state.questions.length}
                            questionNumber = {this.state.activeQuestion + 1}
                        />                  
                    </div>
                </div>                           
            </div>    
        </div> 
        );
    }
}