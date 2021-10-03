import './App.css';
import React from 'react';
import AnswerItem from './AnswerItem';

class App extends React.Component{
  
  constructor (props){
    super(props);
    this.state={
      AnswerList:[],
      a:0, 
      b:100, 
      N:100,
      answer: 0,
      deleteIndex: 0
    }
    this.onAChange = this.onAChange.bind(this);
    this.onBChange = this.onBChange.bind(this);
    this.onNChange = this.onNChange.bind(this);
    this.onAnswerChange = this.onAnswerChange.bind(this);
    this.deleteAllHandler=this.deleteAllHandler.bind(this);
    this.calculateHandler=this.calculateHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.onDeleteIndexChange = this.onDeleteIndexChange.bind(this);
  }

  function(x){
    return Math.pow(Math.E, x) * Math.sin(x) * Math.cos(x); 
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

  onAnswerChange(e){
    var val = e.target.value;
    this.setState({answer : val});
  }

  onDeleteIndexChange(e){
    var val = e.target.value;
    this.setState({deleteIndex: val});
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
      currentList.push({answer: result});
      console.log(currentList);      
    this.setState({AnswerList:currentList});
    this.setState({answer: result});
    <AnswerItem answer = {result} onDelete = {this.deleteHandler.bind(this, this.state.deleteIndex)}/>;
    }

  }
  render(){
    /*let test = this.state.AnswerList.map((ans,index)=>{
      return(<AnswerItem answer = {ans.answer} onDelete = {this.deleteHandler.bind(this, index)}/>);
    });*/
    return (
      <div className="settings">
        <h1 className="header">Расчет интеграла</h1>
        <p>a</p><input type = "text" onChange={this.onAChange}></input>
        <p>b</p><input type = "text" onChange={this.onBChange}></input>
        <p>N</p><input type = "text" onChange={this.onNChange}></input>
        <p>Answer</p><input type = "text" onChange={this.onAnswerChange} placeholder = "Calcutaling..."></input>
        <br/>
        <br/>
        <br/>
        <button onClick = {this.calculateHandler}> Вычислить</button>
        <button onClick ={this.deleteAllHandler}> Очистить все</button>
        <button onClick = {this.deleteHandler}>Очистить выбранное</button>
        <p>Index</p><input type = "text" onChange={this.onDeleteIndexChange}></input>  
        </div>
      
    );
  }

}
export default App;
