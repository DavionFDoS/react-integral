import React from 'react';
import { Component } from "react";
import BackGround from './imgonline-com-ua-Resize-JpYQQ4al88MXhv.png';
import { SocialIcon } from 'react-social-icons';
import { Button } from './Buttons';
import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';
import AnswerItem from './AnswerItem';
import {Calculate, DeleteAll,Delete} from './store/actionTypes/actions'
import Sidebar from './Sidebar';
import axios from 'axios';
import {connect} from 'react-redux'
class CalculationPage extends Component
{
    constructor (props){
        super(props);
        console.log(props);
        var aValue = 0;
        var bValue = 0;
        var nValue = 100;
        var aIsValid = this.ValidateAValue(aValue);
        var bIsValid = this.ValidateBValue(bValue);
        var NIsValid = this.ValidateNValue(nValue);

        this.state={
          a:aValue, 
          b:bValue, 
          N:nValue,
          aValid: aIsValid,
          bValid: bIsValid,
          NValid: NIsValid,
          integralExpresion: "x*x"
        }
        this.onAChange = this.onAChange.bind(this);
        this.onBChange = this.onBChange.bind(this);
        this.onNChange = this.onNChange.bind(this);
        this.onIntegralExpresionChange = this.onIntegralExpresionChange.bind(this);
        //this.deleteAllHandler=this.deleteAllHandler.bind(this);
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
        this.props.onDel(index);
        // let answerList = this.state.AnswerList;
        // if(answerList.length !== 0){   
        //   answerList.splice(index,1);   
        //   this.setState({AnswerList:answerList});
        // }
      }
    
      // deleteAllHandler()
      // {
      //   const clearedAnswerList=[]
      //   this.setState({AnswerList:clearedAnswerList})
      // }
    
      onAChange(e) {
        var val = e.target.value;
        var valid = this.ValidateAValue(val);
        // const dispatch = useDispatch();
        // if(valid){
        //   dispatch({
        //     type: CHANGEA,
        //     val,
        //   });
        // }
        this.setState({a: val , aValid: valid});
      }
    
      onBChange(e) {
        var val = e.target.value;
        var valid = this.ValidateBValue(val);
        // const dispatch = useDispatch();
        // if(valid){
        //   dispatch({
        //     type: CHANGEB,
        //     val,
        //   });
        // }
        this.setState({b: val , bValid: valid});
      }
    
      onNChange(e) {
        var val = e.target.value;
        var valid = this.ValidateNValue(val);
        // const dispatch = useDispatch();
        // if(valid){
        //   dispatch({
        //     type: CHANGEN,
        //     val,
        //   });
        // }
        this.setState({N: val , NValid: valid});
      }

      onIntegralExpresionChange(e) {
        var val = e.target.value;
        // const dispatch = useDispatch();
        // dispatch({
        //   type: CHANGEIE,
        //   val,
        // });
        this.setState({integralExpresion: val });
      }

      handleSubmit(e) {
        e.preventDefault();
        if(!(this.state.aValid ===true && this.state.bValid===true && this.state.NValid===true)){
            alert("Please check inputed parameters again!");
        }
    }

      calculateHandler(){
        let currentList=this.props.AnswerList;
        let integralVars = {
          a: this.state.a,
          b: this.state.b,
          n: this.state.N,
          integral: this.state.integralExpresion
        };        
        const jsonModel = JSON.stringify(integralVars);
        const headers = {
          'Content-Type': 'application/json'
        }
        //"http://localhost:56619/api/Integral" process.env.REACT_APP_PATH
        axios.post("http://localhost:56619/api/Integral", jsonModel,{
          headers: headers
        })
          .then(res => {
            currentList.push({answer:res.data.answer, a: integralVars.a, b: integralVars.b, N: integralVars.n});
            this.props.onCalc(currentList);  
            //this.setState({AnswerList:currentList})
          })
          .catch(error => console.log(error));    
      }


    render()
    {
      var aInputColor = this.state.aValid===true?"green":"red";
      var bInputColor = this.state.bValid===true?"green":"red";
      var NInputColor = this.state.NValid===true?"green":"red";
      let fullList = this.props.AnswerList.map((ans,index)=>
      {
        if(index === 0)        
          return(<div style = {{color: "red"}} key = {index}><AnswerItem  answer = {ans.answer} onDelete = {this.deleteHandler.bind(this, index)}
            a = {ans.a} 
            b = {ans.b} 
            N = {ans.N}/></div>);
      
          return(<div key = {index}><AnswerItem  answer = {ans.answer} onDelete = {this.deleteHandler.bind(this, index)}
          a = {ans.a} 
          b = {ans.b} 
          N = {ans.N}/></div>)  
      });      
      const Pulse = styled.div`animation: 3s ${keyframes`${pulse}`} infinite`;
        return (  
          <div>
            <div style = {{position: 'absolute', backgroundImage: `url(${BackGround})`, backgroundSize: 'cover',
             backgroundPosition: 'top' , backgroundRepeat: 'no-repeats', height: '100%', width: '100%',
              overflow: 'auto', zIndex: '-1' }} className="page">
              <form style={{ color: 'wheat', float: 'right', marginTop: 200, marginRight: 300 }} onSubmit = {this.handleSubmit}>
                <div className="settings">
                  <h1 style={{}} className="header">Расчет интеграла</h1>
                  <h2 className="header2">Введите подынтегральное выражение</h2>
                  <input style = {{marginLeft: '20px'}} type="text" onChange={this.onIntegralExpresionChange}></input>
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
                    <Pulse><Button style={{ marginLeft: 10 }} btnStyle="emphasis" btnSize="large" onClick={this.props.onDelAll}>Очистить все</Button></Pulse>
                  </div>  
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
          </div>     
        );
    }
    
}

function mapStateToProps(state1)
{
  return({
      AnswerList: state1.answerList,
  });
}

function mapDispatchToProps(dispatch)
{
  return{
    onCalc: (curList) => dispatch(Calculate(curList)),
    onDelAll: () => dispatch(DeleteAll()),
    onDel: (index) => dispatch(Delete(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (CalculationPage);