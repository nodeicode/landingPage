import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin,faTwitterSquare,faDev,faGithub } from '@fortawesome/free-brands-svg-icons'
import {Icon,Linkw} from './styled.js'

export default class Ports extends React.Component{
    render(){
    return(
    <div className="ports">
        <Icon className="L"><Linkw href="https://www.linkedin.com/in/lohit-aryan/"><FontAwesomeIcon width="16" icon={faLinkedin}/></Linkw></Icon>
        <Icon className="T"><Linkw href="https://twitter.com/nodeicode"><FontAwesomeIcon width="16" icon={faTwitterSquare}/></Linkw></Icon>
        <Icon className="D"><Linkw href="https://dev.to/nodeicode"><FontAwesomeIcon width="16" icon={faDev}/></Linkw></Icon>
        <Icon className="G"><Linkw href="https://github.com/nodeicode"><FontAwesomeIcon width="16" icon={faGithub}/></Linkw></Icon>
    </div>
    )
}}
