import React from 'react';
import { Component } from "react";
import BackGround from './imgonline-com-ua-Resize-JpYQQ4al88MXhv.png';
import { SocialIcon } from 'react-social-icons';
import RectFormula from './RectFormula.png'

class RectangleMethodDescription extends Component
{
    render()
    {
        return (  
            <div style = {{position: 'absolute', backgroundImage: `url(${BackGround})`, backgroundSize: 'cover',
             backgroundPosition: 'top' , backgroundRepeat: 'no-repeats', height: '100%', width: '100%',
              overflow: 'auto', zIndex: '-1' }} className="page">
              <form style={{ color: 'wheat', float: 'right', marginTop: 200, marginRight: 300 }}>
                <div className="RectangleMethodDescription">
                  <h1 style={{ position: "absolute", bottom: '75%', right: '7%', justifyContent: 'flex-end' }} className="header">Описание метода прямоугольников</h1>                  
                  <br/>
                  <text style={{textAlign: 'justify',position: "absolute", bottom: '50%', right: '3%', justifyContent: 'flex-end', maxWidth: 700}}>
                  Метод прямоугольников — метод численного интегрирования функции одной переменной, заключающийся в замене подынтегральной функции на многочлен нулевой степени,
                    то есть константу, на каждом элементарном отрезке. Если рассмотреть график подынтегральной функции,
                     то метод будет заключаться в приближённом вычислении площади под графиком суммированием площадей конечного числа прямоугольников,
                      ширина которых будет определяться расстоянием между соответствующими соседними узлами интегрирования,
                       а высота — значением подынтегральной функции в этих узлах. Алгебраический порядок точности равен 0. (Для формулы средних прямоугольников равен 1).
                       <br/>Если отрезок [a,b] является элементарным и не подвергается дальнейшему разбиению, значение интеграла можно найти по
                       <br/>                       
                  </text>
                  <img style={{ position: "absolute", bottom: '30%', right: '9%', justifyContent: 'flex-end' }} src = {RectFormula} alt = "rectFormula"/>
                </div>
              </form>
              <div style={{ position: "absolute", bottom: '0', right: '0', display: 'inline-block', justifyContent: 'flex-end' }}>
                <SocialIcon url='https://github.com/DavionFDoS' bgColor="#ffffff"/>
                <SocialIcon url='https://discord.com/channels/691588243434766386/691588243870711891'/>
                <p style = {{color: "wheat"}}>Деточенко М. А.</p>
              </div>
            </div>        
          );
    }
    
}
export default RectangleMethodDescription;