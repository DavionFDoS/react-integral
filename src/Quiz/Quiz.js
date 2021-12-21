import React, { Component } from "react";
import classes from './Quiz.css'
import Sidebar from '../Sidebar';
import CurrentQuestion from './CurrentQuestion/CurrentQuestion'
import axios from "axios";

export default class Quiz extends Component{

    state = {
        activeQuestion: 0,
        rightAnswersCount: 0,
        questions:[]     
    }

    componentDidMount(){  
        const questionsList = []
        const headers = {
            'Content-Type': 'application/json'
        }
        axios.get("http://localhost:56619/api/Quiz",{
        headers: headers
      })
        .then(res => {
            console.log(res);
            Object.keys(res.data).forEach((key , element) => {
                questionsList.push({id: key, questionText: element.questionText, questionNumber: element.questionNumber, answers: element.answers, correctAnswer: element.correctAnswer})
            });
            console.log(questionsList);

            this.setState({
                questions:  questionsList.slice()
            });
        })
        .catch(error => console.log(error));
    } 

    onAnswerClickHandler = (answerId) =>{
        console.log(answerId);
        const question = this.state.quiz[this.state.activeQuestion]

        if(question.rightAnswerId === answerId){
            const timeout = window.setTimeout(() => {
                if(this.isQuizFinished()){
                    this.setState({
                        rightAnswersCount:  this.state.rightAnswersCount + 1
                    });
                    alert('Ваша оценка ' + String(this.state.rightAnswersCount));
                }else{
                    this.setState({
                        rightAnswersCount: this.state.rightAnswersCount + 1
                    });
                    this.setState({
                        activeQuestion: this.state.activeQuestion+1
                    })
                }
                window.clearTimeout(timeout);
            }, 300)
        }else{
            if(this.isQuizFinished()){
                alert('Ваша оценка ' + String(this.state.rightAnswersCount));        
            }else{
                this.setState({
                    activeQuestion: this.state.activeQuestion+1
                })
            }
        }
    }

    isQuizFinished(){
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    submitHandler = (event) =>{
        event.preventDefault();
    }

    render(){
        return(            
            <div className = {classes.Quizy}>
                <div>
                    <div className = {classes.Wrapper}>
                        <Sidebar/>
                        <h1>Ответьте на вопросы, чтобы получить оценку</h1>
                        <CurrentQuestion 
                        answers = {this.state.questions[this.state.activeQuestion].answers}
                        question = {this.state.questions[this.state.activeQuestion].questionText}
                        onAnserClick = {this.onAnswerClickHandler}
                        quizLength = {this.state.questions.length}
                        questionNumber = {this.state.activeQuestion + 1}
                        />
                    </div>
                </div>                           
        </div>    
        );
    }
}