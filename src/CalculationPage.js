import React from 'react';
import { Component } from "react";
import BackGround from './imgonline-com-ua-Resize-JpYQQ4al88MXhv.png';
import { SocialIcon } from 'react-social-icons';
import { Button } from './Buttons';
import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';
import AnswerItem from './AnswerItem';
import Sidebar from './Sidebar';
import axios from 'axios';

class CalculationPage extends Component
{
    constructor (props){
        super(props);
        var aValue = 0;
        var bValue = 0;
        var nValue = 100;

        var aIsValid = this.ValidateAValue(aValue);
        var bIsValid = this.ValidateBValue(bValue);
        var NIsValid = this.ValidateNValue(nValue);

        this.state={
          AnswerList:[],
          a:aValue, 
          b:bValue, 
          N:nValue,
          aValid: aIsValid,
          bValid: bIsValid,
          NValid: NIsValid,
          integralExpresion: "x*x",
          parameterList:[],
        }

        this.onAChange = this.onAChange.bind(this);
        this.onBChange = this.onBChange.bind(this);
        this.onNChange = this.onNChange.bind(this);
        this.onIntegralExpresionChange = this.onIntegralExpresionChange.bind(this);
        this.deleteAllHandler=this.deleteAllHandler.bind(this);
        this.calculateHandler=this.calculateHandler.bind(this);
        this.deleteHandler = this.deleteHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      ValidateAValue(a)
      {
        return a >=0;
      }

      ValidateBValue(b)
      {
        return b >= 0;
      }

      ValidateNValue(n)
      {
        return n % 2 === 0;
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
        var valid = this.ValidateAValue(val);
        this.setState({a: val , aValid: valid});
      }
    
      onBChange(e) {
        var val = e.target.value;
        var valid = this.ValidateBValue(val);
        this.setState({b: val , bValid: valid});
      }
    
      onNChange(e) {
        var val = e.target.value;
        var valid = this.ValidateNValue(val);
        this.setState({N: val , NValid: valid});
      }

      onIntegralExpresionChange(e) {
        var val = e.target.value;
        this.setState({integralExpresion: val });
      }

      handleSubmit(e) {
        e.preventDefault();
        if(!(this.state.aValid ===true && this.state.bValid===true && this.state.NValid===true)){
            alert("Please check again inputed parameters!");
        }
    }
    
      // calculateHandler=()=>{
      //   let currentList=this.state.AnswerList;
      //   let result = 0;
      //   if(this.state.b >= this.state.a && this.state.N > 0){
      //     let h = (this.state.b - this.state.a) / this.state.N; 
      //     //rectangle method
      //     for (let i = 0; i < this.state.N; i++) {
      //       result += this.function(this.state.a + h * (i + 0.5));
      //     }    
      //     result *= h;
      //     currentList.push({answer: result, a: this.state.a, b: this.state.b, N: this.state.N});   
      //   this.setState({AnswerList:currentList}); 
      //   }
      // }

      calculateHandler(){
        let currentList=this.state.AnswerList;
        let integralVars = {
          a: this.state.a,
          b: this.state.b,
          n: this.state.N,
          integral: this.state.integralExpresion
        };        
        const jsonModel = JSON.stringify(integralVars);
        console.log(jsonModel);
        const headers = {
          'Content-Type': 'application/json'
        }
        //"http://localhost:56619/api/Integral"
        axios.post(process.env.REACT_APP_PATH, jsonModel,{
          headers: headers
        })
          .then(res => {
            currentList.push({answer:res.data.answer, a: this.state.a, b: this.state.b, N: this.state.N});
            this.setState({AnswerList:currentList})
          })    
      }
    render()
    {
      var aInputColor = this.state.aValid===true?"green":"red";
      var bInputColor = this.state.bValid===true?"green":"red";
      var NInputColor = this.state.NValid===true?"green":"red";
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
              <form style={{ color: 'wheat', float: 'right', marginTop: 200, marginRight: 300 }} onSubmit = {this.handleSubmit}>
                <div className="settings">
                  <h1 style={{}} className="header">Расчет интеграла</h1>
                  <h2 className="header2">Введите подынтегральное выражение</h2>
                  <input style = {{marginLeft: '20px'}} type="text" onChange={this.onIntegralExpresionChange }></input>
                  <br />
                  <br />
                  <label style = {{fontSize: '24px'}}>
                    a:
                    <input value={this.state.a} style = {{marginLeft: '5px', borderColor:aInputColor}} type="text" onChange={this.onAChange}></input>
                  </label>
                  <br />
                  <br />
                  <label style = {{fontSize: '24px'}}>
                    b:
                    <input value={this.state.b} style = {{marginLeft: '5px', borderColor:bInputColor}} type="text" onChange={this.onBChange}></input>
                  </label>
                  <br />
                  <br />
                  <label style = {{fontSize: '24px'}}>
                    N:
                    <input value={this.state.N} style={{borderColor:NInputColor}} type="text" onChange={this.onNChange} ></input>
                  </label>
                  <br />
                  <br />
                  <div style={{ display: 'inline-flex', marginTop: '20px' }}>
                    <Pulse><Button type = "submit" btnStyle="emphasis" btnSize="large" onClick={this.calculateHandler}>Вычислить</Button></Pulse>
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