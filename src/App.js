import React from 'react';
import './App.css';
import AnswerItem from './AnswerItem';
import BackGround from './imgonline-com-ua-Resize-JpYQQ4al88MXhv.png';
class App extends React.Component{
  
  constructor (props){
    super(props);
    this.state={
      AnswerList:[],
      a:0, 
      b:100, 
      N:100,
      parameterList:[]
    }
    this.onAChange = this.onAChange.bind(this);
    this.onBChange = this.onBChange.bind(this);
    this.onNChange = this.onNChange.bind(this);
    this.deleteAllHandler=this.deleteAllHandler.bind(this);
    this.calculateHandler=this.calculateHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
  }

  function(x){
    return Math.pow(Math.E, x) * Math.sin(x) * Math.cos(x); 
  }

  ToString (x){
    return x.toString;
  }

  deleteHandler(index){
    let answerList = this.state.AnswerList;
    if(answerList.length !== 0){   
      answerList.splice(index,1);   
      this.setState({AnswerList:answerList});
    }
  }

  deleteAllHandler()
  {
    const clearedAnswerList=[]
    this.setState({AnswerList:clearedAnswerList})
  }

  onAChange(e) {
    var val = e.target.value;
    this.setState({a: val });
  }

  onBChange(e) {
    var val = e.target.value;
    this.setState({b: val });
  }

  onNChange(e) {
    var val = e.target.value;
    this.setState({N: val });
  }

  

  calculateHandler=()=>{
    let currentList=this.state.AnswerList;
    let result = 0;
    if(this.state.b >= this.state.a){
      let h = (this.state.b - this.state.a) / this.state.N; 
      //rectangle method
      for (let i = 0; i < this.state.N; i++) {
        result += this.function(this.state.a + h * (i + 0.5));
      }    
      result *= h;
      currentList.push({answer: result, a: this.state.a, b: this.state.b, N: this.state.N});   
    this.setState({AnswerList:currentList});
    console.log(this.state.parameterList);  
    }

  }
  render(){

    <style>
      @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
    </style>

    const buttonStyle = {
      backgroundColor: 'red',
      color: 'white',
      border: 'none',
      fontFamily: "Roboto",
      bordeRadius: '10',
      cursor: 'pointer',
    };

    let list = this.state.AnswerList.map((ans,index)=>{
      return(<div style = {{bottom: 'absolute'}}><AnswerItem key = {index} answer = {ans.answer} onDelete = {this.deleteHandler.bind(this, index)}
      a = {ans.a} 
      b = {ans.b} 
      N = {ans.N}/></div>)
    });

    return (
      <div style = {{backgroundImage: `url(${BackGround})`, backgroundSize: 'cover' , backgroundPosition: 'top' , backgroundRepeat: 'no-repeats', minHeight: '100vh', overflow: 'hidden'}} className = "page">
        <div style = {{color: 'white', float: 'right', marginRight: 300}} className="settings">
        <h1 className="header">Расчет интеграла</h1>
        <h2 className="header">Подынтыгральное выражение</h2>
        <p> e^x * sin(x) * cos(x)dx</p>       
        <p>a</p><input type = "text" onChange={this.onAChange}></input>
        <p>b</p><input type = "text" onChange={this.onBChange}></input>
        <p>N</p><input type = "text" onChange={this.onNChange}></input> 
        <br/>
        <br/>
        <br/>
        <div>
        <button style = {buttonStyle} onClick = {this.calculateHandler}>Вычислить</button>
        <button style = {buttonStyle} onClick ={this.deleteAllHandler}>Очистить все</button>
        </div>
          {list.reverse()}
        </div>
      </div>         
    );
  }

}
export default App;
