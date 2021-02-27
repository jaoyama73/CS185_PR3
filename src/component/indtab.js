import React, {Component} from 'react';

function Itab(props){
    const addstyle = () =>{
        if(props.out.id == props.activetab){
            return {backgroundColor:'rgb(129, 106, 106)',
            display: 'block',
            color: '#fff8f5',
            padding: '14px 16px',
            textDecoration: 'none'}
        }
        else{
            return {
            
            display: 'block',
            color: '#fff8f5',
            padding: '14px 16px',
            textDecoration: 'none'}
        }
    };

    function MouseOver(event){
        event.target.style.background = 'rgb(129, 106, 106)';
    }

    function MouseOut(event){
        if(props.out.id != props.activetab){
            event.target.style.background = '';
     }
    }
        
    console.log(props)

    return(
        <div style={{backgroundColor:'gb(129, 106, 106)',float:'left'}}>
            <div style={addstyle()} onMouseOver={MouseOver} onMouseOut={MouseOut} onClick={props.ctab.bind(this,props.out.id)}>{props.out.title}</div>

        </div>
    )
}



export default Itab;