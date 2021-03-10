import React from 'react'
import {Icon,Linkw} from './styled.js'
import { FaLinkedin,FaTwitterSquare,FaDev,FaGithub } from 'react-icons/fa'

export default class Ports extends React.Component{
    render(){
    return(
    <div className="ports">
        <Icon pos="1" hov="#4875B4"><Linkw href="https://www.linkedin.com/in/lohit-aryan/">
            <FaLinkedin/>
            </Linkw></Icon>
        <Icon pos="3" hov="black"><Linkw href="https://dev.to/nodeicode">
            <FaDev/>
            </Linkw></Icon>
        <Icon pos="2" hov="#33CCFF"><Linkw href="https://twitter.com/nodeicode">
            <FaTwitterSquare/>
            </Linkw></Icon>
        <Icon pos="4" hov="black"><Linkw href="https://github.com/nodeicode">
            <FaGithub/>
            </Linkw></Icon>
        
    </div>
    )
}
}
