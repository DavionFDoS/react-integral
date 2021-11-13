import React from 'react';
import { Component } from "react";
import "./App.css";
import {SidebarData} from "./SidebarData";

class Sidebar extends Component 
{
    render()
    {
        return (
            <div className = "Sidebar">
                <ul className = 'SidebarList'>
                {SidebarData.map((val , key) => {
                    return(
                        <li className = 'Row' key = {key} 
                        id = {window.location.pathname === val.link ? "active" : ""}
                        onClick = {() => {window.location.pathname = val.link}}>
                            <div>
                                {val.icon}
                            </div>
                        </li>                   
                    )})}
                </ul>                
            </div>
        );
    }    
}

export default Sidebar;
