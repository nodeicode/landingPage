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
    </div>
    )
}}
