import React from 'react';
import { Component } from "react";
import BackGround from './imgonline-com-ua-Resize-JpYQQ4al88MXhv.png';
import { SocialIcon } from 'react-social-icons';
import { Button } from './Buttons';
import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';
import AnswerItem from './AnswerItem';
import Sidebar from './Sidebar';

class CalculationPage extends Component
{
    constructor (props){
        super(props);
        this.state={
          AnswerList:[],
          a:0, 
          b:0, 
          N:0,
          parameterList:[],
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
        if(this.state.b >= this.state.a && this.state.N > 0){
          let h = (this.state.b - this.state.a) / this.state.N; 
          //rectangle method
          for (let i = 0; i < this.state.N; i++) {
            result += this.function(this.state.a + h * (i + 0.5));
          }    
          result *= h;
          currentList.push({answer: result, a: this.state.a, b: this.state.b, N: this.state.N});   
        this.setState({AnswerList:currentList}); 
        }
      }
    render()
    {
        let fullList = this.state.AnswerList.map((ans,index)=>{
            return(<div key = {index}><AnswerItem  answer = {ans.answer} onDelete = {this.deleteHandler.bind(this, index)}
            a = {ans.a} 
            b = {ans.b} 
            N = {ans.N}/></div>)
          });
          const Pulse = styled.div`animation: 3s ${keyframes`${pulse}`} infinite`;
          let first = fullList.reverse().splice(0,1);
        return (  
            <div style = {{position: 'absolute', backgroundImage: `url(${BackGround})`, backgroundSize: 'cover',
             backgroundPosition: 'top' , backgroundRepeat: 'no-repeats', height: '100%', width: '100%',
              overflow: 'auto', zIndex: '-1' }} className="page">

              <form style={{ color: 'wheat', float: 'right', marginTop: 200, marginRight: 300 }}>
                <div className="settings">
                  <h1 style={{}} className="header">Расчет интеграла</h1>
                  <h2 className="header2">Подынтегральное выражение</h2>
                  <p style = {{fontStyle: 'inherit', fontSize: '22px'}}> e^x * sin(x) * cos(x)dx</p>
                  <br />
                  <label style = {{fontSize: '24px'}}>
                    a:
                    <input style = {{marginLeft: '5px'}} type="text" onChange={this.onAChange}></input>
                  </label>
                  <br />
                  <br />
                  <label style = {{fontSize: '24px'}}>
                    b:
                    <input style = {{marginLeft: '5px'}} type="text" onChange={this.onBChange}></input>
                  </label>
                  <br />
                  <br />
                  <label style = {{fontSize: '24px'}}>
                    N:
                    <input type="text" onChange={this.onNChange}></input>
                  </label>
                  <br />
                  <br />
                  <div style={{ display: 'inline-flex', marginTop: '20px' }}>
                    <Pulse><Button btnStyle="emphasis" btnSize="large" onClick={this.calculateHandler}>Вычислить</Button></Pulse>
                    <Pulse><Button style={{ marginLeft: 10 }} btnStyle="emphasis" btnSize="large" onClick={this.deleteAllHandler}>Очистить все</Button></Pulse>
                  </div>    
                  <div style = {{color: 'red'}}>{first}</div>
                  {fullList}
                </div>
              </form>
              <Sidebar/>
              <div style={{ position: "absolute", bottom: '0', right: '0', display: 'inline-block', justifyContent: 'flex-end' }}>
                <SocialIcon url='https://github.com/DavionFDoS' bgColor="#ffffff"/>
                <SocialIcon url='https://discord.com/channels/691588243434766386/691588243870711891'/>
                <p style = {{color: "wheat"}}>Деточенко М. А.</p>
              </div>
            </div>        
          );
    }
    
}
export default CalculationPage;