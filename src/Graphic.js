import React from 'react';
import { Component } from "react";
import BackGround from './imgonline-com-ua-Resize-JpYQQ4al88MXhv.png';
import { SocialIcon } from 'react-social-icons';
import Graphicf from "./Graphicf.png";

class Graphic extends Component
{
    render()
    {
        return (  
            <div style = {{position: 'absolute', backgroundImage: `url(${BackGround})`, backgroundSize: 'cover',
             backgroundPosition: 'top' , backgroundRepeat: 'no-repeats', height: '100%', width: '100%',
              overflow: 'auto', zIndex: '-1' }} className="page">
              <form style={{ color: 'wheat', float: 'right', marginTop: 200, marginRight: 300 }}>
                <div className="Graphic">
                  <h1 style={{ position: "absolute", bottom: '80%', right: '13.5%', justifyContent: 'flex-end' }} className="header">График функции</h1>
                  <p style = {{fontStyle: 'inherit', fontSize: '22px', position: "absolute", bottom: '75%', right: '15%', justifyContent: 'flex-end'}}> e^x * sin(x) * cos(x)dx</p>
                  <br />
                  <img style={{ position: "absolute", bottom: '12%', right: '5%', justifyContent: 'flex-end' }} src = {Graphicf} alt = "graphicf"/>
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
export default Graphic;