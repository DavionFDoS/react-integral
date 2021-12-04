import React from 'react';
import BackGround from './imgonline-com-ua-Resize-JpYQQ4al88MXhv.png';
import { SocialIcon } from 'react-social-icons';
import { Button } from './Buttons';
import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';
import AnswerItem from './AnswerItem';
import Sidebar from './Sidebar';
import axios from 'axios';
import {useState} from 'react'

const Pulse = styled.div`animation: 3s ${keyframes`${pulse}`} infinite`;

export default function CalculationPage()
{
      function ValidateAValue(a)
      {
        return a >=0;
      }

      function ValidateBValue(b)
      {
        return b >= 0;
      }

      function ValidateNValue(n)
      {
        return n % 2 === 0;
      }

      const [inputs, setInputs] = useState({
        a: 0,
        b: 0, 
        N: 100, 
        aValid: true,
        bValid: true,
        NValid: true, 
        integralExpresion: "x*x"});

      const [answerList, setAnswerList] = useState([])

      const deleteHandler = (index) =>{
        //this.props.onDel(index);
        let answerListNew = answerList;
        if(answerListNew.length !== 0){   
          answerListNew.splice(index,1);   
          setAnswerList(answerListNew.slice());
        }
      }
    
      const deleteAllHandler = () =>
      {
        const clearedAnswerList=[]
        setAnswerList(clearedAnswerList.slice());
        console.log(answerList);
      }
    
      function onAChange(e) {
        var val = e.target.value;
        var valid = ValidateAValue(val);
        setInputs({...inputs, a: e.target.value, aValid: valid});
      }
    
      function onBChange(e) {
        var val = e.target.value;
        var valid = ValidateBValue(val);
        setInputs({...inputs, b: e.target.value, bValid: valid});
      }
    
      function onNChange(e) {
        var val = e.target.value;
        var valid = ValidateNValue(val);
        setInputs({...inputs, N: e.target.value, NValid: valid});
      }

      function onIntegralExpresionChange(e) {
        setInputs({...inputs, integralExpresion: e.target.value});
      }

      function handleSubmit(e) {
        e.preventDefault();
        if(!(inputs.aValid === true && inputs.bValid === true && inputs.NValid === true)){
            alert("Please check inputed parameters again!");
        }
      }

      const calculateHandler = () =>{
        let currentList = answerList;
        console.log("Enter");
        console.log(currentList);
        let integralVars = {
          a: inputs.a,
          b: inputs.b,
          n: inputs.N,
          integral: inputs.integralExpresion
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
            currentList.unshift({answer:res.data.answer,a: integralVars.a, b: integralVars.b, N: integralVars.n});
            console.log("After");
            console.log(currentList);
            setAnswerList(currentList.slice());
            console.log("AnswerList");
            console.log(answerList);            
          })
          .catch(error => console.log(error));    
      }

      var aInputColor = inputs.aValid===true?"green":"red";
      var bInputColor = inputs.bValid===true?"green":"red";
      var NInputColor = inputs.NValid===true?"green":"red";
      
      let list = answerList.map((ans,index)=>
      {
      if(index === 0){  
        return(<div style = {{color: "red"}} key = {index}><AnswerItem  answer = {ans.answer} onDelete = {() => deleteHandler(index)}
          a = {ans.a} 
          b = {ans.b} 
          N = {ans.N}/>
          </div>)
      }
        return(<div key = {index}><AnswerItem  answer = {ans.answer} onDelete = {() => deleteHandler(index)}
        a = {ans.a} 
        b = {ans.b} 
        N = {ans.N}/>
        </div>)  
    })

      return (
          <div>
            <div style = {{position: 'absolute', backgroundImage: `url(${BackGround})`, backgroundSize: 'cover',
             backgroundPosition: 'top' , backgroundRepeat: 'no-repeats', height: '100%', width: '100%',
              overflow: 'auto', zIndex: '-1' }} className="page">
              <form style={{ color: 'wheat', float: 'right', marginTop: 200, marginRight: 300 }} onSubmit = {(e) => handleSubmit(e)}>
                <div className="settings">
                  <h1 style={{}} className="header">Расчет интеграла</h1>
                  <h2 className="header2">Введите подынтегральное выражение</h2>
                  <input value={inputs.integralExpresion} style = {{marginLeft: '20px'}} type="text" onChange={(e) =>onIntegralExpresionChange(e)}></input>
                  <br />
                  <br />
                  <label style = {{fontSize: '24px'}}>
                    a:
                    <input value={inputs.a} style = {{marginLeft: '5px', borderColor:aInputColor}} type="number" onChange={(e) =>onAChange()}></input>
                  </label>
                  <br />
                  <br />
                  <label style = {{fontSize: '24px'}}>
                    b:
                    <input value={inputs.b} style = {{marginLeft: '5px', borderColor:bInputColor}} type="number" onChange={(e) => onBChange(e)}></input>
                  </label>
                  <br />
                  <br />
                  <label style = {{fontSize: '24px'}}>
                    N:
                    <input value={inputs.N} style={{borderColor:NInputColor}} type="number" onChange={(e) => onNChange(e)} ></input>
                  </label>
                  <br />
                  <br />
                  <div style={{ display: 'inline-flex', marginTop: '20px' }}>
                    <Pulse><Button type = "submit" btnStyle="emphasis" btnSize="large" onClick={() => calculateHandler()}>Вычислить</Button></Pulse>
                    <Pulse><Button style={{ marginLeft: 10 }} btnStyle="emphasis" btnSize="large" onClick={() => deleteAllHandler()}>Очистить все</Button></Pulse>
                  </div>
                  {list}
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

// function mapStateToProps(state1)
// {
//   return({
//       AnswerList: state1.answerList,
//   });
// }

// function mapDispatchToProps(dispatch)
// {
//   return{
//     onCalc: (curList) => dispatch(Calculate(curList)),
//     onDelAll: () => dispatch(DeleteAll()),
//     onDel: (index) => dispatch(Delete(index))
//   }
// }