import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin,faTwitterSquare,faDev,faGithub } from '@fortawesome/free-brands-svg-icons'
import {Icon,Linkw} from './styled.js'

export default class Ports extends React.Component{
    render(){
    return(
    <div className="ports">
        <Icon className="L" pos="1" hov="#4875B4"><Linkw href="https://www.linkedin.com/in/lohit-aryan/"><FontAwesomeIcon  icon={faLinkedin}/></Linkw></Icon>
        <Icon className="T" pos="2" hov="#33CCFF"><Linkw href="https://twitter.com/nodeicode"><FontAwesomeIcon icon={faTwitterSquare}/></Linkw></Icon>
        <Icon className="D" pos="3" hov="black"><Linkw href="https://dev.to/nodeicode"><FontAwesomeIcon icon={faDev}/></Linkw></Icon>
        <Icon className="G" pos="4" hov="black"><Linkw href="https://github.com/nodeicode"><FontAwesomeIcon icon={faGithub}/></Linkw></Icon>
    </div>
    )
}}
