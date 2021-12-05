import React, { Component } from "react";
import classes from './Quiz.css'
import Sidebar from '../Sidebar';
import CurrentQuestion from './CurrentQuestion/CurrentQuestion'

export default class Quiz extends Component{

    state = {
        activeQuestion: 0,
        rightAnswersCount: 0,
        quiz: [
            {
                questionNumber:1,
                question:'В чем ограничение метода Симпсона?',
                rightAnswerId:2,
                answers: [
                {text: 'Невозможность задания границ дробными чилами', id:1},
                {text: 'Четное число разбиений', id:2},
                {text: 'Невозможность изменять границы', id:3},
                {text: 'Погрешность более 0.01', id:4}
                ]
            },
            {
                questionNumber:2,
                question:'Какого метода прямоугольных треугольников не бывает?',
                rightAnswerId:4,
                answers: [
                {text: 'Средних', id:1},
                {text: 'Правых', id:2},
                {text: 'Левых', id:3},
                {text: 'Верхних', id:4}
                ]
            },
            {
                questionNumber:3,
                question:'Какой порядок точности у метода трапеций?',
                rightAnswerId:1,
                answers: [
                {text: '1', id:1},
                {text: '2', id:2},
                {text: '3', id:3},
                {text: '4', id:4}
                ]
            },
            {
                questionNumber:4,
                question:'У какого метода наивысший порядок точности?',
                rightAnswerId:4,
                answers: [
                {text: 'Метода прямоугольников', id:1},
                {text: 'Метода трапеций', id:2},
                {text: 'Метода Симпсона', id:3},
                {text: 'Метода Рунге-Кутты 4', id:4}
                ]
            },
            {
                questionNumber:5,
                question:'Чем является определенный интеграл?',
                rightAnswerId:3,
                answers: [
                {text: 'Функцией', id:1},
                {text: 'Пределом', id:2},
                {text: 'Числом', id:3},
                {text: 'Константой', id:4}
                ]
            }
        ],
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
                        rightAnswersCount:  this.state.rightAnswersCount + 1
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
                        answers = {this.state.quiz[this.state.activeQuestion].answers}
                        question = {this.state.quiz[this.state.activeQuestion].question}
                        onAnserClick = {this.onAnswerClickHandler}
                        quizLength = {this.state.quiz.length}
                        questionNumber = {this.state.activeQuestion + 1}
                        />
                    </div>
                </div>                           
        </div>    
        );
    }
}