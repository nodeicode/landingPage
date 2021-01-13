import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin,faTwitterSquare,faDev,faGithub } from '@fortawesome/free-brands-svg-icons'
import {Icon,Linkw} from './styled.js'

export default class Ports extends React.Component{
    render(){
    return(
    <div className="ports">
        <Icon className="L I"><Linkw href="https://www.linkedin.com/in/lohit-aryan/"><FontAwesomeIcon  icon={faLinkedin}/></Linkw></Icon>
        <Icon className="T I"><Linkw href="https://twitter.com/nodeicode"><FontAwesomeIcon icon={faTwitterSquare}/></Linkw></Icon>
        <Icon className="D I"><Linkw href="https://dev.to/nodeicode"><FontAwesomeIcon icon={faDev}/></Linkw></Icon>
        <Icon className="G I"><Linkw href="https://github.com/nodeicode"><FontAwesomeIcon icon={faGithub}/></Linkw></Icon>
    <style jsx>{`
        .ports{
            grid-column: 5;
            grid-row:2;
            display: inline-grid;
            grid-auto-rows: 1fr 1fr 1fr 1fr;}

        .I{display: none;}

        .L{ 
            grid-row:1;
            transition: color 0.5s ease;
            color: inherit;
            align-self: center;}

        .L:hover{color: #4875B4;}

        .T{ 
            grid-row:2;
            align-self: center;
            transition: color 0.5s ease;
            color: inherit;}

        .T:hover{color:#33CCFF;}

        .D{
            align-self: center;
            grid-row:3;
            transition: color 0.5s ;
            color: inherit; 
            }

        .D:hover{color:black}

        .G{
            align-self: center;
            grid-row:4;
            transition: color 0.5s ;
            color: inherit; 
            }

        .G:hover{color:black}
    `}</style>
    </div>
    )
}}
